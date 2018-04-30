const NgCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: '@ngtools/webpack'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new NgCompilerPlugin({
      tsConfigPath: './tsconfig.json',
      entryModule: path.resolve(__dirname, './src/button.module#ButtonModule')
    })
  ],
  mode: 'production',
  stats: 'errors-only'
};
