const fs = require("fs");

const quote =
  "Dream is something that you doesn't see in sleep, dream is something that does not let you sleep";

// fs.writeFile("awesome.pdf", quote, (err) => {
//   if (err) throw err;
//   console.log("Completed writing awesome.html");
// });

const quote2 = "Live more, worry Less🥳🥳";

//Task - 1
//Create the below files with quote2 as the content
// /backup/
// text-1.html
// text-2.html
// text-3.html
//..
// text-10.html

// for (let i = 1; i <= 10; i++) {
//   fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//     if (err) throw err;
//     console.log(`Completed writing text-${i}.html`);
//   });
// }

const quote3 = "Happy day";
//Task-2
// node fs.js 8 -> 8 files to be create | note-1.txt..note-8.txt

const [, , noOfFiles] = process.argv;
console.log(noOfFiles);

for (let i = 1; i <= noOfFiles; i++) {
  fs.writeFileSync(`./note-${i}.txt`, quote3);
  console.log(`Completed writing note-${i}.txt`);
}

//Task -3
// /backup/ => create no of files given in node fs.js => sample-1.ppt
//=> node fs.js 20 => || sample-1.ppt..sample-20.ppt

// let date = new Date();
// console.log(date);
// let month = date.getMonth() + 1;
// console.log(month)

// fs.readFile("./awesome.html", "utf-8", (err, data) => {
//   if (err) console.log("Error ❌", err);
//   console.log("The content of the file=>", data);
// });

const niceQuote = "Make everyday a little less ordinarily";

// fs.appendFile("./nice.txt", "\n" + niceQuote, (err) => {
//   if (err) throw err;
//   console.log("Completed writing nice.txt");
// });

// fs.unlink("./toRemove.txt",(err)=>{
//   console.log("Deleted Successfully")
// })

// fs.readdir("./backup", (err, files) => {
//   console.log("All file names are", files);
// });

//Task => Delete all the files in backup folder

// fs.readdir("./backup", (err, files) => {
//   files.forEach((fileName) => {
//     fs.unlink(`./backup/${fileName}`, (err) => {
//       console.log("Deleted Successfully", fileName);
//     });
//   });
// });

// writeFile => CallStack => WebApi(whoever finishes writing first) => CallBack Q => CallStack

// fs.writeFile, fs.readFile, fs.appendFile, fs.unlink  => async
// fs.writeFileSync, fs.readFileSync, fs.appendFileSync, fs.unlinkSync  => sync
