var index = require("./index.js");
 
var index_Name = index.name;
var index_Height = index.height;


if (index_Name === "Susan") {
    console.log("The name is correct");
} else {
    console.log("Expected: Susan, Received: "+ index_Name);
}



if (parseInt(index_Height) === 70) {
    console.log("The height is correct");
} else {
    console.log("Expected: 70, Received: "+ index_Height);
}
