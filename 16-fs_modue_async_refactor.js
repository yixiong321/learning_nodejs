const { readFile, writeFile } = require("fs"); //or can just use require('fs').promises
const util = require("util");
// ASYNC AWAIT
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    // w8 for promise to resolve
    const first = await readFilePromise("./content/first.txt", "utf-8");
    const second = await readFilePromise("./content/sec.txt", "utf-8");
    await writeFilePromise(
      "./content/result-mind-grenade.txt",
      `This is awesome!: ${first}${second}`
      // "This is awesome"{ flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();

//const getText = (path) => {
//  return new Promise((resolve, reject) => {
//    readFile(path, "utf-8", (err, data) => {
//      if (err) {
//        reject(err);
//        return;
//      } else {
//        resolve(data);
//      }
//    });
//  });
//};

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
