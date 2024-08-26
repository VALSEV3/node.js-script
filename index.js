const fs = require("fs");
const path = require("path");
const process = require("process");

const directory = process.argv[2];

if (!directory) {
  console.error("Error: Please provide a directory.");
  process.exit(1);
}

let count = 0;
const intervalId = setInterval(() => {
  if (count >= 30) {
    clearInterval(intervalId); // Stop the interval after 30 iterations
    console.log("Finished deleting files in intervals.");
    return;
  }

  fs.readdir(directory, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(directory, file), (err) => {
        if (err) throw err;
      });
    }
  });

  count++;
}, 6000); // Execute every 6 seconds
