var index = require("./index.js")
index.height = parseInt(index.height)
if (index.name === "Susan") {
    console.log("The name is correct")
} else {
    console.log("Expected: Susan, Received: "+index.name)
}



if (index.height === 70) {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: "+index.height)
}
