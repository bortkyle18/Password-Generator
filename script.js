// Assignment Code
var generateBtn = document.querySelector("#generate");

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);
  return value;
}

// Write password to the #password input
var writePassword = function () {
  var password = '';
  var passwordText = document.querySelector("#password");

  var passwordLength = window.prompt("How many characters would you like your password to contain?");
  var passwordGen = '';

  if (passwordLength >= 8 && passwordLength <= 128) {
    var specialCharacters = window.confirm ("Click OK to confirm including special characters.");
    if (specialCharacters) {
      var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      var passwordGen = passwordGen + specialCharacters;
    } else { var passwordGen = passwordGen;}

    var numericCharacters = window.confirm ("Click OK to confirm including numeric characters.");
    if (numericCharacters) {
      var numericCharacters = "1234567890";
      var passwordGen = passwordGen + numericCharacters;
    } else { var passwordGen = passwordGen;}

    var lowerCaseCharacters = window.confirm ("Click OK to confirm including lowercase characters.");
    if (lowerCaseCharacters) {
      var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
      var passwordGen = passwordGen + lowerCaseCharacters;
    } else { var passwordGen = passwordGen;}

    var upperCaseCharacters = window.confirm ("Click OK to confirm including uppercase characters.");
    if (upperCaseCharacters) {
      var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var passwordGen = passwordGen + upperCaseCharacters;
    } else { var passwordGen = passwordGen;}
  } else {
    window.alert ("Invalid response, please try again.");
    writePassword();
  }

  for (var i=0; i <= passwordLength - 1; i++) {
    password = password + passwordGen[randomNumber(0, passwordGen.length)];
  }

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
