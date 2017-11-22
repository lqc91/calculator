var calculator = document.querySelector('#calculator');
var sign = calculator.querySelector('.sign');
var formerInput = calculator.querySelector('.formerInput');
var laterInput = calculator.querySelector('.laterInput');
var resultOutput = calculator.querySelector('.resultOutput');
var btn = calculator.querySelectorAll('.btn');
each(btn, function (index, elem) {
	elem.onclick = function() {
		switch (this.title) {
			case 'add':
				addHandler();
				break;
			case 'subtract':
				subtractHandler();
				break;
			case 'multiply':
				multiplyHandler();
				break;
			case 'divide':
				divideHandler();
				break;
		}
	};
});
function each(array, fn) {
	for (var i = 0; i < array.length; i++) {
		fn(i, array[i]);
	}
}
function addHandler() {
	updateSign('+');
	outputResult(add(+formerInput.value, +laterInput.value)); // +为一元运算符，取正，没有明显的含义，但可强制转换为数字
}
function subtractHandler() {
	updateSign('-');
	outputResult(subtract(formerInput.value, laterInput.value)); // 若两字符串相减，则自动转化为数字相减
}
function multiplyHandler() {
	updateSign('*');
	outputResult(multiply(formerInput.value, laterInput.value));
}
function divideHandler() {
	updateSign('/');
	outputResult(divide(formerInput.value, laterInput.value));
}
function updateSign(symbol) {
	sign.innerHTML = symbol;
}
function add(num1, num2) {
	return +num1 + +num2;
}
function subtract(num1, num2) {
	return num1 - num2;
}
function multiply(num1, num2) {
	return num1 * num2;
}
function divide(num1, num2) {
	return num1 / num2;
}
function outputResult(fn) {
	resultOutput.innerHTML = fn;
}