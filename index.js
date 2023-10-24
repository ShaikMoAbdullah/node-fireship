// console.log("hello ");

// Know your runtime
// console.log(global.name);
// global.name = "Abdullah";
// console.log(global.name);
// console.log(process);
// console.log(process.platform);
// console.log(process.env.USER);

// Events ans Callbacks in NodeJS
// const { EventEmitter } = require("events");
// const eventEmitter = new EventEmitter();

// eventEmitter.on("lunch", () => {
//   console.log("Lunch time");
// });

// eventEmitter.emit("lunch");
// eventEmitter.emit("lunch");

// process.on("exit", () => {
//   console.log("Lunch time");
// });

// File System
// const { readFile, readFileSync } = require("fs");

// const txt = readFileSync("./one.txt", "utf-8");

// console.log(txt);
// console.log("do this on priority first");

// readFile("./one.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(data);
//   }
// });

// console.log("do this on priority first");

// const { readFile } = require("fs").promises;

// async function readingFile(fileName) {
//   const file = await readFile(fileName, "utf-8");
//   console.log(file);
// }

// readingFile("./one.txt");

// Modules and npm
// Modules are JS files that exports itself
// In built modules - fs, events, etc

// 2 ways to import a module in Node
// CommonJS - require() --> Traditional way
// ESModules - import/export --> ES6 way

// const myModule = require("./my-module");
// console.log(myModule);

// const express = require("express");
// const { readFile } = require("fs");
// const app = express();

// request - user incoming data
// response - your outgoing data
// app.get("/", (request, response) => {
//   readFile("./home.html", "utf-8", (err, data) => {
//     if (err) {
//       response.status(500).send("sorry out of order");
//     }
//     response.send(data);
//   });
// });

// app.listen(process.env.PORT || 3000, () => {
//   console.log("App available on localhost://3000");
// });

const { readFile } = require("fs").promises;

const express = require("express");
const app = express();
app.get("/", async (request, response) => {
  response.send(await readFile("./home.html", "utf-8"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("App will be available in localhost:3000");
});
