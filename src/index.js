// Register service worker
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/serviceWorker.js')
		.then((registration) => {
			console.log(registration);
		})
		.catch((err) => {
			console.log(error);
		});
}

fetch("https://pluralsight-pwa-scratch.firebaseio.com/flights.json")
	.then(response => response.json())
	.then(data => console.log(data));