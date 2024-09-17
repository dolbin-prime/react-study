import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import path from "path";

const dirname = path.resolve();

export default  {
    mode : "development",
    entry : "./src/index.jsx",
    output : {
        path: path.resolve(dirname, "dist"),
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
