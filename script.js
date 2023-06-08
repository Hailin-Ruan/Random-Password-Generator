var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "/", "~", "-", "+", "=", "[", "]", "{", "}", ";", ":", "<", ">", "|"];

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength;
  while (true) {
    var passwordLength = parseInt(prompt("Enter the desired length for your password (between 8 and 128)"));

    if (passwordLength >= 8 && passwordLength <= 128 && !isNaN(passwordLength)) {
      break;
    }
    window.alert("Please enter length between 8 and 128");
  }
  var lowercaseBoolean = confirm("Would you like lowercase letters in your password?");
  var uppercaseBoolean = confirm("Would you like uppercase letters in your password?");
  var numericBoolean = confirm("Would you like numbers in your password?");
  var specialCharactersBoolean = confirm("Would you like special characters in your password?");

  var chosenCharacters = [];

  if (lowercaseBoolean) {
    chosenCharacters = chosenCharacters.concat(lowercaseLetters);
  }
  if (uppercaseBoolean) {
    chosenCharacters = chosenCharacters.concat(uppercaseLetters);
  }
  if (numericBoolean) {
    chosenCharacters = chosenCharacters.concat(numeric);
  }
  if (specialCharactersBoolean) {
    chosenCharacters = chosenCharacters.concat(specialCharacters);
  }
  if (chosenCharacters.length === 0) {
    window.alert("Please select at least one character type");
    return "";
  }

  var password = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * chosenCharacters.length);
    password = password.concat(chosenCharacters[randomIndex]);
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  if (password === "") {
    passwordText.textContent = "No password generated, try again";
  } else {
    passwordText.textContent = password;
  }
}

generateBtn.addEventListener("click", writePassword);