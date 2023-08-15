const express = require("express");
const path = require("path");

const initiatorRouter = express.Router();

// initiatorRouter.use(express.static("public"));

initiatorRouter.get("/brach.html", (request, response) => {
    response.sendFile(
        path.join(__dirname, "..", "public/assets/initiator/brach.html")
    );
});

initiatorRouter.get("/gekko.html", (request, response) => {
    response.sendFile(
        path.join(__dirname, "..", "public/assets/initiator/gekko.html")
    );
});

initiatorRouter.get("/kayo.html", (request, response) => {
    response.sendFile(
        path.join(__dirname, "..", "public/assets/initiator/kayo.html")
    );
});

initiatorRouter.get("/skye.html", (request, response) => {
    response.sendFile(
        path.join(__dirname, "..", "public/assets/initiator/skye.html")
    );
});

initiatorRouter.get("/sova.html", (request, response) => {
    response.sendFile(
        path.join(__dirname, "..", "public/assets/initiator/sova.html")
    );
});

module.exports = initiatorRouter;
