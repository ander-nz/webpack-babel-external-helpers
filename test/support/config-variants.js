const tmp = require("./tmp-folder")
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

exports.pluginless = WEBPACK_PLUGINLESS
exports.withPlugin = WEBPACK_WITHPLUGIN
