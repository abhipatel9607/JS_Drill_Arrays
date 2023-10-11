function filter(elements, filterOddNumbers) {
	let filterdElementCount = 0;
	let filterdArray = [];

	for (let index = 0; index < elements.length; index++) {
		if (filterOddNumbers(elements[index])) {
			filterdArray[filterdElementCount] = elements[index];
			filterdElementCount++;
		}
	}

	return filterdArray;
}

// Callback Function
function filterOddNumbers(item) {
	return item % 2 == 0 ? true : false;
}

module.exports = { filter, filterOddNumbers };
