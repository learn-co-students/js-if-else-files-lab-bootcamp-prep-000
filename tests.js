var index = require("./index.js")
index.name = "Susan"
index.height = 70
// The two previous lines seem like a copout...Im going to review some preious lessons as I believe that they covered how to change a variable in another file from ones current file by referenceing it in a particular way.
if (index.name === "Susan") {
    console.log("The name is correct")
} else {
    console.log("Expected: Susan, Received: "+index.name)
}



if (index.height === 70) {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: "+index.height)
}
