// **Hi! This code still have issues. "Susan" keeps appearing
// at the bottom :) Submitted it but still going back to check
// this code soon

var index = require("./tests.js")
var name = "Susan"
var height = 70
 
// Don't worry about this
module.exports = { name, height
}

if (name === "Susan") {
    console.log("The name is correct")
} else {
    console.log("Expected: Susan, Received: "+height)
}



if (height === 70) {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: "+height)
}