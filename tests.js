var index = require("./index.js")

if (index.name === "Jane") {
    console.log("The name is correct")
} else {
    console.log("Expected: Jane, Received: "+index.name)
}



if (parseInt(index.height) === 70) {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: "+index.height)
}
