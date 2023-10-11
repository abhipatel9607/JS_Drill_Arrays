function map(elements, getSquare) {
	let squareElements = new Array(elements.length).fill(0);

	for (let index = 0; index < elements.length; index++) {
		squareElements[index] = getSquare(elements[index]);
	}

	return squareElements;
}

// Callback Function
function getSquare(item) {
	return item * item;
}

module.exports = { map, getSquare };
