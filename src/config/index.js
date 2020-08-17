const path = require("path");
const ROOT_PATH_PROCESS = process.cwd();

module.exports = {
    ROOT_PATH_PROCESS,
    STATIC_FOLDER: path.resolve(ROOT_PATH_PROCESS, "./public"),
    PORT: process.PORT || 1234,
};
