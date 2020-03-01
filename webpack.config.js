const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            // css builder
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            // file builder
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            // font builder
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"]
            },
            //
            {
                test: /\.(csv|tsv)$/,
                use: ["csv-loader"]
            },
            //
            {
                test: /\.xml$/,
                use: ["xml-loader"]
            }
        ]
    }
};

// npx webpack --config webpack.config.js
