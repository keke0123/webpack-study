const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development", // 개발자 모드
    entry: {
        index: "./src/index.js"
    },
    output: {
        // chunkFilename: "[name].bundle.js",
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Caching"
        }),
        new CleanWebpackPlugin()
    ],
    optimization: {
        moduleIds: "hashed",
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vender: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "venders",
                    chunks: "all"
                }
            }
        }
    }
};

// npx webpack --config webpack.config.js
