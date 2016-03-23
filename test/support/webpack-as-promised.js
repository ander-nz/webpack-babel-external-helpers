const clone = require("clone")
const webpack = require("webpack")

function webpackAsPromised(options) {
  return new Promise(function(resolve, reject) {
    webpack(options, function(err, stats) {
      if (err)
        return reject(err)
      if (stats.hasErrors() || stats.hasWarnings())
        return reject(new WebpackError(stats))
      return resolve()
    })
  })
}

function WebpackError(stats) {
  const message = []
    .concat(stats.compilation.errors)
    .concat(stats.compilation.warnings)
    .map(e => e.toString())
    .join("\n")

  Error.captureStackTrace(this, this.constructor)
  this.name = this.constructor.name
  this.message = message
  this.stats = stats
}

module.exports = webpackAsPromised
exports.WebpackError = WebpackError
