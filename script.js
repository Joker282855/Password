// Assignment Code
var generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword (passwordText) {
  var characterSelect = window.prompt("How many characters do you want in your password");
  if (characterSelect < 8 || characterSelect > 128) {
    window.prompt("Must pick a number between 8-128");
    writePassword();
  } else if (characterSelect > 8 || characterSelect < 128) {
    window.alert("you will be asked if you want numbers, lowercase letters, uppercase letters or special characters in your password next");
  } else {
    characterSelect = characterSelect.value
  }
  var upperCase = window.prompt('Would you like to have uppercase letters in your password? Enter "OK" if you do or enter "Cancel" if you dont');
  if (upperCase === "OK" || upperCase === "ok") {
    upperCase = "SDFHGEISOKDHEOLE";
  } else if( upperCase === "Cancel" || upperCase === "cancel") {
    upperCase = "12345679890329";
  } else {
    upperCase = "45689240678";
  }
  var lowerCase = window.prompt('Would you like to have lowercase letters in your password? Enter "OK if you do or enter "Cancel if you dont');
  if (lowerCase === "OK" || lowerCase === "ok") {
    lowerCase = "thyuadksiorlsenl";  
  } else if (lowerCase === "Cancel" || lowerCase === "cancel") {
    lowerCase = "ADKWODISNWK";
  } else {
    lowerCase = "##^%&%$@#%^";
  }
  var numberInput = window.prompt('Would you like to have numbers in your password? Enter "OK" if you do or enter "Cancel" if you dont');
  if (numberInput === "OK" || numberInput === "ok") {
    numberInput = "236758490657";
  } else if (numberInput === "Cancel" || numberInput === "cancel") {
    numberInput = "GHRTYUISJGIER";
  } else {
    numberInput = "CBSLIFJWOEITJHOW";
  }
  var specialCase = window.prompt('Would you like to have special characters in your password? Enter "OK" if you do or enter "Cancel" if you dont');
  if (specialCase === "OK" || specialCase === "ok") {
    specialCase = "#$@^%&*$*!@#$";
  } else if (specialCase === "Cancel" || specialCase === "cancel") {
    specialCase = "WEHXISKWLEDHS";  
  } else {
    specialCase = "wdiwosheild";
  }
  passwordAlert = window.alert( " Your passwrod is " + upperCase + lowerCase + numberInput + specialCase);

  var password = generatePassword();
  var passwordText = document.querySelector("#password");  

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
