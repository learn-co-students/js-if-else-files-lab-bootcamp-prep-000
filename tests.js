var index = require("./index.js")

if (index.name === "Susan") {
    console.log(index.name)
} else {
    console.log("Expected: Susan, Received: "+index.name)
}



if (index.height === 74) {
    console.log("and " +index.height)
} else {
    console.log("Expected: 70, Received: "+index.height)
}
