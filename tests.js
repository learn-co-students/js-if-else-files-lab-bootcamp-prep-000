/*
YOUR TURN
You now know how multiple files interact as well as how if statements work.
 Now you have to write your code to match some specific tests.
 Open up tests.js and you will see two if statements.
 Let's give this a run to start things off by typing nodejs tests.js.
 You should get two messages:
Expected: Susan, Received: Joe
Expected: 70, Received: 74
Now it's your job to modify index.js so that when you run tests.js it says you got both height and name.
One note: Capitalization matters and String vs. Numbers matter. Numbers don't have any quotes around them,
 Strings do have quotes around them!
*/

var index = require("./index.js")

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
