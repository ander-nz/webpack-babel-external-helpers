// setup unit-testing framework
const chai = require("chai")
const chaiAsPromised = require("chai-as-promised")
chai.should()
chai.use(chaiAsPromised)

// setup other helpers
require("./helpers")
