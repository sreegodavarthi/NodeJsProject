var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.send(`
        <h1>Academy Meetups</h1>
        <p>Speakers list</p>
    `); 
});

module.exports = router;