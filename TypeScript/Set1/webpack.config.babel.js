import webpack from 'webpack';
import path from 'path';

const TARGET = process.env.npm_lifecycle_event
process.env.BABEL_ENV = TARGET

const APP_PATH = path.resolve(__dirname, './exercises.ts')
const BUILD_PATH = path.resolve(__dirname, 'build')

module.exports = () => {
  return {
    entry: APP_PATH,
    output: {
      path: BUILD_PATH,
      filename: 'bundle.js',
      libraryTarget: 'var',
      library: 'dvt'
    },
    watch: true,
    devtool: 'source-map',

    resolve: {
      extensions: ['.ts', '.js']
    },
    target: 'node',
    module: {
      rules: [
        {
          test: /\.ts$/,
          loaders: ['babel-loader', 'ts-loader'],
          exclude: /node_modules/
        }
      ]
    },

    plugins: [

    ]
  }
}