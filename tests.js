var index = require("./index.js") //'link' to another file.  loads the file into variable 'index'

if (index.name === "Jane") {
    console.log("The name is correct")
} else {
    console.log("Expected: Jane, Received: "+index.name)
}



if (index.height === 70) {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: "+index.height)
}
