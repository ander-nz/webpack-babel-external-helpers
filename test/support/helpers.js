const tmp = require("./tmp-folder")
const webpackAsPromised = require("./webpack-as-promised")
const BabelExternalHelpers = require("../../src/index.js")

const BABEL_LOADER = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: "babel?presets=es2015",
}

const WEBPACK_PLUGINLESS = {
  entry: [tmp.inputjs.path],
  output: { filename: tmp.outputjs.path },
  module: { loaders: [BABEL_LOADER] },
}

const WEBPACK_WITHPLUGIN = {
  entry: [tmp.inputjs.path],
  output: { filename: tmp.outputjs.path },
  module: { loaders: [BABEL_LOADER] },
  plugins: [new BabelExternalHelpers("*")],
}

global.webpack_pluginless = function(srcInput) {
  tmp.cleanup()
  tmp.inputjs.write(srcInput)
  return webpackAsPromised(WEBPACK_PLUGINLESS).then(tmp.outputjs.read)
}

global.webpack_with_plugin = function(srcInput) {
  tmp.cleanup()
  tmp.inputjs.write(srcInput)
  return webpackAsPromised(WEBPACK_WITHPLUGIN).then(tmp.outputjs.read)
}
