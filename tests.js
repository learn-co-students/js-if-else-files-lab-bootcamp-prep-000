var index = require("./index.js")

if (index.name === "Jane") {
    console.log("The name is correct")
} else if (index.name === "Susan") {
  console.log("Name: " + index.name + "     " + "Height: " + index.height)
}

else {
    console.log("you did not get the name and height")
}



if (index.height === 70) {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: "+index.height)
}
