console.log("引入 js");

function testVar() {
  // 去掉之前的 var 操作符之后，message 就变成了全局变量。只要调用一次函数 test()，就会定义 这个变量，并且可以在函数外部访问到。
  message = "hello";
  console.log("message: ", message);
}
testVar();
console.log("外部查看 message: ", message);
console.log("外部查看 window message: ", window.message);

//提升”(hoist)，也就是把所有变量声明都拉到函数作用域的顶部。
function foo() {
  console.log("提升”(hoist) ", age);
  var age = 26;
}
foo();

// let 声明的范围是块作用域， 而 var 声明的范围是函数作用域。

{
  let a = 1;
  var b = 2;
}
console.log("var 声明的范围是函数作用域 ", b);
console.log("let 声明的范围是块作用域", a);
