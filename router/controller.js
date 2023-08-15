const express = require("express");
const path = require("path");

const controllerRouter = express.Router();

// controllerRouter.use(express.static("public"));

controllerRouter.get("/astra.html", (request, response) => {
    response.sendFile(
        path.join(__dirname, "..", "public/assets/controller/astra.html")
    );
});

controllerRouter.get("/brim.html", (request, response) => {
    response.sendFile(
        path.join(__dirname, "..", "public/assets/controller/brim.html")
    );
});

controllerRouter.get("/harbor.html", (request, response) => {
    response.sendFile(
        path.join(__dirname, "..", "public/assets/controller/harbor.html")
    );
});

controllerRouter.get("/omen.html", (request, response) => {
    response.sendFile(
        path.join(__dirname, "..", "public/assets/controller/omen.html")
    );
});

controllerRouter.get("/viper.html", (request, response) => {
    response.sendFile(
        path.join(__dirname, "..", "public/assets/controller/viper.html")
    );
});

module.exports = controllerRouter;
