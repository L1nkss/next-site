import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
export const getRules = (): RuleSetRule[] => {
    return [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader",
            ]
        },
    ]
}