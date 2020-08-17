const webpack = require("webpack");
const webpackConfig = require('./bundle-config');

function startTranspiling() {
    const transpiling = webpack(webpackConfig);

    transpiling.watch({
        aggregateTimeout: 300,
        info: 'verbose'
    }, (error, stats) => {
        if (error) {
            console.error(error.stack || err);

            if (error.details) {
                console.error(error.details);
            }

        } else {
            const info = stats.toJson();

            if (stats.hasErrors()) {
                console.error(info.errors);
            }

            if (stats.hasWarnings()) {
                console.warn(info.warnings);
            }

            console.log(stats.toString({
                chunks: false,  // Makes the build much quieter
                colors: true    // Shows colors in the console
            }));
        }
    });
}
module.exports = { 
    startTranspiling
};
