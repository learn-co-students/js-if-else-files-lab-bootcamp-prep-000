var index = require("./index.js")

if (index.name === "Susan") {
    console.log("The name is correct")
} else {
    console.log("Expected: Houssein, Received: " + index.name)
}



if (index.height === 78) {
    console.log("The height is correct")
} else {
    console.log("Expected: 78, Received: "+ index.height)
}
