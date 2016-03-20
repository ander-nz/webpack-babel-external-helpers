# Webpack Babel External Helpers
Generates Babel 6's external helpers, then adds them to the Webpack compilation unit.

> ***Pre-alpha!***
>
> This plugin has not yet been written to handle a variety of webpack configs.
> See the issues list and the usage example for more information.

##Usage
Installation:
```sh
npm install --save-dev webpack-babel-external-helpers
```

Example `webpack.config.js`:
```js
const BabelExternalHelpers = require("webpack-babel-external-helpers")

// instantiate the plugin
// in the current version, the parameter MUST be "*"
const helpersPlugin = new BabelExternalHelpers("*")

// configure babel-loader
const babelLoader = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  
  // in the current version, babel-loader options MUST be specified as a query string
  // in the current version, babel-loader CANNOT have any plugins configured
  loader: "babel?presets=es2015",
}

module.exports = {
  // in the current version, entry MUST be an array of strings
  entry: ["./main.js"],
  
  // in the current version, babel must be the FIRST loader
  module: {
    loaders: [babelLoader]
  },
  
  // finally, adds the plugin to webpack config
  plugins: [helpersPlugin],
}
```