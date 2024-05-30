const flowControl = [
  {
    label: "taskName1",
    value: (...args) => {
      console.log("taskName1", args);
    },
  },
  {
    label: "taskName2",
    value: (...args) => {
      console.log("taskName1", args);
    },
  },
];
flowControl.forEach((task) => {
  task.value.call({}, { name: "yunis" }, { age: 18 });
});

flowControl.forEach((task) => {
  task.value.apply({}, [{ name: "yunis" }]);
});
