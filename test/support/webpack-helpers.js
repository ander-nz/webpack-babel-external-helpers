const webpack = require("webpack")

exports.as_promise = function(options) {
  return new Promise(function(resolve, reject) {
    webpack(options, function(err, stats) {
      if (err)
        reject(new Error("Fatal Error: " + err))
      if (stats.hasErrors() || stats.hasWarnings())
        reject(new Error("Soft Error: " + stats.toString()))
      resolve()
    })
  })
}
