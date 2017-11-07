var name = "Susan"
var height = "74"


// Don't worry about this
module.exports = { name, height
}
var index = require("./index.js")

if (index.name === "Susan") {
    console.log("The name is correct")
} else {
    console.log("Expected: Susan, Received: "+index.name)
}



if (index.height === 74) {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: "+index.height)
}
