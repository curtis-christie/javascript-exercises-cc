const convertToCelsius = function (degree) {
	const celsius = (degree - 32) * (5 / 9);
	return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function (degree) {
	const fahrenheit = degree * (9 / 5) + 32;
	return Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
