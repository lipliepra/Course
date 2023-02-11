import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import {IBuildOptions} from "./types/config";

export function buildLoaders(options: IBuildOptions): webpack.RuleSetRule[] {
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDevelopment
                ? "style-loader"
                : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: options.isDevelopment
                            ? '[path][name]__[local]'
                            : '[hash:base64:8]',
                    },
                }
            },
            "sass-loader",
        ],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    return [
        typeScriptLoader,
        cssLoader,
        fileLoader,
        svgLoader,
    ];
}