const tmp = require("./tmp-helpers")
const webpackAsPromised = require("./webpack-as-promised")
const BabelExternalHelpers = require("../../src/index.js")

const BABEL_LOADER = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: "babel?presets=es2015",
}

const WEBPACK_PLUGINLESS = {
  entry: [tmp.INPUT_PATH],
  output: { filename: tmp.OUTPUT_PATH },
  module: { loaders: [BABEL_LOADER] },
}

const WEBPACK_WITHPLUGIN = {
  entry: [tmp.INPUT_PATH],
  output: { filename: tmp.OUTPUT_PATH },
  module: { loaders: [BABEL_LOADER] },
  plugins: [new BabelExternalHelpers("*")],
}

global.webpack_pluginless = function(srcInput) {
  tmp.cleanup()
  tmp.writeInputSync(srcInput)
  return webpackAsPromised(WEBPACK_PLUGINLESS).then(tmp.readOutputSync)
}

global.webpack_with_plugin = function(srcInput) {
  tmp.cleanup()
  tmp.writeInputSync(srcInput)
  return webpackAsPromised(WEBPACK_WITHPLUGIN).then(tmp.readOutputSync)
}
