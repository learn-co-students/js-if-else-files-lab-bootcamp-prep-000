var index = require("./index.js")

var header= ("name")
if (index.name === "Susan") {
    console.log("The name is correct")
} else {
    console.log("Expected: Susan, Received:Joe "+index.name)
}


var header= ("Height")
if (index.height === 70) {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received:"+index.height)
}
