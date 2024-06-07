function foo() {
  console.log(this.name);
}

foo(); // node 环境输出： undefined

const obj = {
  name: " obj name ",
  bar: foo,
};

obj.bar(); //  obj name

const obj1 = { name: "Alice" };
const obj2 = { name: "Bob" };

function greet() {
  console.log(`Hello, ${this.name}!`);
}

greet.call(obj1); // 输出 'Hello, Alice!'，this 指向 obj1 对象
greet.call(obj2); // 输出 'Hello, Bob!'，this 指向 obj2 对象
