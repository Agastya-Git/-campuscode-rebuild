const revealSelector = [
  '.campus-landing section',
  '.campus-landing article',
  '.student-panel .student-main section',
  '.student-panel .student-main article',
  '.student-panel .student-main > :not(.student-topbar)',
  '.student-panel .student-main .student-feature-card',
  '.student-panel .student-main .student-panel-card',
  '.student-panel .student-main .student-stat-card',
  '.student-panel .student-main .student-guide-card',
  '.student-panel .student-main .student-support-card',
].join(',');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let observer;
let firstPass = true;

function observeNewSections() {
  const targets = document.querySelectorAll(`${revealSelector}:not(.scroll-reveal-item)`);

  targets.forEach((element) => {
    element.classList.add('scroll-reveal-item');

    const siblings = Array.from(element.parentElement?.children || [])
      .filter((sibling) => sibling.matches(revealSelector));
    const siblingIndex = Math.max(0, siblings.indexOf(element));
    element.style.setProperty('--reveal-delay', `${Math.min(siblingIndex * 70, 280)}ms`);

    if (reduceMotion.matches || !observer) {
      element.classList.add('is-visible');
      return;
    }

    const bounds = element.getBoundingClientRect();
    if (firstPass && bounds.top < window.innerHeight * 0.9 && bounds.bottom > 0) {
      element.classList.add('is-visible');
    } else {
      observer.observe(element);
    }
  });

  firstPass = false;
}

if ('IntersectionObserver' in window && !reduceMotion.matches) {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });
}

observeNewSections();
new MutationObserver(observeNewSections).observe(document.body, { childList: true, subtree: true });

reduceMotion.addEventListener?.('change', () => {
  if (reduceMotion.matches) {
    observer?.disconnect();
    document.querySelectorAll('.scroll-reveal-item').forEach((element) => element.classList.add('is-visible'));
  }
});
