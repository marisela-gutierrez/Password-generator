// Assignment code here

// function to generate password
var generatePassword = function() {
  // Enter password length
  passwordLength();

  //Choose lowercase
  confirmLowerCase();

  //Choose uppercase
  confirmUpperCase();

  //Choose numeric
  confirmNumeric();

  //choose special characters
  confirmSpecialChar();

};


//function to choose password length
var passwordLength = function() {
  var length = "";

  while (length === "" || length === null) {
    length = prompt("Please enter a password length between 8 and 128 characters.");
  }
  console.log("Your password character length is " + length);
  return length;
};

// Function for Lower Case alpha
var confirmLowerCase = function() {
  window.confirm("Would you like lowercase characters in your password?");
  // if yes (true)
  if (confirmLowerCase) {
   
    return true;
  }
}; 

// function for uppercase
var confirmUpperCase = function() {
  window.confirm("Would you like uppercase characters in your password?")
}

// function for numeric
var confirmNumeric = function() {
  window.confirm("Would you like numeric characters in your password?")
}

// function for special characters
var confirmSpecialChar = function() {
  window.confirm("Would you like special characters in your password?")
}




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
