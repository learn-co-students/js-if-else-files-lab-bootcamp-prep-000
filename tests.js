var index = require("./index.js")

if (index.name === "Susan") {
    console.log("The name is correct")
} else {
    console.log("Expected: Susan, Received: "+index.name)
}



if (index.height === 60) {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: "+index.height)
}
