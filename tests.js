var index = require("./index.js")

if (index.name === "Joe" + "Susan") {
    console.log("The names are correct")
} else {
    console.log("Expected: Susan, Received: "+index.name)
}



if (index.height === 70 + 74) {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: "+index.height)
}
