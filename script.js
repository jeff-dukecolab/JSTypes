function checkDataType(variable) {

  var theType = typeof(variable);
  
  var displayDiv = document.getElementById('dataType');
  
  displayDiv.innerHTML = variable + " is a " + theType;
  
}

// Variables can be set to different types

var string = 'hi there!';

var number = 2;

console.log("initial type of string: ", typeof(string));

string = string + number;

console.log("adding them together: ", string);

string = 1;

console.log("new type of string: ", typeof(string));

string = string + number;

console.log("adding them together: ", string);