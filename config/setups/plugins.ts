import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {Paths} from "../types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const getPlugins = ({ htmlPlugin }: Paths): webpack.WebpackPluginInstance[] => {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: htmlPlugin,
            title: 'Webpack React Template'
        }),
        new MiniCssExtractPlugin({
            filename: '[name]-[hash].css'
        })
    ]
}