var name = "Joe";
var height = "73";


// Don't worry about this
module.exports = { name, height
};

if (name === "Susan") {
    console.log("The name is correct")
}  else {
      console.log("NOT SUSAN - Expected the name to be Susan")
}


if (height === "74") {
    console.log("Height is correct")
}  else {
      console.log("Height NOT 74 - Expected the height to be 74")
}
