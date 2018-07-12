var index = require("./index.js")

//Name
if (index.name === "Susan") {
    console.log("The name is correct")
} else {
    console.log("Expected: Susan, Received:Joe")
}

// Height
if (index.height === "70") {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: 74")
}
