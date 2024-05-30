// 定义源对象
const source1 = { a: 1, b: 2 };
const source2 = { b: 3, c: 4 };

// 定义目标对象
const target = { c: 5, d: 6 };

// 将源对象的属性复制到目标对象
const result1 = Object.assign(target, source1);
console.log("target: ", target); // { c: 5, d: 6, a: 1, b: 2 }

const result2 = Object.assign(target, source1, source2);
console.log("target: ", target); //{ c: 4, d: 6, a: 1, b: 3 }
console.log(result1); // 输出: { c: 4, d: 6, a: 1, b: 3 }
