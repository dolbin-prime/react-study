import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import path from "path";

const __dirname = path.resolve();

export default  {
    mode : "development",
    entry : ["@babel/polyfill", "./src/index.js"],
    output : {
        path: path.resolve(__dirname, "dist"),
        filename: "[fullhash].js",
        publicPath: "/",
    },
    resolve : {
        extensions: [".js", ".jsx", ".css"],
    },
    module : {
        rules: [
            {
                test: /\.(js|jsx)$/,
                // exclude: "/node_modules/",
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                ],
            },
        ],
    },
    plugins : [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
    devServer : {
        host: "localhost",
        port: 3000,
        hot: true,
        open: true,
    },
};
