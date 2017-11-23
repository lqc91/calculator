(function() {
	var wrapElem = document.querySelector('#calculator');
	var calculatorElem = {
		sign: wrapElem.querySelector('.sign'),
		formerInput: wrapElem.querySelector('.formerInput'),
		laterInput: wrapElem.querySelector('.laterInput'),
		resultOutput: wrapElem.querySelector('.resultOutput'),
		btns: wrapElem.querySelectorAll('.btn')
	};
	var operate = (function() {
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
				if (!operation[name]) {
					operation[name] = fn;
				}
				return operation; // 链式调用
			}
		};
		function operate(name, num1, num2) {
			if(!operation[name]) throw Error('不存在名为' + name + '的方法');
			return operation[name].apply(operation, [].slice.call(arguments, 1, arguments.length));
		}
		operate.addOperation = operation.addOperation;
		return operate;
	})();
	operate.addOperation('mod', function(num1, num2) {
		return num1 % num2;
	}).addOperation('power', function(base, power) {
		return Math.pow(base, power);
	}).addOperation('invert', function(num) {
		return 1/num;
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
})();