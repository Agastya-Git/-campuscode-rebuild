const syncOverviewMode = () => {
  document.documentElement.classList.toggle(
    'classic-overview',
    new URLSearchParams(window.location.search).get('overview') === 'classic',
  );
};

syncOverviewMode();
window.addEventListener('popstate', syncOverviewMode);
