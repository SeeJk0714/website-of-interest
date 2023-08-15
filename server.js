const express = require("express");
const path = require("path");
const app = express();
const port = 5555;
const controllerRouter = require("./router/controller");
const duelistRouter = require("./router/duelist");
const initiatorRouter = require("./router/initiator");
const sentinelRouter = require("./router/sentinel");

app.use(express.static("public"));
app.use("/assets/controller", controllerRouter);
app.use("assets/duelist", duelistRouter);
app.use("/assets/initianor", initiatorRouter);
app.use("/assets/sentinel", sentinelRouter);

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname + "/public/index.html"));
});

app.use((request, response, next) => {
    res.status(404).send("Page not found");
});

app.listen(port, () => {
    console.log(`the server is running at http://localhost:${port}`);
});
