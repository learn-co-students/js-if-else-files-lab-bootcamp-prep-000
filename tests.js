var index = require("./index.js")

if (index.name === "Susan") {
    console.log("The name is correct")
    if (index.height === 70) {
        console.log("Both name and height is correct. ")
        console.log("Name: " +index.name)
        console.log("Height: " +index.height)
    } else {
        console.log("Expected: 70, Received: "+index.height)
    }
} else {
    console.log("Expected: Susan, Received: "+index.name)
}
