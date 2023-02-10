import webpack from 'webpack';
import path from "path";

import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {IBuildEnv, IBuildPaths, TBuildMode} from "./config/build/types/config";

export default (env: IBuildEnv) => {
    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    const mode: TBuildMode = env.mode || 'development'
    const PORT = env.port || 3000;

    const isDevelopment: boolean = mode === 'development';

    return buildWebpackConfig({
        mode,
        paths,
        isDevelopment,
        port: PORT,
    }) as webpack.Configuration;
};