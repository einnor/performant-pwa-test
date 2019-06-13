// Listen for the install event
self.addEventListener('self', event => {
	// waitUntil prevents the browser from killing the service while its performing a task
	event.waitUntil(
		caches.open('app-shell')
			.then(cache => {
				cache.add('/');
			})
	);
})