function reduce(elements, add, startingValue) {
	// Set starting value if startingValue is undefined
	if (startingValue == undefined) {
		startingValue = elements[0];
	}

	for (let index = 0; index < elements.length; index++) {
		startingValue = add(elements[index], startingValue);
	}
	return startingValue;
}

// Callback Function
function add(startingValue, item) {
	startingValue = startingValue + item;
	return startingValue;
}

module.exports = { reduce, add };
