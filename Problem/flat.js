function flatten(elements) {
	let flatArray = [];

	function recursiveFlatten(innerArr) {
		for (let index = 0; index < innerArr.length; index++) {
			if (Array.isArray(innerArr[index])) {
				recursiveFlatten(innerArr[index]);
			} else {
				flatArray[flatArray.length] = innerArr[index];
			}
		}
	}

	recursiveFlatten(elements);

	return flatArray;
}

module.exports = flatten;
