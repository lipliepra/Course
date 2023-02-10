import webpack from "webpack";

import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

import {IBuildOptions} from "./types/config";

export function buildWebpackConfig(options: IBuildOptions): webpack.Configuration {
    const {paths, mode, isDevelopment} = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        devtool: isDevelopment
            ? 'inline-source-map'
            : undefined,
        devServer: isDevelopment
            ? buildDevServer(options)
            : undefined,
    }
}