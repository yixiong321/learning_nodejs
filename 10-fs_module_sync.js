const { readFileSync, writeFileSync } = require("fs");

//synchronous

console.log("start");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/sec.txt", "utf-8");

//console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: `a` }
);
console.log("Done with this task");
console.log("Starting the next");
