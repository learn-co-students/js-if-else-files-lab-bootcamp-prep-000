var name = "Joe"
var height = "74"

//Modified variables
name = "Susan";
height = parseInt("70");

function ifElseDemo() {
  if (name === "Susan") {
    console.log("The name is correct")
} else {
    console.log("Expected the name to be Susan")
}
}

ifElseDemo();

// Don't worry about this
module.exports = { name, height
}
