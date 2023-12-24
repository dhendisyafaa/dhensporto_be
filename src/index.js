import express from "express";
import dotenv from "dotenv";
dotenv.config();
import productController from "./project/project.controller.js";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use("/projects", productController);

app.listen(PORT, () => {
  console.log(`Server up and running at port ${PORT}`);
});
