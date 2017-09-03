var name = "Joe"
var height = "74"

if (name === "Susan") {
  console.log("The name is correct!")
} else {
  console.log("Expected the name to be Susan, Received: " +name)
}

if (height === "70") {
  console.log("The height is correct!")
} else {
  console.log("Expected the height to be 70, Received:" +height)
}

// Don't worry about this
module.exports = { name, height
}
