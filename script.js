// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword (passwordText) {
  var characterSelect = window.prompt("How many characters do you want in your password");
  if (characterSelect < 8 || characterSelect > 128) {
    window.prompt("Must pick a number between 8-128");
    writePassword();
  } else {
    characterSelect = Math.random(Math.floor () * 9) + 120;
  }
  var upperCase = window.confirm("Click OK to confirm including lowercase letters");
  if (upperCase === "OK") {
    upperCase = "SDFHGEISOKDHEOLE";
  } 
    else {
    upperCase = "12345679890329";
  }
  var lowerCase = window.confirm("Click OK to confirm including uppercase letters");
  if (lowerCase === "OK") {
    lowerCase = "thyuadksiorlsenl";  
  }
    else {
    lowerCase = "@$#%^&@!**";
  }
  var numberInput = window.confirm("Click OK to confirm including numeric values");
  if (numberInput === "OK") {
    numberInput = "236758490657";
  } else {
    numberInput = "GHRTYUISJGIER";
  }
  var specialCase = window.confirm("Click OK to confirm including special charaters");
  if (specialCase === "OK") {
    specialCase = "#$@^%&*$*!@#$";  
  }
    else {
    specialCase = "thesdfwr";  
  }

  passwordAlert = window.alert( " Your passwrod is " + upperCase + lowerCase + numberInput + specialCase);
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");  

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
