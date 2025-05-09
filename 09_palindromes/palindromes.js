const palindromes = function (str) {
	const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

	const cleanedWord = str
		.toLowerCase()
		.split("")
		.filter((char) => alphanumerical.includes(char))
		.join("");

	const reversedString = cleanedWord.split("").reverse().join("");

	return cleanedWord === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
