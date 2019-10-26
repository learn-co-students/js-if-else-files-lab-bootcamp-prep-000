var name = "Joe"
var height = "74"


// Don't worry about this
module.exports = { name, height
}

var index = require('./index.js')

console.log(index.name)
