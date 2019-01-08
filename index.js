var index = require("./tests.js")

var name = "Susan"
var height = 70

// Don't worry about this
module.exports = { name, height,
}

if (name === "Susan") {
  console.log("Hey, Susan!")
}
else {
  console.log("Sorry, I was expecting Susan...")
}
