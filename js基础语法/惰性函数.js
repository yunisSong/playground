/*
应用频繁，如果只用一次，是体现不出它的优点出来的，用的次数越多，越能体现这种模式的优势所在；

分支判断，调用的所有结果都会走同样的分支。

适用浏览器的兼容性。

*/

let switchTag = 10;
function switchFun() {
  console.log("这里模拟判断浏览器版本，只会在第一次调用时间 调用", switchFun);
  if (switchTag > 100) {
    // 相当于重新给 testFun 赋值，重写函数，下次如果调用 testFun 直接调用赋值
    // 函数指针， 指向了另一个新函数.
    switchFun = () => {
      console.log("这是 tag > 100 的分支调用");
    };
  } else {
    switchFun = () => {
      console.log("这是 tag <= 100 的分支调用");
    };
  }
  switchFun();
}

switchFun();
switchFun();
console.log("+++++++++++++++++++++++++++++++++++++++++");

// 下面的写法更好理解
function switchFun1() {
  if (switchTag > 100) {
    return () => {
      console.log("这是 tag > 100 的分支调用");
    };
  } else {
    return () => {
      console.log("这是 tag <= 100 的分支调用");
    };
  }
}

const testFun = switchFun1();
testFun();
testFun();
