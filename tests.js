var index = require("./index.js")

if (index.name === "Susan") {
  console.log ("Expected: Susan, Received: "+index.name)
} else {
  console.log ("The name is incorrect")
}

if (index.height === "70") {
    console.log ("Expected:70, Received: "+index.height)
} else {
    console.log ("The height is incorrect")
}
