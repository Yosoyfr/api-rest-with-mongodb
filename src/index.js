const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const config = require("./config");
require("./database");
const vaccinatedRoutes = require("./routes/vaccinated.routes");

const app = express();
const port = config.PORT;

/**
 * Middlewares
 * CORS
 * MORGAN
 * EXPRESS.JSON
 * EXPRESS.URLENCONDED
 */
const corsOptions = { origin: true, optionsSuccessStatus: 200 };
app.use(cors(corsOptions));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

/**
 * Routes
 */
app.get("/", (req, res) => res.send("Welcome to my API!"));
app.use("/api", vaccinatedRoutes.routes);

/**
 * Inicio del servidor
 */
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
