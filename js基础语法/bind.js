// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);
// $("#id");

function changeAge() {
  console.log(this.name, this.age);

  this.age += 1;
  console.log(this.name, "长大了一岁 ", this.age);
}

const lilei = {
  name: "lilei",
  age: 18,
};

const hanmeimei = {
  name: "hanmeimei",
  age: 16,
};

const lileiChangeAge = changeAge.bind(lilei);
lileiChangeAge();
const hanmeimeiChangeAge = changeAge.bind(hanmeimei);
hanmeimeiChangeAge();
