var index = require("./index.js")

if (index.name1 === "Susan") {
    console.log("The name is correct")
} else {
    console.log("Expected: Susan, Received: "+index.name1)
}



if (index.height === "70") {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: "+index.height)
}
