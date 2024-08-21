// 当前工作目录文件夹
console.log(__dirname);
// 当前文件名称
console.log(__filename);

// 创建全局变量
global.myVariable = "Hello World";
// 可以在任意位置访问 myVariable
console.log(myVariable);

const sayHello = require("./hello.js");
sayHello(myVariable);

/* ===========================  OS   ==================================== */
const os = require("os");
console.group("os: ");
//
console.log("os platform: ", os.platform());
const userInfo = os.userInfo();
console.log("os userInfo: ", userInfo);
console.log("os type: ", os.type());

/* ===========================  path   ==================================== */

const path = require("path");
console.log("path: ", path);

const myPath =
  "/Users/tan/Documents/Yunis/Git/playground/packages/demo/nodeDemo/app.js";

const pathInfo = {
  fileName: path.basename(myPath),
  folderName: path.dirname(myPath),
  fileExtension: path.extname(myPath),
  absoluteOrNot: path.isAbsolute(myPath),
  detailInfo: path.parse(myPath),
};

// Let's See The Results:
console.log("pathInfo :", pathInfo);

// {
//   fileName: 'app.js',
//   folderName: '/Users/tan/Documents/Yunis/Git/playground/packages/demo/nodeDemo',
//   fileExtension: '.js',
//   absoluteOrNot: true,
//   detailInfo: {
//     root: '/',
//     dir: '/Users/tan/Documents/Yunis/Git/playground/packages/demo/nodeDemo',
//     base: 'app.js',
//     ext: '.js',
//     name: 'app'
//   }
// }

console.log("path.sep: ", path.sep);
const p = path.join("/Users/tan", "Documents", "Yunis");
console.log("p", p); //   /Users/tan/Documents/Yunis

/* ===========================  FS   ==================================== */
const fs = require("fs");

fs.mkdir("./Demo", () => {
  console.log("mkdir");
});

// const data = "Hi,this is newFile.txt";
// fs.writeFile("./Demo/myFile.txt", data, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log("Writen to file successfully!");
//   }
// });

// 在原内容拼接新内容
// const appendData = "\nThis is new content.";
// fs.writeFile("./Demo/myFile.txt", appendData, { flag: "a" }, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log("Writen to file successfully!");
//   }
// });

// 读取文件
fs.readFile("./Demo/myFile.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("File read successfully! Here is the data");
    console.log(data);
  }
});

// 读取文件夹内容
fs.readdir(".", (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Directory read successfully! Here are the files:");
  console.log(files);
});

// 修改名称、路径
// fs.rename(oldPath, newPath, callback);

fs.rename("./Demo/myFile.txt", "./Demo/myFileRename.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File renamed successfully!");
});

// 删除文件
fs.unlink("./Demo/delete.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File Deleted Successfully!");
});

/* ===========================  event   ==================================== */
const EventEmitter = require("events");
const myEmitter = new EventEmitter();

// Listener Function - welcomeUser()
const welcomeUser = () => {
  console.log("Hi There, Welcome to the server!");
};

// Listening for the userJoined event using the on() method
myEmitter.on("userJoined", welcomeUser);

// Emitting the userJoined event using the emit() method
myEmitter.emit("userJoined");
