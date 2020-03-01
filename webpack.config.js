const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development", // 개발자 모드
    entry: {
        index: "./src/index.js"
        // another: "./src/another-module.js"
    },
    output: {
        chunkFilename: "[name].bundle.js",
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Output"
        }),
        new CleanWebpackPlugin()
    ]
};

// npx webpack --config webpack.config.js
