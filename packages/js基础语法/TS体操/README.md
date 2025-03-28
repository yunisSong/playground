[!./index.png]

#### 对象

```js
// 定义一个 Dictionary ，key 是 string 类型，value 是 number 类型
type RouterInfo = {
  name: string;
  age: number;
};
type HandleInfo = {
  [key: string]: RouterInfo;
};

const data: HandleInfo = {
  a: {
    name: "a",
    age: 1,
  },
  b: {
    name: "b",
    age: 2,
  },
};
console.log(data);

type HandelType = "primary" | "secondary";
// 定义一个 Dictionary ，key 是 HandelType 中的值 ，value 是 RouterInfo 类型
type HandleInfo1 = {
  [key in HandelType]: RouterInfo;
};

```

#### 函数

```js
let add: (a: number, b: number) => number = (a, b) => a + b;

type handleFunc = (a: number, b: number) => number;
let add1: handleFunc = (a, b) => a + b;
```

#### 数组

```js
type Router = {
  name: string,
  age: number,
};

function getRouterInfo(router: Array<Router>) {
  router.forEach((item) => {
    console.log(item.name);
  });
}

function getRouterInfo1(router: Router[]) {
  router.forEach((item) => {
    console.log(item.name);
  });
}
function getRouterInfo2(router: Array<Router | string>) {
  router.forEach((item) => {
    console.log(item);
  });
}
function getRouterInfo3(router: (Router | string)[]) {
  router.forEach((item) => {
    console.log(item);
  });
}
```

#### 联合类型

`let value: string | number = "Hello";`

#### 交叉类型

```js
type A = { name: string };
type B = { age: number };
type C = A & B;
```

#### 枚举类型

```js
enum Direction {
  LEFT = "left",
  RIGHT = "right"
}
```

#### 类型转换

```js
let someValue: any = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;

```

#### this

```js
class Counter {
  count = 0;
  increment(): this {
    this.count++;
    return this;
  }
}

let counter = new Counter();
counter.increment().increment(); // 可以链式调用
```

#### Pick

使用已经存在的定义中的一部分

```js
interface User {
  name: string;
  age: number;
  no: number;
}

type BasicType = Pick<User, "name" | "age">;

const user: BasicType = {
  name: "jack",
  age: 18,
};
```
