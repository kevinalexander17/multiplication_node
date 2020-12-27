const options = {
  base: {
    demand: true,
    alias: "b",
  },
  limite: {
    alias: "l",
    default: 10,
  },
};

const argv = require("yargs")
  .command("list", "Print to the console multiplicacion table", options)
  .command("create", "Create a multiplicacion table", options)
  .help().argv;

module.exports = {
  argv,
};
