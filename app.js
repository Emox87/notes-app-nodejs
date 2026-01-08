// Import NPMJS Packages
const chalk = require("chalk");
const yargs = require("yargs");

// Import OWN Packages and functions
const getNotes = require("./utils.js");

// Print Success in green using chalk
// console.log(chalk.green("Success"));

const msg = getNotes();

const command = process.argv[2];

if (command === "add") {
  // Adding a note
  console.log("Adding note...");
} else if (command === "remove") {
  // Removing note
  console.log("Removing note");
}
