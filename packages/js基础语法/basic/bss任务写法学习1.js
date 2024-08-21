const flowControl = {
  task: {
    task1: (...args) => {
      console.log("执行任务 args: ", args);
    },
    default: (...args) => {
      console.log("默认任务 args: ", args);
    },
  },
  useTak: (key, ...args) => {
    if (flowControl.task[key]) {
      flowControl.task[key](...args);
    } else {
      flowControl.task["default"](...args);
    }
  },
  addTask: (key, fn) => {
    flowControl.task[key] = fn;
  },
};

flowControl.useTak("task2", { name: 13 }, { age: 14 });
