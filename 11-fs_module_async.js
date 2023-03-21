const { readFile, writeFile } = require("fs");
// ASYNC
// need callbacks
// Callbacks - run call backs when complete
// like event listener, after event then run
console.log("start");
// the node will offload and continue on
// the callback later do
readFile(`./content/first.txt`, "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  //console.log(result);
  // for the logic
  const first = result;
  readFile(`./content/sec.txt`, "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Done with this task");
      }
    );
  });
});
console.log("starting the next task");
