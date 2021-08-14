// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperalpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var loweralpha =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", 
".", "/", ":", ";", "<", "=", ">", "?", "@", "`", "^", "_", "|", "~", "{", "}"];
// Write password to the #password input
//function passwordinput() {
  var passwordLength 
  var chooseLower 
  var chooseUpper 
  var chooseNumbers 
  var chooseSpecial 

function passwordOption() {
  passwordLength = prompt("Choose a password length between 8 and 128 characters");
 if (passwordLength >= 8 && passwordLength <= 128) {
  chooseLower = confirm("Would you like the password to contain lowercase letters?");
  chooseUpper = confirm("Would you like the password to contain uppercase letters?");
  chooseNumbers = confirm("Would you like the password to contain numbers?");
  chooseSpecial = confirm("Would you like the password to contain special characters?");
    if (chooseLower || chooseUpper || chooseNumbers || chooseSpecial) {
      generatePassword();
    } else {
      alert("Please select at least one criteria to generate password!");
    }
  } else {
      alert("Password length must be between 8 to 128!");
  }
}
function generatePassword() {
    var password ="";
    var passwordArray = [];
    if (chooseLower == true) {
      password += loweralpha[getRandomInt(loweralpha.length)];
      passwordArray = passwordArray.concat(loweralpha);
    }
  
    if (chooseUpper == true) {
      password += upperalpha[getRandomInt(upperalpha.length)];
      passwordArray = passwordArray.concat(upperalpha);
    }
  
    if (chooseNumbers == true) {
      password += numbers[getRandomInt(numbers.length)];
      passwordArray = passwordArray.concat(numbers);
    }
  
    if (chooseSpecial == true) {
      var randomIndex = getRandomInt(symbols.length);
      password += symbols[randomIndex];
      passwordArray = passwordArray.concat(symbols);
    }   
  }
  var currentLength = password.length;
  var i;

  for (i = currentLength; i < passwordLength; i++) {
    password += passwordArray[getRandomInt(passwordArray.length)];
  }
  var passwordText = document.querySelector("#password");
  passwordText.value =password;

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  // Write password to the #password input
   
function writePassword() {
   passwordOption();
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
