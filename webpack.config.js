const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
    output: {
        clean: true,
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".ts", ".js", ".wasm"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src/index.html")
        }),
        new WasmPackPlugin({
            crateDirectory: __dirname
        })
    ],
    experiments: {
        asyncWebAssembly: true
    }
};
