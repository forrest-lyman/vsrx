#!/usr/bin/env node

const path = require('path');
const { execSync } = require('child_process');

// Dynamically resolve Webpack from this package's dependencies
const webpackPath = require.resolve('webpack-cli/bin/cli.js');
const configPath = path.resolve(__dirname, '../webpack.client.config.js');

console.log('Running Webpack build with the VSRX/React config...');

try {
  execSync(`node ${webpackPath} --config ${configPath}`, { stdio: 'inherit' });
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
