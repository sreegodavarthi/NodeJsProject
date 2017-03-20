var express = require("express");
var router = express.Router();

router.get("/speakers", function (req, res) {
    var info = "";
    var dataFile = req.app.get("appData");
    dataFile.speakers.forEach(function(item){
        info += `
        <ul>
            <li>
                <h1>${item.name}</h1>
                <p>${item.summary}</p>
            </li>
        </ul>
        `;
    });
    res.send(`
        <h1>Academy Meetups</h1>
        ${info}
    `); 
});

router.get("/speakers/:speakerid", function (req, res) {
    var dataFile = req.app.get("appData");
    var speaker = dataFile.speakers[req.params.speakerid];
    res.send(`
        <h1>${speaker.title}</h1>
        <h2>with ${speaker.name}</h2>
        <p>${speaker.summary}</p>
    `); 
});

module.exports = router;