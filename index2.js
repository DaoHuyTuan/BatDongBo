const fs = require("fs");
function read(filename,fun){
    fs.readFile(filename,"utf8",(err,data)=> {
        fun(data);
    });
}
read("./data.txt",x => console.log(x));