describe "[WithPlugin] WebPack/Babel with this plugin", ->
  it "will not reference a local helper", ->
    givenWebpackWith config.withPlugin
      .theOutputOf "class MyObject { }"
      .should.eventually.not.match /_classCallCheck/
  
  it "will declare the common helpers container", ->
    givenWebpackWith config.withPlugin
      .theOutputOf "class MyObject { }"
      .should.eventually.match /global\.babelHelpers = \{\}/

  it "will declare the common helper", ->
    givenWebpackWith config.withPlugin
      .theOutputOf "class MyObject { }"
      .should.eventually.match /babelHelpers\.classCallCheck = function \(/

  it "will use the common helper", ->
    givenWebpackWith config.withPlugin
      .theOutputOf "class MyObject { }"
      .should.eventually.match /babelHelpers\.classCallCheck\(this, MyObject\);/
