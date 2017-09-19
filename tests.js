var index = require("./index.js")

var name = "Suzan"
var height = "74"

if (index.name === name) {
    console.log("The name is correct")
} else {
    console.log("Expected: Susan, Received: " + index.name)
}



if (index.height === height) {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: " + index.height)
}

module.exports = { name, height
}
