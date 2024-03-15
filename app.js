import "dotenv/config";
import express from "express";
import authRoutes from "./routes/auth.js";
import contactsRouter from "./routes/contacts.js";
import "./routes/db.js";

import auth from "./middleware/auth.js";

const app = express();

app.use("/api/users", authRoutes);
app.use("/api/contacts", auth, contactsRouter);

// Handle 404
app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

// Handle 500
app.use((error, req, res, next) => {
  const { status = 500, message = "Interval Server Error" } = error;
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log("Server starded on port 8080");
});
