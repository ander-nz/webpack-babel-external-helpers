describe "[Pluginless] WebPack/Babel by default", ->
  it "will declare a local helper", ->
    givenWebpackWith config.pluginless
      .theOutputOf "class MyObject { }"
      .should.eventually.match /function _classCallCheck\(/

  it "will invoke a local helper", ->
    givenWebpackWith config.pluginless
      .theOutputOf "class MyObject { }"
      .should.eventually.match /_classCallCheck\(this, MyObject\);/
