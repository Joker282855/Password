// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword () {
  window.prompt("How many charaters would you like your password to contain");
  window.confirm("Click Ok to confirm including uppercase letters");
  window.confirm("Click OK to confirm including lowercase letters");
  window.confirm("Click Ok to confirm including numeric values");
  window.confirm("Click OK to confirm including special charaters");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

