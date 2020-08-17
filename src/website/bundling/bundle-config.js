const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const config = require("../../config");

const scssAliases = aliases => {
    return url => {
        for (const [alias, aliasPath] of Object.entries(aliases)) {
            if (url.indexOf(alias) === 0) {
                return {
                    file: url.replace(alias, aliasPath),
                };
            }
        }

        return url;
    };
};

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "../index.js"),
    watch: true,
    output: {
        path: config.STATIC_FOLDER,
        filename: "bundle.js"
    },
    target: 'web',
    resolve: {
        alias: {
            svelte: path.resolve("node_modules", "svelte"),
            styles: path.resolve(__dirname, "../styles"),
            components: path.resolve(__dirname, "../components"),
            assets: path.resolve(__dirname, "../assets")
        },
        extensions: [".js", ".svelte"]
    },
    module: {
        rules: [
            {
                test: /\.(html|svelte)$/,
                exclude: /node_modules/,
                use: {
                    loader: "svelte-loader",
                    options: {
                        emitCss: true,
                        preprocess: require("svelte-preprocess")({
                            scss: {
                                importer: [
                                    scssAliases({
                                        "styles": path.resolve(__dirname, "../styles"),
                                    }),
                                ],
                            }
                        })
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|ttf|woff|eot)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            title: "Zemoga Test",
            template: path.resolve(__dirname, "./base-template.ejs")
        }),
        new MiniCssExtractPlugin({
            filename: "styles.css"
        }),
        new CopyPlugin([
            { from: path.resolve(__dirname, "../assets"), to: `${config.STATIC_FOLDER}/assets` }
        ])
    ]
};
