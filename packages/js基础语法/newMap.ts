const taskList = new Map<string, Function>([
  [
    "task1",
    () => {
      console.log("task1");
    },
  ],
]);
console.log("taskList: ", taskList);

// iterable
// var Map: MapConstructor
// new <any, any>(iterable?: Iterable<readonly [any, any]> | null | undefined) => Map<any, any> (+3 overloads)

type TaskListType = {
  [key: string]: Function;
};
const taskList1: TaskListType = {
  yunis: () => {
    console.log("task1");
  },
};
taskList1.yunis();

// 定义 taskList1 的类型
