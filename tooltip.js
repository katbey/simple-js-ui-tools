// Get all elements with an attribute of "tooltip"
// For each element, add an event listener? The function call is repeatable, create a function to handle it

(function() {

	const affectedElements = document.querySelectorAll('[tooltip]');

	affectedElements.forEach((element) => {
		element.addEventListener('mouseenter', (event) => {
			onMouseEnter(element);
		});

		element.addEventListener('mouseout', (event) => {
			onMouseOut(element);
		});

	});

	function onMouseEnter(element) {

		const placement = element.getAttribute('placement');
		const content = element.getAttribute('tooltip');

		const parent = document.getElementsByTagName('body').item(0);

		const tooltipElement = document.createElement('div');
		tooltipElement.id = 'openTooltip'
		tooltipElement.className = `tooltip ${placement}`;

		const tooltipArrow = document.createElement('div');
		tooltipArrow.className = 'tooltip-arrow';

		const tooltipInner = document.createElement('div');
		tooltipInner.className = 'tooltip-inner';
		tooltipInner.innerHTML = content;

		tooltipElement.append(tooltipArrow, tooltipInner);

		parent.appendChild(tooltipElement);
		positionTooltip(element);
	}

	function onMouseOut(element) {
		const elementToRemove = document.getElementById('openTooltip');
		const parent = elementToRemove.parentElement;

		parent.removeChild(elementToRemove);
	}

	function positionTooltip(element) {
	    var tooltipEl = document.getElementById("openTooltip");
	    
	    /* This depends on the posiiton of the tooltip ... */
	    const direction = 'bottom';

	    var coordinatesRectangle = element.getBoundingClientRect();

	    var elemToEvaluate = element;

	    var leftOffset = 0;
	    var topOffset = 0;

	    if (direction === 'right' || direction === 'left') {
	        tooltipEl.style.top = (coordinatesRectangle.top + (element.offsetHeight / 2)).toString() + "px";

	        if (direction === 'right') {
	            tooltipEl.style.left = (coordinatesRectangle.right - leftOffset).toString()+ "px";
	        } else {
	            tooltipEl.style.left = ((coordinatesRectangle.left - 65) - leftOffset).toString() + "px";
	        }
	    }

	    if (direction === 'top' || direction === 'bottom') {
	        tooltipEl.style.left = (coordinatesRectangle.left + (element.offsetWidth / 2) - (tooltipEl.offsetWidth / 2) - leftOffset).toString() + "px";

	        if (direction === 'top') {
	            tooltipEl.style.top = ((coordinatesRectangle.top - 35) - topOffset).toString() + "px";
	        } else {
	            tooltipEl.style.top = (coordinatesRectangle.bottom - topOffset).toString() + "px";
	        }
	    }
	}
})();