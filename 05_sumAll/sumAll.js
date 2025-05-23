const sumAll = function (min, max) {
	let sum = 0;
	if (min > max) {
		[min, max] = [max, min];
	}
	if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
	if (min < 0 || max < 0) return "ERROR";
	for (let i = min; i <= max; i++) {
		sum += i;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
