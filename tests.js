var index = require("./index.js")

if (index.name === "Susan") {
    console.log("The name is correct")
} else {
    console.log("Expected the name to be: Susan, Received: "+ index.name)
}


if (index.height === "70") {
    console.log("The height is correct")
} else {
    console.log("Expected the height to be: 70, Received: "+ index.height)
}
