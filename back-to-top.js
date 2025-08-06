// Activated by JavaScript. User will not place this in the template. User will just determine which pages they want this to display on. 
// This gets around the containing block, which may happen if the user's program is component based

(function() {
	const yScrollThreshold = 25;

	window.addEventListener('scroll', (event) => {

		// If scrollY is higher than activation threshold, create the new
		// element and append it to the <body> tag
		console.log("window.scrollY", this.scrollY);

		if (scrollY >= yScrollThreshold) {
			if (!window.backToTopEl)  {
				const parent = document.getElementsByTagName('body').item(0);

				const backToTopEl = document.createElement('a');
				backToTopEl.className = 'back-to-top';

				const arrowEl = document.createElement('div');
				// arrowEl.href = '#'; 
				arrowEl.className = 'arrow'; // Todo not customizable

				backToTopEl.appendChild(arrowEl);

				backToTopEl.addEventListener('click', () => {
					window.scroll(0, 0);
				});

				parent.appendChild(backToTopEl);
				window.backToTopEl = backToTopEl;
			}
		} else {
			window.backToTopEl?.remove();
			window.backToTopEl = undefined;
		}
	});
})();