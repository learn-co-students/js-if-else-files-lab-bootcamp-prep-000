var name = "Joe";
var height = "74";

// Don't worry about this
if (name != "" && height != "") {
    module.exports = { name, height };
    console.log("Sending a name and height");
} else {
    console.log("No data is being exported from index.js");
}
