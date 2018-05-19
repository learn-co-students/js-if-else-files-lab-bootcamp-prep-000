//console.log(name)

/*
the require() function gives access or includes a module
this loads the index.js file and stores its contents inside of the index variable
within other_file.js
*/
var index = require("./index.js")

/*
we refer to the name property of the index variable
*/
console.log(index.name)