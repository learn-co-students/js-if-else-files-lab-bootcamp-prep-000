var index = require("./index.js")

if (index.name === "Susan") {
    console.log("The name is correct")
} else {
    console.log("Expected: Susan, Received: "+index.name)
}



if (index.height === 71) {
    console.log("The height is correct")
} else {
    console.log("Expected: 71, Received: "+index.height)
}
