import * as dotenv from "dotenv";
import colors from "colors";

import express from "express";
import products from "./data/data.js";
import connectDB from "./config/db.js";

////// dotenv
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: `${__dirname}/../config.env` });
///////////
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server running on port ${PORT}`.yellow.bold));
