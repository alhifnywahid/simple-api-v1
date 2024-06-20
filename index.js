const express = require("express");
const cors = require("cors");
const path = require("path");
const chalk = require("chalk");
const swaggerUi = require("swagger-ui-express");

const config = require("./schema/config");
const docs = require("./schema/endpoint");
const api = require("./router/api");
const anim = require("./lib/print");
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000;
console.log(process.env.BASE_URL)

// Middleware Configuration
app.enable("trust proxy");
app.set("json spaces", 2);
app.use(cors());
app.use("/api", api);
app.use(express.static(path.join(__dirname, "/public")));

// Route Handlers
app.get("/", (req, res) => {
  res.render("index");
});

app.use(
  "/dokumentasi",
  swaggerUi.serve,
  swaggerUi.setup(docs.swaggerDocument, docs.options),
);

// 404 Error Handler
app.use((req, res, next) => {
  res.status(404).send("kontent yang ada cari tidak ada!");
});

// General Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the Server
app.listen(port, () => {
  console.log(chalk.cyan("GopretAPIs - Simple Base Rest API"));
  anim(`Server is running on http://localhost:${port}`);
});
