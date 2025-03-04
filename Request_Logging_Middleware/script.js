const express = require("express")

const server = express();

const requestLogger = (req, res, next) => {
    const requestType = req.method;
    const url = req.url;
    const ip = req.ip;
    const timeStamp = new Date().toISOString();
    console.log(`Method :- ${requestType} \nURL :- ${url} \nIP Address :- ${ip} \ntimeStamp :- ${timeStamp}`);
    next();
}

server.use(requestLogger);

server.get("/users", (req, res) => {
    res.json({
        sucess: true,
        message: "Dummy GET users API"
    });
});

server.post("/login", (req, res) => {
    res.json({
        sucess: true,
        message: "Dummy POST API"
    });
    
});



server.listen(5000,127 ,() => {
    console.log("server is up and running on port 5000");
    
});