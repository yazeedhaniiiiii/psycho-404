(() => {
  if (!window.PSYCHO404_RECOVERY_FLOW || !window.PSYCHO404_DB?.client) return;

  const panel = document.createElement('main');
  panel.setAttribute('role', 'main');
  panel.style.cssText = [
    'position:fixed', 'inset:0', 'z-index:99999', 'display:grid', 'place-items:center',
    'padding:24px', 'background:#0b1220', 'color:#f8fafc',
    'font-family:Inter,system-ui,-apple-system,Segoe UI,sans-serif'
  ].join(';');
  panel.innerHTML = `
    <section style="width:min(100%,440px);padding:32px;border:1px solid #26354d;border-radius:18px;background:#111c2e;box-shadow:0 24px 80px #0008">
      <p style="margin:0 0 8px;color:#7dd3fc;font-size:12px;letter-spacing:.14em;text-transform:uppercase">PSYCHO 404</p>
      <h1 style="margin:0 0 10px;font-size:25px">إعادة تعيين كلمة المرور</h1>
      <p style="margin:0 0 24px;color:#b8c4d6;line-height:1.7">أنشئ كلمة مرور جديدة لحساب لوحة الإدارة.</p>
      <form id="passwordRecoveryForm">
        <label for="recoveryPassword" style="display:block;margin-bottom:7px">كلمة المرور الجديدة</label>
        <input id="recoveryPassword" type="password" autocomplete="new-password" minlength="8" required
          style="box-sizing:border-box;width:100%;margin-bottom:16px;padding:12px;border:1px solid #43536c;border-radius:9px;background:#0b1220;color:#fff;font:inherit">
        <label for="recoveryPasswordConfirm" style="display:block;margin-bottom:7px">تأكيد كلمة المرور</label>
        <input id="recoveryPasswordConfirm" type="password" autocomplete="new-password" minlength="8" required
          style="box-sizing:border-box;width:100%;margin-bottom:18px;padding:12px;border:1px solid #43536c;border-radius:9px;background:#0b1220;color:#fff;font:inherit">
        <button id="recoverySubmit" type="submit"
          style="width:100%;padding:12px;border:0;border-radius:9px;background:#38bdf8;color:#082033;font:inherit;font-weight:700;cursor:pointer">حفظ كلمة المرور</button>
        <p id="recoveryMessage" role="status" aria-live="polite" style="min-height:24px;margin:14px 0 0;color:#cbd5e1;line-height:1.6"></p>
      </form>
    </section>`;
  document.body.appendChild(panel);

  const form = panel.querySelector('#passwordRecoveryForm');
  const password = panel.querySelector('#recoveryPassword');
  const confirm = panel.querySelector('#recoveryPasswordConfirm');
  const submit = panel.querySelector('#recoverySubmit');
  const message = panel.querySelector('#recoveryMessage');
  let recoverySession = false;
  submit.disabled = true;
  submit.style.opacity = '0.55';

  window.PSYCHO404_DB.client.auth.getSession().then(({ data, error }) => {
    recoverySession = Boolean(!error && data.session);
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
    if (recoverySession) {
      submit.disabled = false;
      submit.style.opacity = '1';
    } else {
      message.textContent = 'رابط الاستعادة منتهي أو مستخدم. اطلب رسالة استعادة جديدة.';
    }
  }).catch(() => {
    message.textContent = 'تعذر التحقق من الرابط. اطلب رسالة استعادة جديدة.';
    submit.disabled = true;
    submit.style.opacity = '0.55';
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    message.textContent = '';
    if (!recoverySession) {
      message.textContent = 'رابط الاستعادة منتهي أو مستخدم. اطلب رسالة استعادة جديدة.';
      return;
    }
    if (password.value.length < 8) {
      message.textContent = 'استخدم كلمة مرور من 8 أحرف على الأقل.';
      return;
    }
    if (password.value !== confirm.value) {
      message.textContent = 'كلمتا المرور غير متطابقتين.';
      return;
    }

    submit.disabled = true;
    submit.textContent = 'جارٍ الحفظ…';
    const { error } = await window.PSYCHO404_DB.client.auth.updateUser({ password: password.value });
    password.value = '';
    confirm.value = '';
    if (error) {
      message.textContent = 'تعذر حفظ كلمة المرور. قد يكون الرابط انتهى؛ اطلب رسالة جديدة.';
      submit.disabled = false;
      submit.textContent = 'حفظ كلمة المرور';
      return;
    }

    message.textContent = 'تم حفظ كلمة المرور. جارٍ فتح صفحة دخول الإدارة…';
    await window.PSYCHO404_DB.client.auth.signOut();
    window.setTimeout(() => window.location.replace('admin/login.html?password-reset=success'), 900);
  });
})();
