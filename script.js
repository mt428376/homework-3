console.log("hello");
var generateBtn = document.querySelector("#generate");
var combineArray =[];
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
  "P",];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  var specialCharacters = ["-", "=", ";", ":", "/"];
var userLength;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// making up  the password
function generatePassword() {
  var userLength = prompt(" password length between 8 and 128");
  if (userLength < 8 || userLength > 128);
  {
    alert(" Please enter number between 8 and 128");
  }
  
  

 

  var lowerCasev = confirm("Would you like lower case letters?");
  if (lowerCasev === true) {
    combineArray.push(lowerCase);
console.log();
    }
  
  

  var upperCasev = confirm(" Would you like lower upper letters?");
  if (upperCasev === true) {
   combineArray.push(upperCase);
   
  }
  var numbersv = confirm("Would you like numbers?");
  if (numbersv === true) {
    combineArray.push(numbers);

   
  }
  var specialCharactersv = confirm("Would you like special characters?");
  if (specialCharactersv === true) {
    combineArray.push(specialCharacters);
    console.log(combineArray);
     
  }

  
var random = Math.floor(Math.random() *combineArray.length); 
  var randomCharacter = Math.floor(Math.random() *combineArray[random].length);

  
for (var i = 0; i < userLength; i++) {
  console.log(i);
    password = password + combineArray[random][randomCharacter];
  }
  return password;
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
