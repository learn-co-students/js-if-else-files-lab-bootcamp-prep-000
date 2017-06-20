var index = require("./index.js")
var name = "Joe"
var height = "74"
//console.log("test");

// Don't worry about this
module.exports = { name, height
}



if (index.name === "Jane") {
    console.log("The name is correct")
} else {
    console.log("Expected: Jane, Received: "+name)
}



if (index.height === 70) {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: "+height)
}
