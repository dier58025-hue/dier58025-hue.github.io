(function () {
  const site = window.SITE || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  function setText(selector, value) {
    $$(selector).forEach((node) => {
      node.textContent = value || "";
    });
  }

  function setSiteFields() {
    $$('[data-site]').forEach((node) => {
      const key = node.getAttribute('data-site');
      if (site[key]) node.textContent = site[key];
    });

    $$('[data-site-link]').forEach((node) => {
      const key = node.getAttribute('data-site-link');
      if (site[key]) node.setAttribute('href', site[key]);
    });

    document.title = `${site.nameZh || '个人作品集'} | ${site.nameEn || 'Portfolio'}`;
    const emailLink = $('#emailLink');
    if (emailLink && site.email) {
      emailLink.textContent = site.email;
      emailLink.href = `mailto:${site.email}`;
    }
    const year = $('#year');
    if (year) year.textContent = new Date().getFullYear();
  }

  function renderWorks() {
    const grid = $('#worksGrid');
    if (!grid || !Array.isArray(site.works)) return;
    grid.innerHTML = site.works.map((work) => `
      <article class="work-card">
        <img src="${escapeAttr(work.image)}" alt="${escapeAttr(work.titleZh)} / ${escapeAttr(work.titleEn)}" loading="lazy" />
        <div class="work-content">
          <p class="work-meta">${escapeHtml(work.year)} · <span class="zh">${escapeHtml(work.mediumZh)}</span><span class="en">${escapeHtml(work.mediumEn)}</span></p>
          <h3><span class="zh">${escapeHtml(work.titleZh)}</span><span class="en">${escapeHtml(work.titleEn)}</span></h3>
          <p class="zh">${escapeHtml(work.descriptionZh)}</p>
          <p class="en">${escapeHtml(work.descriptionEn)}</p>
        </div>
      </article>
    `).join('');
  }

  function renderKeywords() {
    const tags = $('#keywordTags');
    if (!tags || !Array.isArray(site.keywords)) return;
    tags.innerHTML = site.keywords.map((keyword) => `<span>${escapeHtml(keyword)}</span>`).join('');
  }

  function renderCV() {
    const cv = $('#cvList');
    if (!cv || !Array.isArray(site.cvSections)) return;
    cv.innerHTML = site.cvSections.map((section) => `
      <article class="cv-section">
        <h3><span class="zh">${escapeHtml(section.titleZh)}</span><span class="en">${escapeHtml(section.titleEn)}</span></h3>
        <ul>
          ${(section.items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
        </ul>
      </article>
    `).join('');
  }

  function renderSocials() {
    const socials = $('#socialLinks');
    if (!socials || !Array.isArray(site.socials)) return;
    socials.innerHTML = site.socials.map((social) => `
      <a href="${escapeAttr(social.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(social.label)}</a>
    `).join('');
  }

  function initNavigation() {
    const toggle = $('.nav-toggle');
    const links = $('#navLinks');
    if (!toggle || !links) return;
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    $$('.nav-links a').forEach((link) => {
      link.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function initLanguageToggle() {
    const button = $('[data-lang-toggle]');
    const saved = localStorage.getItem('portfolio-lang');
    if (saved === 'en') document.body.classList.add('lang-en');
    if (!button) return;
    button.addEventListener('click', () => {
      document.body.classList.toggle('lang-en');
      localStorage.setItem('portfolio-lang', document.body.classList.contains('lang-en') ? 'en' : 'zh');
    });
  }

  function escapeHtml(value) {
    return String(value || '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function escapeAttr(value) {
    return escapeHtml(value).replaceAll('`', '&#096;');
  }

  setSiteFields();
  renderWorks();
  renderKeywords();
  renderCV();
  renderSocials();
  initNavigation();
  initLanguageToggle();
})();
