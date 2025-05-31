// Define public routes that don't require authentication
const PUBLIC_ROUTES = [
  '/',        // Sandbox
  '/about',   // About
  '/consulting', // Consulting
  '/services', // Services
  // Static assets
  '/static',
  '/favicon.ico',
  '/manifest.json',
];

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  // Get the requested path
  const path = event.url.pathname;
  
  // Check if the path is a public route or starts with a public route path
  const isPublicRoute = PUBLIC_ROUTES.some(route => 
    path === route || path.startsWith(`${route}/`) || 
    // Also allow static assets
    (route.startsWith('/static') && path.startsWith('/static'))
  );
  
  // If it's a public route, proceed without authentication
  if (isPublicRoute) {
    return await resolve(event);
  }
  
  // For protected routes, check for a valid token
  const token = event.cookies.get('token') || event.request.headers.get('authorization')?.split(' ')[1];
  
  if (!token) {
    // If no token, redirect to auth page
    return new Response(null, {
      status: 302,
      headers: { Location: '/auth' }
    });
  }
  
  // Continue with normal request handling for authenticated routes
  return await resolve(event);
}
