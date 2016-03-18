const fs = require("fs")
const del = require("del")
const mkdirp = require("mkdirp")

exports.DIR = "./tmp"
exports.INPUT_PATH = `${exports.DIR}/input.js`
exports.OUTPUT_PATH = `${exports.DIR}/output.js`
  
exports.cleanup = function() {
  del.sync([exports.INPUT_PATH, exports.OUTPUT_PATH])
  mkdirp.sync(exports.DIR)
}

exports.writeInputSync = function(contents) {
  fs.writeFileSync(exports.INPUT_PATH, contents, "utf-8")
}

exports.readOutputSync = function() {
  return fs.readFileSync(exports.OUTPUT_PATH, "utf-8")
}
