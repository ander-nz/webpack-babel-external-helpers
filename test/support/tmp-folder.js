const fs = require("fs")
const path = require("path")
const del = require("del")
const mkdirp = require("mkdirp")

const TMP_FOLDER = path.join(__dirname, "../../tmp")

function cleanup() {
  mkdirp.sync(`${TMP_FOLDER}`)
  del.sync(`${TMP_FOLDER}/*`)
}

function TempFile(name) {
  this.path = `${TMP_FOLDER}/${name}`
  this.write = str => fs.writeFileSync(this.path, str, "utf-8")
  this.read = () => fs.readFileSync(this.path, "utf-8")
}

exports.path = TMP_FOLDER
exports.inputjs = new TempFile("input.js")
exports.outputjs = new TempFile("output.js")
exports.cleanup = cleanup
