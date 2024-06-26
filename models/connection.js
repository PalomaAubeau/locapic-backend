const mongoose = require("mongoose");

//mongoose.set("strictQuery", true); // Besoin??

const connectionString = process.env.CONNECTION_STRING;
mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));

module.exports = connectionString;
