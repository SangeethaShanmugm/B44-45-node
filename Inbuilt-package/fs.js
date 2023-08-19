const fs = require("fs");

const quote =
  "Dream is something that you doesn't see in sleep, dream is something that does not let you sleep";

fs.writeFile("awesome.pdf", quote, (err) => {
  if (err) throw err;
  console.log("Completed writing awesome.html");
});

const quote2 = "Live more, worry Less🥳🥳";

//Task - 1
//Create the below files with quote2 as the content
// /backup/
// text-1.html
// text-2.html
// text-3.html
//..
// text-10.html