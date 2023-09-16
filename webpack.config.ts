import path from 'path';
import {ENVS, getPlugins, getServer, MODE, Paths, getRules } from "./config";
import webpack from "webpack";

const PATHS: Paths = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  htmlPlugin: path.resolve(__dirname, 'public', 'index.html'),
  output: path.resolve(__dirname, 'dist')
}

module.exports = (env: ENVS): webpack.Configuration => {
  const mode = env.mode || MODE.DEVELOPMENT;
  const isDEV = mode === MODE.DEVELOPMENT;
  const PORT = env.port || 3000;

  return {
    entry: PATHS.entry,
    mode,
    plugins: getPlugins(PATHS),
    devServer: getServer(PORT),
    module: {
      rules: getRules(),
    },
    devtool: isDEV ? 'inline-source-map' : undefined,
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: "[name][hash].js",
      clean: true,
      path: PATHS.output
    },
  }
};
