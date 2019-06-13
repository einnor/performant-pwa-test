// Listen for the install event
self.addEventListener('install', event => {
	// waitUntil prevents the browser from killing the service while its performing a task
	event.waitUntil(
		caches.open('app-shell')
			.then(cache => {
				cache.add('/');
			})
	);
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request)
			.then(response => {
				return response || fetch(event.request);
			})
	);
});