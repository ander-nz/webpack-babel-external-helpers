describe "WebPack+Babel - by default -", ->
  it "will declare a local helper", ->
    webpack_pluginless "class MyObject { }"
    .should.eventually.match /function _classCallCheck\(/

  it "will invoke a local helper", ->
    webpack_pluginless "class MyObject { }"
    .should.eventually.match /_classCallCheck\(this, MyObject\);/
