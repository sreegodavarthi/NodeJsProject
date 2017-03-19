var express = require("express");
var app = express();
var dataFile = require("./data/data.json");

app.set("port", process.env.PORT || 3000);

app.get("/", function (req, res) {
    var info = "";
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

var server = app.listen(app.get("port"), function(){
    console.log("Listening from port: " + app.get("port"));
});