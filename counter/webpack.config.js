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

// export const mode = process.env.mode;
// export const mode = 'development';
// export const entry = "./src/index.js";
// export const output = {
//     path: path.resolve(__dirname, "dist"),
//     filename: "[hash].js",
//     publicPath: "/",
// };
// export const resolve = {
//     // path.resove 형태로 사용할 수도 있다.
//     // 그러면 node의 기본 모듈 'path'를 불러와야 한다.
//     extensions: [".js", ".jsx", ".css"],
// };
// export const module = {
//     rules: [
//         {
//             test: /\.(js|jsx)$/,
//             exclude: "/node_modules/",
//             loader: "babel-loader",
//         },
//         {
//             test: /\.css$/,
//             use: [
//                 {
//                     loader: "style-loader",
//                 },
//                 {
//                     loader: "css-loader",
//                 },
//             ],
//         },
//     ],
// };
// export const plugins = [
//     new CleanWebpackPlugin(),
//     new HtmlWebpackPlugin({
//         template: "./public/index.html",
//     }),
// ];
// export const devServer = {
//     host: "localhost",
//     port: 3000,
//     hot: true,
//     open: true,
// };