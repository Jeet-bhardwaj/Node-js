const fs = require('fs');

fs.writeFile("me.txt" , "When file is a filename, asynchronously writes data to the file, replacing the file if it already exists. data can be a string or a buffer.", () => {
    console.log("File is created");
    fs.readFile("me.txt" , (error, data) => {
        console.log(error,data.toString());
        
    })

})

fs.appendFile("harry.txt", "When file is a filename, asynchronously"); 