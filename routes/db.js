import mongoose from "mongoose";

const DB_URI = `mongodb+srv://Student:Ij1xBAAaORQe5eaz@cluster0.pq6lwou.mongodb.net/db-contacts?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(DB_URI)
  .then(() => console.log("Database connection successful"))
  .catch((error) => {
    console.error("Database connection error", error);
    process.exit(1);
  });
