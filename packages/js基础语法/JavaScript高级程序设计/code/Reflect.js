// 00 调用函数
// Reflect.apply(func, thisArg, args)
// Reflect.apply() 方法等同于 Function.prototype.apply.call(func, thisArg, args)，用于绑定this对象后执行给定函数。
// func: 要调用的函数
// thisArg: 可选的。调用函数时使用的this值
// args: 可选的。一个数组或者类数组对象，其中的数组元素将作为单独的参数传给func函数
// 返回值: 调用函数的返回值
function sum(a, b) {
  return a + b;
}

// 01 construct 方法 用于new一个对象
// Reflect.construct(target, args)
// Reflect.construct() 方法等同于 new target(...args)，用于构造函数，相当于执行 new target(...args)。
// target: 要实例化的构造函数
// args: 一个类数组对象，其中的数组元素将作为构造函数的参数
// 返回值: 一个新的实例对象
function Person(name) {
  this.name = name;
}
const person = Reflect.construct(Person, ["Alice"]);
console.log(person instanceof Person); // 输出：true

const result = Reflect.apply(sum, null, [1, 2]);
console.log(result); // 输出：3

const obj = {
  test: (x, y, z) => {
    if (z) {
      return x + y + z;
    }
    return x + y;
  },
};

const handler = {
  apply: function (target, thisArg, argumentsList) {
    console.log("方法被调用了");
    // 你可以在这里修改参数或者返回值
    return Reflect.apply(target, thisArg, [...argumentsList, 10]); // 例如，在参数列表末尾添加10
  },
};

const proxiedObj = new Proxy(obj.test, handler);
console.log("proxiedObj: ", proxiedObj(5, 10)); // 输出: 方法被调用了 25
console.log("obj.test(5, 10): ", obj.test(5, 10));
