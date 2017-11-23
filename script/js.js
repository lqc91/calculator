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
	},
	addOperation: function(name, fn) {
		if (!this[name]) {
			this[name] = fn;
		}
		return this; // 链式调用
	}
};
operation.addOperation('mod', function(num1, num2) {
	return num1 % num2;
}).addOperation('power', function(base, power) {
	return Math.pow(base, power);
});
each(calculatorElem.btns, function (index, elem) {
	elem.onclick = function() {
		updateSign(this.value);
		outputResult(operate(this.title, calculatorElem.formerInput.value, calculatorElem.laterInput.value));
	};
});
function each(array, fn) {
	for (var i = 0; i < array.length; i++) {
		fn(i, array[i]);
	}
}
function updateSign(symbol) {
	calculatorElem.sign.innerHTML = symbol;
}
function outputResult(fn) {
	calculatorElem.resultOutput.innerHTML = fn;
}
function operate(name, num1, num2) {
	if(!operation[name]) throw Error('不存在名为' + name + '的方法');
	return operation[name](num1, num2);
}