var name = "Joe"
var height = "70"

module.exports = { name, height
}

if (name ==="Joe") {
    console.log("The name is correct")
} else {
    console.log("Expected the name to be Susan")
}

var index = require("./index.js")

if (index.name === "Joe") {
    console.log("The name is correct")
} else {
    console.log("Expected: Susan, Received: "+index.name)
}



if (index.height === "70") {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: "+index.height)
}