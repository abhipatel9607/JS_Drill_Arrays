function find(elements, callBack, findElement) {
	for (let index = 0; index < elements.length; index++) {
		if (callBack(elements[index], findElement)) {
			return elements[index];
		}
	}
	return undefined;
}

// Callback Function
function callBack(item, findElement) {
	return item == findElement;
}

module.exports = { find, callBack };
