var numeric = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!@#$%^&*_?{[]}~><+;:.?";



// function to generate password
var generatePassword = function() {

  // Enter password length
  passwordLength();

  //Choose password criteria
  passwordCriteria();

  // check if at least one criteria is selcted
  checkCriteria();
  
};

//function to choose password length
var passwordLength = function() {
  var length = "";

  while (length === "" || length === null || length < 8 || length > 128) {
    length = prompt("Please enter a password length between 8 and 128 characters.");
  }
  console.log("Your password character length is " + length);
  return length;
};

// Function for password criteria
var passwordCriteria = function() {
  var userSlection = ""; 
  
  lowerCase =
  window.confirm("Would you like lowercase characters in your password?");

  //Choose uppercase
  upperCase =
  window.confirm("Would you like uppercase characters in your password?");
  

  //Choose numeric
  numeric =
  window.confirm("Would you like numeric characters in your password?");

  //choose special characters
  specialChar =
  window.confirm("Would you like special characters in your password?");
};

var checkCriteria = function() {
  if (
    lowerCase === true ||
    upperCase === true ||
    numeric === true ||
    specialChar === true 
  ){
    randomCriteria();
  }
  else {
    window.alert("At least one character type should be selected. Please try again.");
    passwordCriteria();
  }
};



  
 


/* Generate Password*/
generatePassword();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
