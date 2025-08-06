(function() {
	const head = document.getElementsByTagName('head').item(0);
	const stylesheetEl = document.createElement('link');
	stylesheetEl.setAttribute('href', './styles.css');
	stylesheetEl.setAttribute('rel', 'stylesheet');

	head.appendChild(stylesheetEl);
})();
