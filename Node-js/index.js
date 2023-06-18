const fs = require("fs");
fs.writeFile("message.txt", "Hello yaswanth", (error) => {
  if (error) throw error;
  console.log("The file have been saved :)!");
});

fs.readFile("message.txt",'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});