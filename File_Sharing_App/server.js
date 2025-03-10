const express = require("express");

const mongoose = require("mongoose");


const fileRoute = require("./routes/file.route");

const app = express();

app.use(express.json());

// DB Connection
mongoose
    .connect("mongodb://127.0.0.1:27017/file_sharing_app")
    .then(() => console.log("DB Connected successfully"))
    .catch(err => console.log("ERROR CONNECTING TO DB", err));

// Moudlar routes
app.use(fileRoute);

app.listen(5000, () => console.log("Server is up and running at port 5000"));