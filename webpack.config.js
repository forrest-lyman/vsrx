const path = require('path');
const glob = require('glob');

module.exports = {
    mode: 'development',
    entry: glob.sync('./src/pages/**/*.tsx').reduce((entries, file) => {
        const entry = path.basename(file, path.extname(file));
        entries[entry] = path.resolve(__dirname, file);
        return entries;
    }, {}),
    output: {
        path: path.resolve(__dirname, 'out/pages'),
        filename: '[name].bundle.js',
        library: 'MyLibrary',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};