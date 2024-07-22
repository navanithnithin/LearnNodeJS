const fs =require("fs");
const os =require("os")

// fs.writeFileSync("./text.txt", "Hi nithin");
// fs.writeFile("./text.txt", "this is akash", (err) =>{});

// const result =fs.readFile("./contact.txt", "utf-8");
// console.log(result);

// fs.readFile("./contact.txt", "utf-8", (err , result)=>{
//     if(err){
//         console.log("their is an error");
//     }
//     else{
//         console.log("this is your result"+" " + result);
//     }
// });

// fs.appendFileSync("./text.txt", new Date().getDate().toLocaleString());

// fs.copyFileSync("./text.txt", "./copy.txt");
// fs.unlinkSync("./copy.txt");
// console.log(fs.statSync("./text.txt").isFile());
// fs.mkdirSync("new")

// console.log("1");
// const result = fs.readFileSync("./text.txt", "utf-8");
// console.log(result);
// console.log("2");

console.log("1");
fs.readFile("./text.txt", "utf-8", (err, result)=>{
    if(err){
        console.log('this is an error');
    }
    else{
        console.log(result)
    }
});
console.log("2")

console.log(os.cpus().length);