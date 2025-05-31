import { redirect } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    // Define public paths that don't require authentication
    const publicPaths = ['/about', '/consulting'];
    
    // Check if the current path is a public path
    const isPublicPath = publicPaths.some(path => 
        event.url.pathname === path || 
        event.url.pathname.startsWith(`${path}/`)
    );
    
    // If it's a public path, allow access without authentication
    if (isPublicPath) {
        return await resolve(event);
    }
    
    // For non-public paths, check for authentication token
    // Check cookies first, then Authorization header, then localStorage as fallback
    const token = event.cookies.get('token') || 
                 event.request.headers.get('authorization')?.split(' ')[1];
    
    // If no authentication token found, redirect to login
    if (!token && event.url.pathname !== '/auth') {
        // Include the current URL as a redirect parameter
        const returnUrl = encodeURIComponent(event.url.pathname + event.url.search);
        throw redirect(303, `/auth?redirect=${returnUrl}`);
    }
    
    // If authenticated or on auth page, proceed
    return await resolve(event);
}
