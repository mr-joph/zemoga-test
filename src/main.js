const webBundler = require("./website/bundling")
const webServer = require("./http-server");

webBundler.startTranspiling();
webServer.run();