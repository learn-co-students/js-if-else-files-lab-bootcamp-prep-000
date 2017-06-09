var index = require("./index.js")

if (index.name === "Susan") {
    console.log("My name is " +index.name)
} else {
    console.log("Expected: Jane, Received: "+index.name)
}



if (index.height === "74") {
    console.log("My height is "+ index.height)
} else {
    console.log("Expected: 70, Received: "+index.height)
}
