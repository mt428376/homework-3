console.log("hello");
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// making up  the password
function generatePassword() {
  var userLength = prompt(" password length between 8 and 128");
  if (userLength < 8 || userLength > 128);
  {
    alert(" Please enter number between 8 and 128");
  }
  var lowerCase = confirm("Would you like lower case letters? ");

  var upperCase = confirm(" Would you like lower upper letters?");

  var numbers = confirm("Would you like numbers?");

  var specialCharacters = "Would you like special characters?";

  if (wantlowerCase === true) {
    userCharacterSelections.push(...lowerCase)
  }
  if (wantUpperCase === true) {
    userCharacterSelections.push(...upperCase);
  }
  if (wantnumbers === true) {
    userCharacterSelections.push(...numbers);
  }
  if (wantspecialCharacters === true) {
    userCharacterSelections.push(...specialCharacters);
  }

  var lowerCase = [
    "a",
    "q",
    "e",
    ",r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "s",
    "d",
    "f",
    "g",
    "h",
    "l",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];
  var upperCase = [
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
  ];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  var specialCharacters = ["-", "=", ";", ":", "/"];

  var randomCharacter = Math.floor(
    Math.random() * userCharacterSelections.length
  );

  var password = "";

  for (var i = 0; i < numOfCharacters; i++) {
    var randomCharacter = Math.floor(
      Math.random() * userCharacterSelections.length
    );
    password += userCharacterSelections[randomCharacter];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
