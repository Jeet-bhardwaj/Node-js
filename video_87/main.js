const fs = require('fs');

// console.log(fs);

console.log("starting");
fs.writeFileSync("jeet1.txt","jeet is good boy")
fs.writeFile("jeet.txt","jeet is good boy" , () => {console.log("done")})
console.log("ending");