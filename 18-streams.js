//STREAMS

// used to read and write sequentially

/*
4 diff kinds
- Writeable
- Readable 
- Duplex (R&W)
- Transform (modify data when reading or writing)
*/

// events can be used with streams

// //create example big file
// const { writeFileSync } = require("fs");
// for (let i = 0; i < 10000; i++) {
//   writeFileSync(`./content/big.txt`, `hello world ${i}\n`, { flag: "a" });
// }

const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf-8",
});
/*
default 64kb
last buffer - remainder
highWaterMark - control size
const stream = createReadStream('./content/big.txt',{highWaterMArk:90000})
const stream = createReadStream('./content/big.txt',{encoding:`utf8`})

*/

stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (err) => {
  console.log(err);
});
