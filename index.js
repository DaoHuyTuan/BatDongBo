const fs = require("fs");
let dat;
function read(filename){
    console.log(filename);
fs.readFile(filename,"utf8",(err,data) => {
    if(err) {
         console.log(err.toString());
    }else{
        console.log(data.toString());
    }  
});
 }
const data = read("./data.txt");
console.log(data.toString());
