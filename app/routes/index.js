var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.send(`
        <link rel="stylesheet" type = "text/css" href = "css/style.css">  
        <h1>Welcome to Meetings!</h1>
        <img src = "/images/misc/background.jpg" alt = "background" style = "height: 200px;">
        <script src = "/reload/reload.js"></script>
    `); 
});

module.exports = router;