// Register service worker
console.log(123);
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/serviceWorker.js')
		.then((registration) => {
			console.log(registration);
		})
		.catch((err) => {
			console.log(error);
		});
}