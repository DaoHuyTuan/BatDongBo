const fs = require("fs");
fs.readFile("./data.txt","utf8",(err,data) => {
    if(err) return console.log(err.toString());
          console.log(data);
    
})