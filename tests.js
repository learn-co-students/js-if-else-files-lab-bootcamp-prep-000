var index = require("./index.js")

if (index.name === "Renso") {
    console.log("The name is correct")
} else {
    console.log("Expected: Renso, Received: "+index.name)
}



if (index.height === 66) {
    console.log("The height is correct")
} else {
    console.log("Expected: 66, Received: "+index.height)
}
