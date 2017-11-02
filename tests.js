var index = require("./index.js")

if (index.name === "Hello") {
    console.log("Susan"+index.height)
} else {
    console.log("Expected: Susan, Received: "+index.name)
}



if (index.height === 70) {
    console.log("The height is correct")
} else {
    console.log("Joe"+index.height)
}
