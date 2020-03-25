// Special characters for the function created
const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById('generateBtn');
generateButton.addEventListener('click', writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Prompts that come up after you click generate password
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for you new password. It must at least 8 and at most 128 characters.");
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Length must be 8-128 characters. How many characters would you like your password to be?");
  }
  var numbers = confirm("Do you want numbers in your password?");
  var lowerCases = confirm("Do you want lowercases in your password?");
  var upperCases = confirm("Do you want uppercases in your password?");
  var special = confirm("Do you want special characters in your password?");

// this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  var minimumCount = 0;


// Empty minimums for numbers, lowerCases, upperCases & specialCharacters

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";


// Functions
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};

// Check if user selected OK for each and uses empty minimums

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;
  }
  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;
  }
  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;
  }
  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;
  }
// empty string variable "randomPasswordGenerated" for the for loop getting random characters
  var randomPasswordGenerated = "";
  // for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    for (let i = 0; i < (parseInt(passwordLength)); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);
    randomPasswordGenerated += randomNumberPicked;
  }
// to make sure characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;
  return randomPasswordGenerated;
}