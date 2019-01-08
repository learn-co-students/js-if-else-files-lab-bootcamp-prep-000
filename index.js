var name = "Joe"
var height = "74"


// Don't worry about this
module.exports = { name, height
}

if (name === "Jane") {
    console.log("The name is correct")
}else {
    console.log("Expected: Jane, Received: "+name)
}

if (height === "70") {
    console.log("The name is correct")
}else {
    console.log("Expected: 70, Received: "+height)
}
