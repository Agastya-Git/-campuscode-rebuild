/*
 * Keep the Round 2 frontend usable when the live API has no valid demo session.
 * Existing hand-authored mock routes in original_runtime.js run first. Requests
 * they do not cover receive an explicit empty demo response instead of an auth
 * error or a network failure. Add ?api=live to try the hosted backend.
 */
const backendOrigin = 'https://campuscode-backend-bszo.onrender.com';
const nativeFetch = window.fetch.bind(window);
const liveApiEnabled = new URLSearchParams(window.location.search).get('api') === 'live';

window.fetch = async (input, init) => {
  const requestUrl = input instanceof Request ? input.url : String(input);
  if (liveApiEnabled || !requestUrl.startsWith(backendOrigin)) {
    return nativeFetch(input, init);
  }

  const url = new URL(requestUrl);
  const path = url.pathname.replace(/^\/api(?=\/)/, '');
  const responseBody = {
    success: true,
    demo: true,
    message: 'No live data is configured for this Round 2 demo section.',
    data: [],
    results: [],
    items: [],
    notifications: [],
    certificates: [],
    events: [],
    hackathons: [],
    teams: [],
  };

  // Public verification pages should explain that demo credentials are local.
  if (path.includes('/certificates/verify/') || path.includes('/digital-id/public/')) {
    responseBody.success = false;
    responseBody.verified = false;
    responseBody.valid = false;
    responseBody.message = 'Public verification requires a live CampusCode record.';
  }

  return new Response(JSON.stringify(responseBody), {
    status: 200,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
