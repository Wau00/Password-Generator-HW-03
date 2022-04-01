// Assignment Code
var generateBtn = document.querySelector("#generate");


// Array of lowercase letters
passLowCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Array of UPPERCASE letters
passUppCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Array of Numbers
passNumCase: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// Array of Symbols
passSymCase: ["?","!","<",">","=","@","%","$", ")","_","&","#"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  
  var passLength = prompt("How many characters your password will have? (Minimum 8 characters).")
  if (passLength < 8) {
    alert("Your password must be minimum of 8 characters.");
  } else if (passLength > 128) {
    alert("Oh, I forgot! Your password must not exceed the 128 characters.");   
   }  else {
        return "Your new password will appear here";
  }    
 
 
 
 
 
 
 
  }


