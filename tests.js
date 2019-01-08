var index = require("./index.js")

if (index.names === "Susan") {
    console.log("The name is correct")
} else {
    console.log("Expected: Susan, Received: "+index.names)
}



if (index.height === 70) {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: "+index.height)
}
