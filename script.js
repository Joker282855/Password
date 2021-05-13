// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterSelect = document.querySelector("password");
var upperCase = document.querySelector("password");
var lowerCase = docmunet.querySelector("password");
var specialCase = document.querySelector("password");

// Write password to the #password input
function writePassword () {
  window.prompt("How many characters would you like your password to contain");
  window.confirm("Click OK to confirm including lowercase letters");
  window.confirm("Click Ok to confirm including numeric values");
  window.confirm("Click OK to confirm including special charaters");
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
