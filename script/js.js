var wrapElem = document.querySelector('#calculator');
var calculatorElem = {
	sign: wrapElem.querySelector('.sign'),
	formerInput: wrapElem.querySelector('.formerInput'),
	laterInput: wrapElem.querySelector('.laterInput'),
	resultOutput: wrapElem.querySelector('.resultOutput'),
	btns: wrapElem.querySelectorAll('.btn')
};
var operation = {
	add: function(num1, num2) {
		return +num1 + +num2;
	},
	subtract: function(num1, num2) {
		return num1 - num2;
	},
	multiply: function(num1, num2) {
		return num1 * num2;
	},
	divide: function(num1, num2) {
		return num1 / num2;
	}
};
each(calculatorElem.btns, function (index, elem) {
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
	outputResult(operation.add(+calculatorElem.formerInput.value, +calculatorElem.laterInput.value)); // +为一元运算符，取正，没有明显的含义，但可强制转换为数字
}
function subtractHandler() {
	updateSign('-');
	outputResult(operation.subtract(calculatorElem.formerInput.value, calculatorElem.laterInput.value)); // 若两字符串相减，则自动转化为数字相减
}
function multiplyHandler() {
	updateSign('*');
	outputResult(operation.multiply(calculatorElem.formerInput.value, calculatorElem.laterInput.value));
}
function divideHandler() {
	updateSign('/');
	outputResult(operation.divide(calculatorElem.formerInput.value, calculatorElem.laterInput.value));
}
function updateSign(symbol) {
	calculatorElem.sign.innerHTML = symbol;
}
function outputResult(fn) {
	calculatorElem.resultOutput.innerHTML = fn;
}