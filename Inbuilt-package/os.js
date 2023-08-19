const os = require("os");

console.log("Free memory ", os.freemem() / 1024 / 1024 / 1024);
console.log("Total memory", os.totalmem() / 1024 / 1024 / 1024);

// 1kb =>  1024 bytes => 1mb => 1024 KB => 1gb => 1024 mb

console.log("Os version", os.version());
console.log("CPUS", os.cpus());
console.log("Platform", os.platform());

console.log("Arch", os.arch());
console.log("userInfo", os.userInfo());
