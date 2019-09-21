const mongoose = require("mongoose");

exports.connect = dbName => {
  mongoose.connect(`mongodb://localhost/${dbName}`);

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => console.log(`Connected to ( ${dbName} ) database!`));
};
