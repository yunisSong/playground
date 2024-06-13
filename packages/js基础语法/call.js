const test1 = () => {
  var person = {
    fullName: function () {
      console.log("fullName", this.firstName + " " + this.lastName);
    },
  };
  var person1 = {
    firstName: "Bill",
    lastName: "Gates",
  };
  var person2 = {
    firstName: "Steve",
    lastName: "Jobs",
  };
  /*
  person.fullName.call(person1);
  的意思是调用 person.fullName 的方法，person1将作为这个方法的实例（this）
  */
  person.fullName.call(person1); // 将返回 "Bill Gates"
  person.fullName.call(person2); // 将返回 "Steve Jobs"
};
const test2 = () => {
  var person = {
    fullName: function (city, country) {
      console.log(
        "fullName",
        this.firstName + " " + this.lastName + "," + city + "," + country
      );
    },
  };
  var person1 = {
    firstName: "Bill",
    lastName: "Gates",
  };
  /*
  person.fullName.call(person1, "Seattle", "USA");

  的意思是调用 person.fullName 的方法，person1将作为这个方法的实例（this）

  "Seattle", "USA" 将作为参数
  */
  person.fullName.call(person1, "Seattle", "USA"); // log:fullName Bill Gates,Seattle,USA
};

const test3 = () => {
  var person = {
    fullName: function (city, country) {
      console.log(
        "fullName",
        this.firstName + " " + this.lastName + "," + city + "," + country
      );
    },
  };
  var person1 = {
    firstName: "Bill",
    lastName: "Gates",
  };
  // apply 和 call 方法类似，不同在于 方法如果有参数，call 需要一个个列出来，apply 是以数组的方式传递的
  person.fullName.apply(person1, ["Oslo", "Norway"]); //log fullName Bill Gates,Oslo,Norway
};
test3();
