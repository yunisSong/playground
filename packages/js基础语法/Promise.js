const test1 = async () => {
  function p1() {
    return new Promise((resolve, reject) => {
      console.log("请求中。。。。");
      setTimeout(() => {
        resolve({ username: "John", age: 30 });
      }, 1000);
    });
  }

  console.log("请求数据");
  const userInfo = await p1();
  console.log("请求数据完毕", userInfo);
};

const test2 = async () => {
  // 异步函数，模拟获取用户信息的过程
  function getUserInfo() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ username: "John1", age: 30 });
      }, 1000);
    });
  }

  // 异步函数，模拟获取用户详细信息的过程
  function getUserDetails(username) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "John") {
          resolve({ username: "John", age: 30, country: "USA" });
        } else {
          reject(new Error("User not found"));
        }
      }, 1000);
    });
  }
  // 使用 async/await 处理异步操作的函数
  async function getUserData() {
    try {
      // 使用 await 等待异步函数执行完成，并获取返回值
      const userInfo = await getUserInfo();
      console.log("User Info:", userInfo);

      // 使用 await 等待异步函数执行完成，并获取返回值
      const userDetails = await getUserDetails(userInfo.username);
      console.log("User Details:", userDetails);

      // 可以在这里继续进行其他操作...
    } catch (error) {
      console.error("Error:", error);
    }
  }

  console.log("请求数据");
  // 调用异步函数
  getUserData();
  console.log("请求数据完毕");
};

test2();
