var index = require("./index.js")

console.log(index.name)

if (index.name === "Susan"){
  console.log("The name is correct")
} else {
  console.log("Expected: Susan, Recieved: " + index.name)
}

if (index.height === "70"){
  console.log("The height is correct")
} else {
  console.log("Expected: 70, Recieved: " + index.height)
}