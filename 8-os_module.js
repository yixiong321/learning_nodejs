//Built in modules

//OS
//PATH
//FS
//HTTP

const os = require("os");
//info abt curr user
const user = os.userInfo();
console.log(user);
// mehods returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
