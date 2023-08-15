const express = require("express");
const path = require("path");

const sentinellerRouter = express.Router();

// sentinellerRouter.use(express.static("public"));

sentinellerRouter.get("/chamber.html", (request, response) => {
    response.sendFile(
        path.join(__dirname, "..", "public/assets/sentinel/chamber.html")
    );
});

sentinellerRouter.get("/cypher.html", (request, response) => {
    response.sendFile(
        path.join(__dirname, "..", "public/assets/sentinel/cypher.html")
    );
});

sentinellerRouter.get("/killjoy.html", (request, response) => {
    response.sendFile(
        path.join(__dirname, "..", "public/assets/sentinel/killjoy.html")
    );
});

sentinellerRouter.get("/sage.html", (request, response) => {
    response.sendFile(
        path.join(__dirname, "..", "public/assets/sentinel/sage.html")
    );
});

module.exports = sentinellerRouter;
