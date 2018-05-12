var name = "Joe"
var height = "74"


if (name === "Susan") { console.log("The name appears correct");
} else {
  console.log("Expected the name \"Susan\"");
  name = "Susan";
  height = 70;
}

// Don't worry about this
module.exports = { name, height
}

