function eachFunction(elements, callBack) {
	for (let index = 0; index < elements.length; index++) {
		callBack(elements[index], index);
	}
}

function callBack(item, index) {
	console.log(`Element at index ${index} is ${item}`);
}

module.exports = { eachFunction, callBack };
