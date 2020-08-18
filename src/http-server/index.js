const fs = require("fs");
const path = require("path");

const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const config = require("../config");
const app = express();

app.use(morgan(":method :url :status - :response-time ms"));
app.use(bodyParser.json());
app.use(express.static(config.STATIC_FOLDER));

app.get("/previous-rulings", (req, res) => {
    const filePath = path.resolve(__dirname + "/./../mock-data/previous-rulings.json");
    fs.readFile(filePath, 'utf8', (error, data) => {
        if(error) res.status(500).json({error});

        res.json(JSON.parse(data));
    });
});

module.exports = {
    run: () => app.listen(
        config.PORT,
        () => console.debug(`Server running on ${config.PORT} port\n`)
    ) 
};
