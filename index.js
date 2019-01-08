var name = "Susan"
var height = "74"
if (name === "Susan") {
    console.log("The name is correct")
} else {
    console.log("Expected the name to be Susan")
}

// Don't worry about this
module.exports = { name, height
}
var tests  = require("./tests.js")

if (tests.name === "Susan") {
    console.log("The name is correct")
} else {
    console.log("Expected: Susan, Received: "+tests.name)
}



if (tests.height === 70) {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: "+tests.height)
}
