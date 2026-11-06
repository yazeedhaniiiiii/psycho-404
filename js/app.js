/**
 * PSYCHO 404 - Main Application Script
 * Smooth interactions, Canvas abstract waves, Accordion logic, Modals & Toast system
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. Icon Library (Clean Minimal SVGs)
  // ==========================================================================
  const ICONS = {
    // Brand & System
    brain: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-4.54Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-4.54Z"/></svg>`,
    chevronDown: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
    play: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
    arrowRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    close: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    copy: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
    check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    externalLink: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    menu: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
    info: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,

    // 4 Main Navigation Categories
    notes: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>`,
    reports: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="16" y1="18" x2="16" y2="15"/><line x1="8" y1="18" x2="8" y2="16"/></svg>`,
    mindmaps: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><circle cx="5" cy="18" r="3"/><circle cx="19" cy="18" r="3"/><path d="M12 8v4"/><path d="M12 12l-5 3.5"/><path d="M12 12l5 3.5"/></svg>`,
    quickvids: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="4"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/></svg>`,

    // 7 Lecture Resources
    powerpoint: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><path d="M8 8h5a2 2 0 0 1 0 4H8z"/></svg>`,
    doctors: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 3h1.8a1.7 1.7 0 0 1 1.7 1.7v4.6a4 4 0 0 1-8 0V4.7A1.7 1.7 0 0 1 1.7 3h1.8"/><path d="M8 12.3a8 8 0 0 0 8 8h1a4 4 0 0 0 4-4v-1.3"/><circle cx="21" cy="15" r="2"/></svg>`,
    flashcards: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
    quizzes: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
    transcription: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>`,
    telegram: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,
  };

  // ==========================================================================
  // 2. Abstract Wavy Canvas Background Generator
  // ==========================================================================
  function initWavyBackground() {
    const canvas = document.getElementById('wavy-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;
    let isAnimating = true;
    let animationFrameId = null;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      if (!isAnimating && !prefersReducedMotion) {
        renderFrame();
      }
    }, { passive: true });

    window.addEventListener('mousemove', (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    }, { passive: true });

    // Pause animation when tab is inactive to save battery and GPU
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopAnimation();
      } else if (window.scrollY < 1200 && !prefersReducedMotion) {
        startAnimation();
      }
    });

    // Pause animation when user scrolls deep into course lectures
    let scrollCheckTicking = false;
    window.addEventListener('scroll', () => {
      if (!scrollCheckTicking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 1200) {
            stopAnimation();
          } else if (!isAnimating && !document.hidden && !prefersReducedMotion) {
            startAnimation();
          }
          scrollCheckTicking = false;
        });
        scrollCheckTicking = true;
      }
    }, { passive: true });

    // Wave parameters (harmonic smooth curves with Dark Navy / subtle cyan tones)
    const waves = [
      {
        amplitude: 45,
        wavelength: 0.0035,
        speed: 0.0008,
        offset: 0,
        yRatio: 0.32,
        color1: 'rgba(27, 41, 64, 0.45)',
        color2: 'rgba(16, 24, 39, 0.8)',
        strokeColor: 'rgba(101, 217, 255, 0.08)',
        lineWidth: 1.5
      },
      {
        amplitude: 65,
        wavelength: 0.0022,
        speed: 0.0005,
        offset: 2.4,
        yRatio: 0.58,
        color1: 'rgba(20, 32, 54, 0.4)',
        color2: 'rgba(16, 24, 39, 0.85)',
        strokeColor: 'rgba(40, 123, 255, 0.12)',
        lineWidth: 2
      },
      {
        amplitude: 55,
        wavelength: 0.003,
        speed: -0.0007,
        offset: 4.1,
        yRatio: 0.78,
        color1: 'rgba(27, 41, 64, 0.35)',
        color2: 'rgba(16, 24, 39, 0.9)',
        strokeColor: 'rgba(101, 217, 255, 0.06)',
        lineWidth: 1.2
      }
    ];

    let time = 0;

    function renderFrame() {
      // Smooth mouse easing
      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;

      // Base background fill
      ctx.fillStyle = '#101827';
      ctx.fillRect(0, 0, width, height);

      const mouseInfluenceX = (mouseX / width - 0.5) * 40;
      const mouseInfluenceY = (mouseY / height - 0.5) * 30;
      const step = width < 768 ? 14 : 10;

      // Draw each wave layer
      waves.forEach((w) => {
        const baseY = height * w.yRatio + mouseInfluenceY;
        ctx.beginPath();
        ctx.moveTo(0, height);
        ctx.lineTo(0, baseY);

        for (let x = 0; x <= width + step; x += step) {
          const distanceFactor = Math.sin((x + mouseInfluenceX) * w.wavelength + time * w.speed + w.offset);
          const y = baseY + distanceFactor * w.amplitude;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        // Gradient fill
        const grad = ctx.createLinearGradient(0, baseY - w.amplitude, 0, height);
        grad.addColorStop(0, w.color1);
        grad.addColorStop(1, w.color2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Wave crest highlight line
        ctx.beginPath();
        for (let x = 0; x <= width + step; x += step) {
          const distanceFactor = Math.sin((x + mouseInfluenceX) * w.wavelength + time * w.speed + w.offset);
          const y = baseY + distanceFactor * w.amplitude;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = w.strokeColor;
        ctx.lineWidth = w.lineWidth;
        ctx.stroke();
      });
    }

    function animate() {
      if (!isAnimating) return;
      renderFrame();
      time += 16;
      animationFrameId = requestAnimationFrame(animate);
    }

    function startAnimation() {
      if (isAnimating || prefersReducedMotion) return;
      isAnimating = true;
      animate();
    }

    function stopAnimation() {
      if (!isAnimating) return;
      isAnimating = false;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    }

    if (prefersReducedMotion) {
      renderFrame();
    } else {
      animate();
    }
  }

  // ==========================================================================
  // Helper: Open Destination URLs (with universal reader for interactive HTML reports)
  // ==========================================================================
  function openDestinationUrl(url, title = 'PSYCHO 404') {
    if (!url || !url.trim()) return;
    const clean = url.trim();

    // 1. If the URL is ALREADY a reader link (contains reader.html), open it directly without re-wrapping!
    if (clean.includes('reader.html')) {
      window.open(clean, '_blank', 'noopener,noreferrer');
      return;
    }

    // 2. If it's an interactive HTML report/file, route it through the universal reader
    const isHtmlReport = /\.html?(\?.*)?$/i.test(clean) || clean.includes('/lecture-reports/');
    if (isHtmlReport) {
      const readerUrl = `assets/reader.html?src=${encodeURIComponent(clean)}&title=${encodeURIComponent(title || 'تقرير المحاضرة')}`;
      window.open(readerUrl, '_blank', 'noopener,noreferrer');
    } else {
      window.open(clean, '_blank', 'noopener,noreferrer');
    }
  }

  // ==========================================================================
  // 3. Render Navigation Categories & Expandable Sub-panel
  // ==========================================================================
  let activeCategoryId = null;

  function renderNavigationCategories() {
    const container = document.getElementById('nav-categories-container');
    if (!container || !window.COURSE_DATA) return;

    const categories = window.COURSE_DATA.navigationCategories;
    container.innerHTML = categories
      .map((cat) => {
        const iconSvg = ICONS[cat.icon] || ICONS.notes;
        const hasSubsections = Array.isArray(cat.subsections) && cat.subsections.length > 0;
        const itemsCount = hasSubsections
          ? cat.subsections.reduce((acc, sub) => acc + (Array.isArray(sub.items) ? sub.items.length : 0), 0)
          : (Array.isArray(cat.items) ? cat.items.length : 0);
        const footerLabel = hasSubsections ? `View 2 Lists (${itemsCount})` : `View ${cat.title} (${itemsCount})`;
        return `
          <button class="nav-cat-card" data-category-id="${cat.id}" role="button" tabindex="0" aria-expanded="false">
            <div class="cat-card-header">
              <div class="cat-icon-box">
                ${iconSvg}
              </div>
              <span class="cat-badge">${cat.badge || "Core"}</span>
            </div>
            <div class="cat-card-body">
              <h3 class="nav-cat-title">${cat.title}</h3>
              <p class="nav-cat-desc">${cat.shortDesc}</p>
            </div>
            <div class="cat-card-footer">
              <span>${footerLabel}</span>
              <span class="cat-arrow">${ICONS.arrowRight}</span>
            </div>
          </button>
        `;
      })
      .join('');

    // Attach click events to category cards
    container.querySelectorAll('.nav-cat-card').forEach((card) => {
      card.addEventListener('click', () => {
        const catId = card.getAttribute('data-category-id');
        handleCategorySelection(catId, card);
      });
    });

    // Close buttons for the expanded panel
    const closeBtn = document.getElementById('cat-panel-close-btn');
    const collapseBtn = document.getElementById('btn-collapse-cat-panel');
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeCategoryPanel();
      });
    }
    if (collapseBtn) {
      collapseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeCategoryPanel();
      });
    }
  }

  function handleCategorySelection(catId, cardElem) {
    const panel = document.getElementById('category-expanded-panel');
    const allCards = document.querySelectorAll('.nav-cat-card');
    if (!panel || !window.COURSE_DATA) return;

    // If clicking the active card again, toggle it closed
    if (activeCategoryId === catId && panel.classList.contains('open')) {
      closeCategoryPanel();
      return;
    }

    const catObj = window.COURSE_DATA.navigationCategories.find((c) => c.id === catId);
    if (!catObj) return;

    activeCategoryId = catId;
    allCards.forEach((c) => {
      c.classList.remove('active');
      c.setAttribute('aria-expanded', 'false');
    });

    if (cardElem) {
      cardElem.classList.add('active');
      cardElem.setAttribute('aria-expanded', 'true');
    }

    // Populate panel header
    const titleElem = document.getElementById('cat-panel-title');
    const badgeElem = document.getElementById('cat-panel-badge');
    const iconElem = document.getElementById('cat-panel-icon');
    const itemsGrid = document.getElementById('cat-panel-items-grid');

    if (titleElem) titleElem.textContent = `${catObj.title} Hub`;
    if (badgeElem) badgeElem.textContent = catObj.badge || 'Category Resources';
    if (iconElem) iconElem.innerHTML = ICONS[catObj.icon] || ICONS.notes;

    // Check if this category has partitioned subsections (e.g. Mind Maps & Flashcards)
    if (itemsGrid) {
      if (Array.isArray(catObj.subsections) && catObj.subsections.length > 0) {
        itemsGrid.classList.add('has-subsections');
        const totalLectures = catObj.subsections.reduce((acc, s) => acc + s.items.length, 0);

        const subNavHtml = `
          <div class="cat-subsections-nav" role="tablist" aria-label="Subsections Switcher">
            <button class="cat-sub-btn active" data-sub-target="all" role="tab" aria-selected="true">
              <span>All Sections (${totalLectures})</span>
            </button>
            ${catObj.subsections
              .map(
                (sub) => `
              <button class="cat-sub-btn" data-sub-target="${sub.id}" role="tab" aria-selected="false">
                <span class="sub-btn-icon">${ICONS[sub.icon] || ''}</span>
                <span>${sub.title} (${sub.items.length})</span>
              </button>
            `
              )
              .join('')}
          </div>
        `;

        const subBlocksHtml = catObj.subsections
          .map((sub) => {
            const subItemsHtml = sub.items
              .map((item, idx) => {
                const hasLinks = Array.isArray(item.links) && item.links.length > 0;
                const hasUrl = Boolean((item.url && item.url.trim() !== "") || hasLinks);

                let middleContent = '';
                if (hasLinks) {
                  middleContent = `
                    <div class="cat-item-decks">
                      ${item.links
                        .map(
                          (link) => `
                        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="cat-item-deck-pill" onclick="event.stopPropagation()" title="${link.title}">
                          <span class="pill-dot"></span>
                          <span class="pill-text">${link.title}</span>
                          <span class="pill-icon">${ICONS.externalLink}</span>
                        </a>
                      `
                        )
                        .join('')}
                    </div>
                  `;
                } else {
                  const thumbHtml = item.thumbnail
                    ? `
                      <div class="cat-item-thumb-wrapper">
                        <img src="${item.thumbnail}" alt="${item.title}" class="cat-item-thumb-img" loading="lazy">
                        <div class="cat-item-thumb-overlay">
                          <span class="cat-item-play-icon">${ICONS.video || '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>'}</span>
                        </div>
                      </div>
                    `
                    : '';
                  middleContent = `
                    ${thumbHtml}
                    <p class="cat-item-desc">${item.description || "Content has not been added yet."}</p>
                  `;
                }

                const footerText = hasLinks ? `${item.links.length} Decks • View Details` : (hasUrl ? "Open Destination" : "Editable Placeholder");

                return `
                  <div class="cat-item-card ${hasLinks ? 'has-multi-links' : ''} ${item.thumbnail ? 'has-thumbnail' : ''}" data-sub-id="${sub.id}" data-item-index="${idx}" role="button" tabindex="0">
                    <div class="cat-item-header">
                      <div class="cat-item-number">${item.number || (idx + 1).toString().padStart(2, '0')}</div>
                      <div class="cat-item-title-group">
                        <h4 class="cat-item-title" title="${item.title}">${item.title}</h4>
                        <span class="cat-item-badge">${sub.title}${hasLinks ? ` • ${item.links.length} Decks` : ''}</span>
                      </div>
                    </div>
                    ${middleContent}
                    <div class="cat-item-footer">
                      <span>${footerText}</span>
                      <span style="display: flex; align-items: center;">${hasUrl ? ICONS.externalLink : ICONS.arrowRight}</span>
                    </div>
                  </div>
                `;
              })
              .join('');

            return `
              <div class="cat-subsection-block" id="block-${sub.id}">
                <div class="cat-subsection-header">
                  <div class="cat-sub-header-left">
                    <div class="cat-sub-icon-box">${ICONS[sub.icon] || ICONS.mindmaps}</div>
                    <div>
                      <div class="cat-sub-title-row">
                        <h4 class="cat-sub-heading">${sub.title}</h4>
                        <span class="cat-sub-badge">${sub.badge || `${sub.items.length} Lectures`}</span>
                      </div>
                      <p class="cat-sub-summary">${sub.description}</p>
                    </div>
                  </div>
                </div>
                <div class="cat-panel-items-grid">
                  ${subItemsHtml}
                </div>
              </div>
            `;
          })
          .join('');

        itemsGrid.innerHTML = `
          <div class="cat-subsections-wrapper">
            ${subNavHtml}
            <div class="cat-subsections-blocks">
              ${subBlocksHtml}
            </div>
          </div>
        `;

        // Attach switcher tab events
        itemsGrid.querySelectorAll('.cat-sub-btn').forEach((btn) => {
          btn.addEventListener('click', () => {
            itemsGrid.querySelectorAll('.cat-sub-btn').forEach((b) => {
              b.classList.remove('active');
              b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            const target = btn.getAttribute('data-sub-target');
            const blocks = itemsGrid.querySelectorAll('.cat-subsection-block');
            blocks.forEach((block) => {
              if (target === 'all' || block.id === `block-${target}`) {
                block.style.display = '';
              } else {
                block.style.display = 'none';
              }
            });
          });
        });

        // Attach click & keyboard handlers to cards inside subsections
        itemsGrid.querySelectorAll('.cat-item-card').forEach((card) => {
          const handleSelectCard = () => {
            const subId = card.getAttribute('data-sub-id');
            const idx = parseInt(card.getAttribute('data-item-index'), 10);
            const sub = catObj.subsections.find((s) => s.id === subId);
            if (sub && sub.items[idx]) {
              const item = sub.items[idx];
              if (item.links && item.links.length > 0) {
                openCategoryItemModal(item, { title: `${catObj.title} &bull; ${sub.title}`, icon: sub.icon });
              } else if (item.url && item.url.trim() !== "") {
                openDestinationUrl(item.url, item.title);
              } else {
                openCategoryItemModal(item, { title: `${catObj.title} &bull; ${sub.title}`, icon: sub.icon });
              }
            }
          };

          card.addEventListener('click', handleSelectCard);
          card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleSelectCard();
            }
          });
        });
      } else {
        itemsGrid.classList.remove('has-subsections');
        // Render standard items grid (The 9 Lectures for this category)
        const items = Array.isArray(catObj.items) ? catObj.items : [];
        if (items.length === 0) {
          itemsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; padding: 2rem; text-align: center; color: var(--text-muted);">
              No resources have been added to this category yet.
            </div>
          `;
        } else {
          itemsGrid.innerHTML = items
            .map((item, idx) => {
              const hasLinks = Array.isArray(item.links) && item.links.length > 0;
              const hasUrl = Boolean((item.url && item.url.trim() !== "") || hasLinks);

              let middleContent = '';
              if (hasLinks) {
                middleContent = `
                  <div class="cat-item-decks">
                    ${item.links
                      .map(
                        (link) => `
                      <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="cat-item-deck-pill" onclick="event.stopPropagation()" title="${link.title}">
                        <span class="pill-dot"></span>
                        <span class="pill-text">${link.title}</span>
                        <span class="pill-icon">${ICONS.externalLink}</span>
                      </a>
                    `
                      )
                      .join('')}
                  </div>
                `;
              } else {
                const thumbHtml = item.thumbnail
                  ? `
                    <div class="cat-item-thumb-wrapper">
                      <img src="${item.thumbnail}" alt="${item.title}" class="cat-item-thumb-img" loading="lazy">
                      <div class="cat-item-thumb-overlay">
                        <span class="cat-item-play-icon">${ICONS.video || '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>'}</span>
                      </div>
                    </div>
                  `
                  : '';
                middleContent = `
                  ${thumbHtml}
                  <p class="cat-item-desc" title="${item.description || ''}">${item.description || "Content has not been added yet."}</p>
                `;
              }

              const isQuickVid = item.type === 'quickvids' || catObj.id === 'cat-quickvids';
              const footerText = hasLinks ? `${item.links.length} Links • View Details` : (hasUrl ? (isQuickVid ? "Watch Video" : "Open Destination") : "Editable Placeholder");

              return `
                <div class="cat-item-card ${hasLinks ? 'has-multi-links' : ''} ${item.thumbnail ? 'has-thumbnail' : ''}" data-item-index="${idx}" role="button" tabindex="0">
                  <div class="cat-item-header">
                    <div class="cat-item-number">${item.number || (idx + 1).toString().padStart(2, '0')}</div>
                    <div class="cat-item-title-group">
                      <h4 class="cat-item-title" title="${item.title}">${item.title}</h4>
                      <span class="cat-item-badge">${catObj.title}${hasLinks ? ` • ${item.links.length} Links` : ''}</span>
                    </div>
                  </div>
                  ${middleContent}
                  <div class="cat-item-footer">
                    <span>${footerText}</span>
                    <span style="display: flex; align-items: center;">${hasUrl ? ICONS.externalLink : ICONS.arrowRight}</span>
                  </div>
                </div>
              `;
            })
            .join('');

          // Attach click & keyboard handlers to category items
          itemsGrid.querySelectorAll('.cat-item-card').forEach((card) => {
            const handleCardClick = () => {
              const idx = parseInt(card.getAttribute('data-item-index'), 10);
              const item = items[idx];
              if (item) {
                if (item.links && item.links.length > 0) {
                  openCategoryItemModal(item, catObj);
                } else if (item.url && item.url.trim() !== "") {
                  openDestinationUrl(item.url, item.title);
                } else {
                  openCategoryItemModal(item, catObj);
                }
              }
            };
            card.addEventListener('click', handleCardClick);
            card.addEventListener('keydown', (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCardClick();
              }
            });
          });
        }
      }
    }

    // Smoothly expand the sub-panel
    panel.classList.add('open');

    // Smooth gentle scroll to keep the panel nicely in view without jumping to lectures
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function closeCategoryPanel() {
    activeCategoryId = null;
    const panel = document.getElementById('category-expanded-panel');
    if (panel) panel.classList.remove('open');
    const itemsGrid = document.getElementById('cat-panel-items-grid');
    if (itemsGrid) itemsGrid.classList.remove('has-subsections');
    document.querySelectorAll('.nav-cat-card').forEach((c) => {
      c.classList.remove('active');
      c.setAttribute('aria-expanded', 'false');
    });
  }

  function openCategoryItemModal(item, catObj) {
    if (!resourceModal) return;

    const lecturePrefix = item.number ? `Lecture ${item.number} • ` : "";
    document.getElementById('modal-lecture-name').textContent = `${lecturePrefix}${catObj.title}`;
    document.getElementById('modal-resource-name').textContent = item.title;

    const iconBox = document.getElementById('modal-icon-container');
    if (iconBox) {
      iconBox.innerHTML = ICONS[item.type] || ICONS[catObj.icon] || ICONS.notes;
    }

    const singleField = document.getElementById('modal-single-field');
    const multiField = document.getElementById('modal-multi-field');
    const multiList = document.getElementById('modal-multi-links-list');
    const noticeTitle = document.getElementById('modal-notice-title');
    const noticeDesc = document.getElementById('modal-notice-desc');

    if (item.links && item.links.length > 0) {
      const isTelegram = item.links.some((l) => l.url && l.url.includes('t.me'));
      const isFlashcards = item.type === 'flashcards';

      if (noticeTitle) {
        noticeTitle.textContent = `${item.title} • Available Study Links (${item.links.length} Parts/Decks)`;
      }
      if (noticeDesc) {
        if (isFlashcards) {
          noticeDesc.textContent = "Click 'Open' on any deck below to launch active recall flashcards in Google NotebookLM, or copy the link to share.";
        } else if (isTelegram) {
          noticeDesc.textContent = "Click 'Open' on any part below to open the lecture notes on Telegram, or copy the link to share.";
        } else {
          noticeDesc.textContent = "Click 'Open' on any link below to view the resource, or copy to share.";
        }
      }
      if (singleField) singleField.style.display = 'none';
      if (multiField) {
        multiField.style.display = 'flex';
        multiList.innerHTML = item.links
          .map(
            (link) => `
          <div class="modal-link-item">
            <div class="modal-link-info">
              <span class="modal-link-title">${link.title}</span>
              <span class="modal-link-url">${link.url}</span>
            </div>
            <div class="modal-link-actions">
              <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="btn-link-open">
                <span>Open</span>
                ${ICONS.externalLink}
              </a>
              <button class="btn-link-copy" data-url="${link.url}" title="Copy Link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </div>
          </div>
        `
          )
          .join('');

        multiList.querySelectorAll('.btn-link-copy').forEach((btn) => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const urlToCopy = btn.getAttribute('data-url');
            if (urlToCopy) {
              navigator.clipboard
                .writeText(urlToCopy)
                .then(() => {
                  showToast(`${item.title} link copied to clipboard!`);
                })
                .catch(() => {
                  showToast("Link: " + urlToCopy);
                });
            }
          });
        });
      }
    } else {
      if (noticeTitle) noticeTitle.textContent = "Editable Resource Placeholder";
      if (noticeDesc) noticeDesc.textContent = "This resource slot has not been configured yet. The course administrator can add its link in the admin dashboard.";
      if (singleField) singleField.style.display = 'flex';
      if (multiField) multiField.style.display = 'none';
      document.getElementById('modal-placeholder-input').value = item.url || item.description || "[Editable Placeholder]";
    }

    resourceModal.classList.add('active');
  }

  // ==========================================================================
  // 4. Render Free Lectures
  // ==========================================================================
  function renderFreeLectures() {
    const container = document.getElementById('free-parts-container');
    const headline = document.getElementById('free-lecture-headline-title');
    if (!container || !window.COURSE_DATA) return;

    const data = window.COURSE_DATA.freeLectures;
    if (headline) headline.textContent = data.lectureTitle;

    container.innerHTML = data.parts
      .map((part) => {
        const hasUrl = Boolean(part.videoUrl && part.videoUrl.trim() !== "");
        const targetUrl = hasUrl ? part.videoUrl : "#";
        const linkAttrs = hasUrl ? `href="${targetUrl}" target="_blank" rel="noopener noreferrer"` : `href="#" data-action="watch-video"`;

        const thumbImg = part.thumbnail || 'free-lecture-thumb.jpg';

        return `
          <div class="video-part-card" data-part-id="${part.id}" data-url="${targetUrl}">
            <a ${linkAttrs} class="video-thumb-frame" aria-label="Watch ${part.title} - Biological Bases of Behaviour">
              <img src="${thumbImg}" alt="${part.title} Cover - Biological Bases of Behaviour" class="video-thumb-img" loading="lazy">
              <div class="video-thumb-overlay"></div>
              <span class="part-badge-tag">${part.title}</span>
              <div class="play-trigger-btn">
                ${ICONS.play}
              </div>
              <span class="duration-tag">${part.duration || "Telegram"}</span>
            </a>
            <div class="video-card-body">
              <h4 class="video-part-title">${part.title}</h4>
              <p class="video-part-desc">${part.description}</p>
            </div>
            <div class="video-action-row">
              <a ${linkAttrs} class="btn-watch-placeholder">
                <span style="display: flex; align-items: center; color: var(--accent-secondary);">${ICONS.telegram}</span>
                <span>Watch ${part.title} on Telegram</span>
                <span style="opacity: 0.8; display: flex; align-items: center;">${ICONS.externalLink}</span>
              </a>
            </div>
          </div>
        `;
      })
      .join('');

    // Attach click events on the entire card for seamless UX
    container.querySelectorAll('.video-part-card').forEach((card) => {
      card.addEventListener('click', (e) => {
        // If clicking on an anchor tag directly, native browser navigation will trigger
        if (e.target.closest('a')) return;

        const partId = card.getAttribute('data-part-id');
        const part = data.parts.find((p) => p.id === partId);
        if (part && part.videoUrl && part.videoUrl.trim() !== "") {
          window.open(part.videoUrl, '_blank', 'noopener,noreferrer');
        } else if (part) {
          openVideoModal(part.title, part.id);
        }
      });
    });
  }

  // ==========================================================================
  // 5. Render Course Lectures & Accordions
  // ==========================================================================
  function renderCourseLectures() {
    const container = document.getElementById('lectures-accordion-list');
    if (!container || !window.COURSE_DATA) return;

    const lectures = window.COURSE_DATA.courseLectures;

    container.innerHTML = lectures
      .map((lecture, idx) => {
        const isFirst = idx === 0; // Optionally keep first open or closed
        const resourcesHtml = lecture.resources
          .map((res) => {
            const iconSvg = ICONS[res.type] || ICONS.notes;
            const hasLinks = Array.isArray(res.links) && res.links.length > 0;
            const hasUrl = Boolean((res.url && res.url.trim() !== "") || hasLinks);
            let statusText = "Editable Link";
            if (hasLinks) {
              const isTg = res.links.some((l) => l.url && l.url.includes("t.me"));
              const unit = isTg ? "Parts" : "Decks";
              const platform = isTg ? "Telegram" : "NotebookLM";
              statusText = `${res.links.length} ${unit} • ${platform}`;
            } else if (hasUrl) {
              statusText = res.url.includes("t.me") ? "Telegram Link" : res.url.includes("notebooklm") ? "NotebookLM" : "Direct Link";
            }
            return `
              <div class="resource-card ${hasLinks ? 'has-multi-links' : ''}" data-lecture-id="${lecture.id}" data-resource-id="${res.id}" data-resource-type="${res.type}" role="button" tabindex="0">
                <div class="resource-icon-box">
                  ${iconSvg}
                </div>
                <div class="resource-info">
                  <span class="resource-name" title="${res.name}">${res.name}</span>
                  <span class="resource-status">
                    <span class="status-indicator" ${hasUrl ? 'style="background: var(--accent-secondary); opacity: 1; box-shadow: 0 0 6px var(--accent-secondary);"' : ''}></span>
                    <span>${statusText}</span>
                  </span>
                </div>
                <div class="resource-action-icon">
                  ${hasUrl ? ICONS.externalLink : ICONS.externalLink}
                </div>
              </div>
            `;
          })
          .join('');

        return `
          <div class="accordion-item" id="${lecture.id}" data-lecture-title="${lecture.title.toLowerCase()}">
            <button class="accordion-trigger" aria-expanded="false" aria-controls="content-${lecture.id}">
              <div class="trigger-left">
                <div class="lecture-number-badge">${lecture.number}</div>
                <div class="trigger-info">
                  <div class="trigger-title-row">
                    <span class="lecture-title-text">${lecture.title}</span>
                    <span class="lecture-pill">${lecture.badge}</span>
                  </div>
                  <div class="trigger-meta">
                    <span>${lecture.resources.length} Academic Resources</span>
                  </div>
                </div>
              </div>
              <div class="trigger-right">
                <span class="resources-count-badge">
                  ${ICONS.brain}
                  <span>${lecture.resources.length} Resources</span>
                </span>
                <span class="chevron-icon">
                  ${ICONS.chevronDown}
                </span>
              </div>
            </button>
            <div class="accordion-content" id="content-${lecture.id}">
              <div class="accordion-inner">
                <div class="resources-grid">
                  ${resourcesHtml}
                </div>
              </div>
            </div>
          </div>
        `;
      })
      .join('');

    // Attach accordion toggle events
    container.querySelectorAll('.accordion-trigger').forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest('.accordion-item');
        toggleAccordion(item);
      });
    });

    // Attach resource click events
    container.querySelectorAll('.resource-card').forEach((card) => {
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        const lectureId = card.getAttribute('data-lecture-id');
        const resourceId = card.getAttribute('data-resource-id');
        const lecture = window.COURSE_DATA.courseLectures.find((l) => l.id === lectureId);
        const resource = lecture ? lecture.resources.find((r) => r.id === resourceId) : null;
        if (resource && resource.links && resource.links.length > 0) {
          openResourceModal(lectureId, resourceId);
        } else if (resource && resource.url && resource.url.trim() !== "") {
          openDestinationUrl(resource.url, `${lecture ? lecture.title : ''} — ${resource.name}`);
        } else {
          openResourceModal(lectureId, resourceId);
        }
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });
  }

  // Accordion Toggle Logic
  function toggleAccordion(item) {
    const isOpen = item.classList.contains('open');
    const trigger = item.querySelector('.accordion-trigger');

    if (isOpen) {
      item.classList.remove('open');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    } else {
      item.classList.add('open');
      if (trigger) trigger.setAttribute('aria-expanded', 'true');
    }
  }

  function expandAllAccordions() {
    document.querySelectorAll('.accordion-item').forEach((item) => {
      item.classList.add('open');
      const trigger = item.querySelector('.accordion-trigger');
      if (trigger) trigger.setAttribute('aria-expanded', 'true');
    });
    showToast('All lectures expanded');
  }

  function collapseAllAccordions() {
    document.querySelectorAll('.accordion-item').forEach((item) => {
      item.classList.remove('open');
      const trigger = item.querySelector('.accordion-trigger');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
    showToast('All lectures collapsed');
  }

  // Search Filter for Lectures
  function initSearchFilter() {
    const searchInput = document.getElementById('lecture-search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      const items = document.querySelectorAll('.accordion-item');

      items.forEach((item) => {
        const title = item.getAttribute('data-lecture-title') || '';
        if (!query || title.includes(query)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // ==========================================================================
  // 6. Modals & Visual Feedback
  // ==========================================================================
  const resourceModal = document.getElementById('resource-modal');
  const videoModal = document.getElementById('video-modal');

  function openResourceModal(lectureId, resourceId) {
    if (!resourceModal || !window.COURSE_DATA) return;

    const lecture = window.COURSE_DATA.courseLectures.find((l) => l.id === lectureId);
    if (!lecture) return;

    const resource = lecture.resources.find((r) => r.id === resourceId);
    if (!resource) return;

    const lecturePrefix = lecture.number ? `Lecture ${lecture.number} • ` : "";
    document.getElementById('modal-lecture-name').textContent = `${lecturePrefix}${lecture.title}`;
    document.getElementById('modal-resource-name').textContent = resource.name;

    const iconBox = document.getElementById('modal-icon-container');
    if (iconBox) {
      iconBox.innerHTML = ICONS[resource.type] || ICONS.notes;
    }

    const singleField = document.getElementById('modal-single-field');
    const multiField = document.getElementById('modal-multi-field');
    const multiList = document.getElementById('modal-multi-links-list');
    const noticeTitle = document.getElementById('modal-notice-title');
    const noticeDesc = document.getElementById('modal-notice-desc');

    if (resource.links && resource.links.length > 0) {
      const isTelegram = resource.links.some((l) => l.url && l.url.includes('t.me'));
      const isFlashcards = resource.type === 'flashcards';

      if (noticeTitle) {
        noticeTitle.textContent = `${resource.name} • Available Links (${resource.links.length} Parts/Decks)`;
      }
      if (noticeDesc) {
        if (isFlashcards) {
          noticeDesc.textContent = "Click 'Open' on any deck below to launch active recall flashcards in Google NotebookLM, or copy the link to share.";
        } else if (isTelegram) {
          noticeDesc.textContent = "Click 'Open' on any part below to open the handwritten transcription notes on Telegram, or copy the link to share.";
        } else {
          noticeDesc.textContent = "Click 'Open' on any link below to view the resource, or copy to share.";
        }
      }
      if (singleField) singleField.style.display = 'none';
      if (multiField) {
        multiField.style.display = 'flex';
        multiList.innerHTML = resource.links
          .map(
            (link) => `
          <div class="modal-link-item">
            <div class="modal-link-info">
              <span class="modal-link-title">${link.title}</span>
              <span class="modal-link-url">${link.url}</span>
            </div>
            <div class="modal-link-actions">
              <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="btn-link-open">
                <span>Open</span>
                ${ICONS.externalLink}
              </a>
              <button class="btn-link-copy" data-url="${link.url}" title="Copy Link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </div>
          </div>
        `
          )
          .join('');

        multiList.querySelectorAll('.btn-link-copy').forEach((btn) => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const urlToCopy = btn.getAttribute('data-url');
            if (urlToCopy) {
              navigator.clipboard
                .writeText(urlToCopy)
                .then(() => {
                  showToast(`${resource.name} link copied to clipboard!`);
                })
                .catch(() => {
                  showToast("Link: " + urlToCopy);
                });
            }
          });
        });
      }
    } else {
      if (noticeTitle) noticeTitle.textContent = "Editable Resource Placeholder";
      if (noticeDesc) noticeDesc.textContent = "This resource slot has not been configured yet. The course administrator can add its link in the admin dashboard.";
      if (singleField) singleField.style.display = 'flex';
      if (multiField) multiField.style.display = 'none';
      document.getElementById('modal-placeholder-input').value = resource.url || resource.placeholder || "[Editable Placeholder]";
    }

    resourceModal.classList.add('active');
  }

  function openVideoModal(partTitle, partId) {
    if (!videoModal) return;

    document.getElementById('video-modal-part-title').textContent = `${partTitle} – Biological Bases of Behaviour`;
    videoModal.classList.add('active');
  }

  function closeAllModals() {
    if (resourceModal) resourceModal.classList.remove('active');
    if (videoModal) videoModal.classList.remove('active');
  }

  function initModals() {
    // 1. Close when tapping the dark backdrop overlay (outside the modal box)
    document.querySelectorAll('.modal-overlay').forEach((overlay) => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          closeAllModals();
        }
      });
    });

    // 2. Close on tapping 'X' button or bottom Close buttons
    document.querySelectorAll('.modal-close-btn, .btn-close-modal').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeAllModals();
      });
    });

    // 3. Escape key to close
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeAllModals();
    });

    // Copy Placeholder Button
    const copyBtn = document.getElementById('btn-copy-placeholder');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const input = document.getElementById('modal-placeholder-input');
        if (input) {
          input.select();
          navigator.clipboard.writeText(input.value).then(() => {
            showToast('Placeholder copied to clipboard!');
          });
        }
      });
    }
  }

  // ==========================================================================
  // 7. Toast Notification System
  // ==========================================================================
  function showToast(message, duration = 3000) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span style="color: var(--accent-secondary); display: flex;">${ICONS.info}</span>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-out');
      setTimeout(() => {
        toast.remove();
      }, 250);
    }, duration);
  }

  // ==========================================================================
  // 8. Navigation & Header Scroll State
  // ==========================================================================
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 40) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // Mobile nav toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const headerNav = document.getElementById('header-nav');
    if (mobileBtn && headerNav) {
      mobileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = headerNav.classList.toggle('mobile-open');
        mobileBtn.classList.toggle('active', isOpen);
        mobileBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      headerNav.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', () => {
          headerNav.classList.remove('mobile-open');
          mobileBtn.classList.remove('active');
          mobileBtn.setAttribute('aria-expanded', 'false');
        });
      });

      document.addEventListener('click', (e) => {
        if (!headerNav.contains(e.target) && !mobileBtn.contains(e.target)) {
          headerNav.classList.remove('mobile-open');
          mobileBtn.classList.remove('active');
          mobileBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }

  // ==========================================================================
  // 9. Global Control Handlers
  // ==========================================================================
  function initGlobalControls() {
    // Expand All / Collapse All buttons
    const btnExpandAll = document.getElementById('btn-expand-all');
    const btnCollapseAll = document.getElementById('btn-collapse-all');
    if (btnExpandAll) btnExpandAll.addEventListener('click', expandAllAccordions);
    if (btnCollapseAll) btnCollapseAll.addEventListener('click', collapseAllAccordions);

    // Collapse category panel button
    const btnClearFilter = document.getElementById('btn-clear-filter');
    if (btnClearFilter) btnClearFilter.addEventListener('click', closeCategoryPanel);
  }

  function renderInstructorProfile(profile) {
    if (!profile) return;
    const setText = (id, value) => {
      const element = document.getElementById(id);
      if (element && value) element.textContent = value;
    };
    setText('hero-instructor-name', profile.name);
    setText('hero-role-badge', profile.roleBadge);
    setText('hero-instructor-bio-1', profile.bioParagraph1);
    setText('hero-instructor-bio-2', profile.bioParagraph2);

    const photo = document.getElementById('hero-photo-img');
    if (photo && profile.photoUrl) {
      photo.src = profile.photoUrl;
      photo.alt = profile.photoAlt || profile.name || '';
    }

    const tags = document.getElementById('hero-instructor-tags');
    if (tags && Array.isArray(profile.tags)) {
      tags.replaceChildren();
      profile.tags.forEach((tag, index) => {
        if (index) {
          const divider = document.createElement('span');
          divider.className = 'hero-tag-divider';
          divider.textContent = '•';
          tags.appendChild(divider);
        }
        const label = document.createElement('span');
        label.className = 'hero-tag';
        label.textContent = tag;
        tags.appendChild(label);
      });
    }
  }

  // ==========================================================================
  // 10. Initialization
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', async () => {
    try {
      if (window.PSYCHO404_DB) {
        window.COURSE_DATA = await window.PSYCHO404_DB.loadCourseData();
      }
    } catch (error) {
      console.error('Supabase content could not be loaded; using the bundled course content.', error);
    }
    renderInstructorProfile(window.COURSE_DATA?.instructor);
    initWavyBackground();
    renderNavigationCategories();
    renderFreeLectures();
    renderCourseLectures();
    initSearchFilter();
    initModals();
    initHeaderScroll();
    initGlobalControls();
  });
})();
