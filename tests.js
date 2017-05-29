var index = require("./index.js")
console.log(index.name)

var name = "Jane"
var height = "74"

if (height === "74") {
  console.log("The height is correct")
}
else {
  console.log("70")
}

if (name === "Jane") {
    console.log("The name is correct")
}
else {
  console.log("Expected: Joe, Received: Jane")
}
