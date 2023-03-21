// Modules

// CommonJS, every file is module (by default)
// Module - encapsulated code (only share minimum)

//or {john,jack}
const names = require("./4-names");
const sayhi = require("./5-utils");
console.log(names);
const data = require("./6-alternate_flavour");
//console.log(data);

require("./7-mind-grenade");
//when you inport it,will invoke the code;

//sayhi("susan");
//sayhi(names.john);
//sayhi(names.jack);
