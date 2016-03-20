function BabelExternalHelpers(mask) {
  if (mask != "*")
    throw new Error("BabelExternalHelpers only supports the '*' mask at this stage.")
}

BabelExternalHelpers.prototype.apply = function(compiler) {
  compiler.options.entry.unshift("!!val!" + require.resolve("./build-external-helpers"))
  compiler.options.module.loaders[0].loader += "&plugins=external-helpers"
}

module.exports = BabelExternalHelpers
