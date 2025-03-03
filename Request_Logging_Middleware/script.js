const express = require("express")

const server = express();

const apiKeyValidator = (req, res, next) => {
    
}

server.use(apiKeyValidator);

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



server.listen(5000, () => {
    console.log("server is up and running on port 5000");
    
});