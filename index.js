var name = "Susan";
var name2 = "Joe";
var height = "74"; //Joe
var height2 = "70" //Susan

if (name === "Susan"){
  console.log("The name is correct")
} else {
  console.log("Expected the name to be Susan")
}

if (name2 === "Joe"){
  console.log("The name is correct")
} else {
  console.log("name should be Joe")
}

// Changes relevant to the assignment

if (name === "Susan"){
  console.log("You have the name:"+ name)} 
else {
  console.log("Name is correct?")
}

if (name === "Susan"){
  console.log("Susan's height is:"+ height2)
} else {
  console.log("Expected Susan's height")}

if (name2 === "Joe"){
  console.log("You have the name:"+ name2)
} else {
  console.log ("Name is correct?")}
  
if (name2 === "Joe"){
  console.log("Joe's height is:"+ height)
} else {
  console.log("Expected Joe's height")}


// Don't worry about this
module.exports = { name, name2, height, height2
}

