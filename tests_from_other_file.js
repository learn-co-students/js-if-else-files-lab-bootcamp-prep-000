var index = require("./index.js")

if (index.name === "Susan") {
  console.log("The name "+index.name+" is correct")
} else {
  name = "Susan";
  console.log("Expected " +name+ "; Received the name "+index.name+" instead.")
}

if (index.height === 70) {
  console.log("The correct height of "+index.height+" was returned.")
} else {
  height = 70;
  console.log("Expected a height of "+height+", instead a height of "+index.height+" was returned.")
}
