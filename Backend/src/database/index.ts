import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/sharenergy", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.once("open", function () {
  console.log("Database Connected");
});

export default db;
