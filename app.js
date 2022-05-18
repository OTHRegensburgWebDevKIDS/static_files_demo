const express = require("express");

var app = express();

app.use(express.static("public"));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Web-App listening on port ${PORT}`)
});
