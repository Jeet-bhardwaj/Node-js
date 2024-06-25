import fs from "fs/promises"


let a =  await fs.readFile("jeet.txt");

console.log(a.toString());