import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { IBuildOptions } from './types/config';

export function buildPlugins(options: IBuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HTMLWebpackPlugin({
            template: options.paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEVELOPMENT__: JSON.stringify(options.isDevelopment),
        }),
    ];

    if (options.isDevelopment) {
        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    return plugins;
}
