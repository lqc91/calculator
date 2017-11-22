var calculator = document.querySelector('#calculator');
var sign = calculator.querySelector('.sign');
var formerInput = calculator.querySelector('.formerInput');
var laterInput = calculator.querySelector('.laterInput');
var resultOutput = calculator.querySelector('.resultOutput');
var btn = calculator.querySelectorAll('.btn');
btn[0].onclick = addHandler;
btn[1].onclick = subtractHandler;
btn[2].onclick = multiplyHandler;
btn[3].onclick = divideHandler;
function addHandler() {
	sign.innerHTML = '+';
	resultOutput.innerHTML = +formerInput.value + +laterInput.value; // +为一元运算符，取正，没有明显的含义，但可强制转换为数字
}
function subtractHandler() {
	sign.innerHTML = '-';
	resultOutput.innerHTML = formerInput.value - laterInput.value; // 若两字符串相减，则自动转化为数字相减
}
function multiplyHandler() {
	sign.innerHTML = '*';
	resultOutput.innerHTML = formerInput.value * laterInput.value;
}
function divideHandler() {
	sign.innerHTML = '/';
	resultOutput.innerHTML = formerInput.value / laterInput.value;
}