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

// Fetch flights and render
fetch("https://pluralsight-pwa-scratch.firebaseio.com/flights.json")
	.then(response => response.json())
	.then(data => {
		let html = '';
		data.forEach(flight => {
			html += `<div class="card">${flight.city}</div>`;
		});
		document.querySelector('#screen-flights').innerHTML = html;
	});

// Listen for the before install to homescreen 
let deferredPrompt;
const button = document.querySelector('#a2hs');
window.addEventListener('beforeinstallprompt', event => {
	event.preventDefault();
	deferredPrompt = event;
	button.style.display = 'block';
});

button.addEventListener('click', () => {
	button.style.display = 'none';
	deferredPrompt.prompt();
	deferredPrompt.userChoice().then(result => {
		console.log(result.outcome);
		// TODO: Send to analytics
		deferredPrompt = null;
	})
});