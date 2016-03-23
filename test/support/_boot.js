// setup unit-testing framework
{
  const chai = require("chai")
  const chaiAsPromised = require("chai-as-promised")
  chai.should()
  chai.use(chaiAsPromised)
}

// setup config variants
{
  global.config = require("./config-variants")
}

// setup webpack BDD syntax
{
  const clone = require("clone")
  const tmp = require("./tmp-folder")
  const webpackAsPromised = require("./webpack-as-promised")
  
  function runWebpackCore(config, inputjsSrc) {
    config = clone(config)
    
    tmp.cleanup()
    tmp.inputjs.write(inputjsSrc)

    return webpackAsPromised(config)
      .then(tmp.outputjs.read)
  }
  
  global.givenWebpackWith = function(config) {
    return {
      theOutputOf: runWebpackCore.bind(null, config)
    }
  }
}
