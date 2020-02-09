var index = require("./index.js")

if (index.name === "Joe") {
    console.log("The name is correct")
} else if ("Joe === Susan") {
    console.log("Expected: Susan, Received: "+index.name)
}

if (index.height === "74") {
    console.log("The height is correct")
} else if ("74 === 70") {
    console.log("Expected: 70, Received: "+index.height)
}
