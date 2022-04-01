// Assignment Code
var generateBtn = document.querySelector("#generate");


// Array of lowercase letters
var lowerCase= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var lowerCaseSplit = lowerCase.split("");
// Array of UPPERCASE letters
var passUppCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var passUppCaseSplit = passUppCase.split("");
// Array of Numbers
var passNumCase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var passNumCaseSplit = passNumCase.split("");
// Array of Symbols
var passSymCase =["?","!","<",">","=","@","%","$", ")","_","&","#"]
var passSymCaseSplit = passSymCase.split("");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passRandom = []
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  
  var passCharacters = prompt("How many characters your password will have? (Minimum 8 characters).")
  
  if (passCharacters < 8) {
      alert("Your password must be minimum of 8 characters.");
      return "Your new password will appear here";
    } else if (passCharacters > 128) {
      alert("Oh, I forgot! Your password must not exceed the 128 characters.");  
      return "Your new password will appear here"; 
  
  }  else if (passCharacters === null){
        return "Your new password will appear here";
  }    

   var passLower = confirm("Do you want to add lowerCase letters?")
      if(passLower===true){
          for (var i =0; i < passLowCase.length; i++)
        passRandom.push(passLowCase(i))
        
      }


 
 
 
 
 
 
 
  }


