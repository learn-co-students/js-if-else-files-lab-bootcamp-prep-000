var index = require("./index.js")

if (index.name === "Jane") {
    console.log("name")
} else {
    console.log("Expected: Jane, Received: "+index.name)
}



if (index.height === "70") {
    console.log("height")
} else {
    console.log("Expected: 70, Received: "+index.height)
}
