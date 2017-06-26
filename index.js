var name = "Joe"
var height = "74"

if (name === "Jane") {
  console.log("Expected: Jane");
} else {
  console.log("Received: Joe");
}

if (height === 70) {
  console.log("Expected: 70");
} else {
  console.log("Received: 74");
}

// Don't worry about this
module.exports = { name, height
}
