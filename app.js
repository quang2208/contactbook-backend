const express = require("express");
const cors = require("cors");


const { BadRequestError, errorHandler } = require("./app/errors");
const setupContactRoutes = require("./app/routes/contact.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res) => {
    res.json({ message: "Welcome to contact book applicatiom."})
});

app.use((req, res, next) => {
    next(new BadRequestError(404, "Resource not found"));
    });

app.use((err, req, res, next) => {       
    errorHandler.handleError(err, res);
    });    
setupContactRoutes(app);
module.exports = app;