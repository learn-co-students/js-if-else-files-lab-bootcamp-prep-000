var index = require("./index.js")


if (index.name === "Susan") {
    console.log("The name is correct, isn't it?")
} else {
//    console.log("Expected: Susan, Received: "+index.name)
    console.log('que pasa, ' + index.name)
}



if (index.height === 94) {
    console.log("The height is correct")
} else {
    console.log("HEIGHT:  Expected: 94, Received: "+index.height)
}
