// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword () {
  var characterSelect = window.prompt("How many characters do you want in your password");
  if (characterSelect < 8 || characterSelect > 128) {
    window.prompt("Must pick a number between 8-128");
  } else {
    characterSelect = Math.random(Math.floor () * 9) + 120;
  }
  var upperCase = window.confirm("Click OK to confirm including lowercase letters");
  for (var i=0; i < upperCase.length; i++) {
    if (upperCase > 0) {
      upperCase = Math.random(Math.floor() *upperCase.length);

      return value;
    }
    else {
      upperCase = upperCase[i] * 0;
    }
  }
  var lowerCase = window.confirm("Click OK to confirm including uppercase letters");
  for (var i=0; i < lowerCase.length; i++) {
    if (lowerCase > 0) {
      lowerCase = Math.floor(Math.random() * lowerCase.length);

      return vlaue;
    }
    else {
      lowerCase = lowerCase[i] * 0;
    }
  }
  var numberInput = window.confirm("Click OK to confirm including numeric values");
  for (var i=0; i < numberInput.length; i++) {
    if (numberInput > 0) {
      numberInput = Math.floor(Math.random() * numberInput.length);

      return value;
    } else {
      numberInput = numberInput[i] * 0;
    }
  }
  var specialCase = window.confirm("Click OK to confirm including special charaters");
  for (var i=0; i < specialCase.length; i++) {
    if (specialCase > 0) {
      specialCase = Math.floor(Math.random() * specialCase.length);
      
      return value;
    }
    else {
      specialCase = specialCase[i] * 0;


    }
  }  
  
  characterSelect = Math.random(Math.floor() * 9) + 120;
  upperCase = ["A", "B", "C"];
  lowerCase = ["a", "b", "c"];
  numberInput = [5, 6, 7];
  specialCase = ["@", "$", "%"];

  
  var password = generatePassword(characterSelect, upperCase, lowerCase, numberInput, specialCase);
  var passwordText = document.querySelector("#password");  

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
