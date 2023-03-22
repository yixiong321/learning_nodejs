// Event Driven Programming
// Used heavily in Node.js

const EventEmitter = require("events");
const customEmitter = new EventEmitter();

// on - listen for an event
// emit - emit an event
customEmitter.on("response", (name, id) => {
  console.log(`Data received user ${name} with id: ${id}`);
});
customEmitter.on("response", () => {
  console.log("Data received 2");
});

customEmitter.emit("response", "john", 34);

// server example

const http = require("http");

//using EventEmitter API
const server = http.createServer();
// emits request event
// suscribe to it/ listen to it / respond to it
server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);
