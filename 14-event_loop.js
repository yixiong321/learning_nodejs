// Event Loop

// The event loop is what alows Node.js to perform non-blocking I/O operations
// - despite the fact that js is single-threaded - by offloading
// operations to the system kernel whenever possible.

// Javascript is synchrounous and single threaded
// go line by line

/*
we run all the immediate code first
only then run callbacks
*/
/* First example */
// const { readFile } = require("fs");
// console.log("Started a first task");
// // if got problem, check file path
// //offload
// readFile("./content/first.txt", "utf8", (err, res) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(res);
//   console.log("completed first task");
// });
// //continue to run
// console.log("Starting the next task");

// /*second example*/
// //started os process
// console.log("first");
// // this is a callback
// setTimeout(() => {
//   console.log("second");
// }, 0);
// console.log("third");
// //completed and exited operating system process

/*Third example*/
// this is async
//setInterval(() => {
//  console.log("hello world");
//}, 2000);
//console.log("I will run first");
// process stays alive unless
// Kill process Control + C
// unexpected err

/*Fourth example*/
const http = require("http");
const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello world");
});
server.listen(5000, () => {
  console.log("Server listening on port :5000 ....");
});
