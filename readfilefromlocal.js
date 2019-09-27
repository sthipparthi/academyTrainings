var fs = require("fs");
fs.readFile("Notes.txt", function(err, data) {
  console.log(data.toString());
});