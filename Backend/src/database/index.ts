import "dotenv/config";

import mongoose from "mongoose";

mongoose.connect(process.env.DATABASE_URL as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));

export default db;
