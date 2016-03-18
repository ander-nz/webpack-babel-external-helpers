describe "WebPack+Babel - using this plugin -", ->
  it "will not reference a local helper", ->
    webpack_with_plugin "class MyObject { }"
    .should.eventually.not.match /_classCallCheck/
  
  it "will declare the common helpers container", ->
    webpack_with_plugin "class MyObject { }"
    .should.eventually.match /global\.babelHelpers = \{\}/

  it "will declare the common helper", ->
    webpack_with_plugin "class MyObject { }"
    .should.eventually.match /babelHelpers\.classCallCheck = function \(/

  it "will use the common helper", ->
    webpack_with_plugin "class MyObject { }"
    .should.eventually.match /babelHelpers\.classCallCheck\(this, MyObject\);/
