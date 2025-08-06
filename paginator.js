(function() {

	// TODO ACCOUNT FOR CHANGING ELEMENTS ... 
	// use mutationobserver

	const updated = new Event('paginatorUpdated');

	const paginatorEl = document.getElementById('paginator');
	let currentPage = 0;
	let pageSize = parseInt(paginatorEl.getAttribute('pageSize'));

	const progressIndicator = document.createElement('p');

	if (!pageSize) {
		pageSize = 10;
	}

	changePage(0);

	paginatorEl.style = "display: flex";

	const leftChevron = document.createElement('button');
	leftChevron.type = "button";
	leftChevron.innerHTML = "Prev";
	leftChevron.style = "margin-right: 5px"
	leftChevron.addEventListener('click', () => {
		changePage(-1);
	});

	const rightChevron = document.createElement('button');
	rightChevron.type= "button";
	rightChevron.innerHTML = "Next";
	rightChevron.addEventListener('click', () => {
		changePage(1);
	});

	paginatorEl.append(leftChevron, rightChevron, progressIndicator);

	const mutationConfig = { attributes: true };

	const mutationObserver = new MutationObserver(() => {
		changePage(-currentPage);
	});

	function changePage(signedIncrement) {
		const newPage = currentPage + signedIncrement
		if (newPage < 0 || newPage * pageSize > paginatorEl.items.length - 1) {
			return;
		}

		currentPage = newPage;

		const startingIndex = currentPage * pageSize;
		const paginatedItems = paginatorEl.items.slice(startingIndex, startingIndex + pageSize);

		progressIndicator.innerText = `Page ${currentPage} of TBD`;

		updated.paginatedItems = paginatedItems;
		paginatorEl.dispatchEvent(updated);
	}
})();
