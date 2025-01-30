const path = require('path');
const glob = require('glob');

// Get the consuming project's root directory
const projectRoot = process.cwd();
const srcDir = path.resolve(projectRoot, 'src');

// Dynamically find all `.tsx` files in `src/pages/` of the project using `@vsrx/react`
const entryFiles = glob.sync(`${srcDir}/**/*.tsx`).reduce((entries, file) => {
    const entry = path.relative(srcDir, file).replace(/\.tsx$/, ''); // Use relative path for better structuring
    entries[entry] = path.resolve(projectRoot, file); // Ensure paths are relative to the project
    return entries;
}, {});

console.log('Dynamic Entry Files:', entryFiles);

module.exports = {
    mode: 'development',
    context: projectRoot, // Set the consuming project as the context
    entry: entryFiles,
    output: {
        path: path.resolve(projectRoot, 'out'), // Ensure output is in the consuming project's `dist/`
        filename: '[name].bundle.js', // Generate multiple bundles based on file names
        library: '@vsrx/react',
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
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
        
    },
};
