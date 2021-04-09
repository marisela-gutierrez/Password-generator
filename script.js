var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!","@",":","#","$","%","^","&","*","_","?","?"];
var password = [];
var useChar = [];



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
   
  lowerCaseChar =
  window.confirm("Would you like lowercase characters in your password?");
  if (lowerCaseChar) {
    useChar = useChar.concat(lowerCase);
  }

  //Choose uppercase
  upperCaseChar =
  window.confirm("Would you like uppercase characters in your password?");
  if (upperCaseChar) {
    useChar = useChar.concat(upperCase);
  }
  
  //Choose numeric
  numericChar =
  window.confirm("Would you like numeric characters in your password?");
  if (numericChar) {
    useChar = useChar.concat(numeric);
  }

  //choose special characters
  specialCharr =
  window.confirm("Would you like special characters in your password?");
  if (specialCharr) {
    useChar = useChar.concat(specialChar);
  }

};

var checkCriteria = function() {
  if (
    lowerCaseChar === true ||
    upperCaseChar === true ||
    numericChar === true ||
    specialCharr === true 
  ){
    randomPassword();
  }
  else {
    window.alert("At least one character type should be selected. Please try again.");
    passwordCriteria();
  }
};

var randomPassword = function() {
 return passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)];
  
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
