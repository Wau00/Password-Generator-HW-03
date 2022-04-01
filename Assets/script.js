// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of lowercase letters
var lowerCase="abcdefghijklmnopqrstuvwxyz";
var lowerCaseSplit = lowerCase.split("");
// Array of UPPERCASE letters
var passUppCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passUppCaseSplit = passUppCase.split("");
// Array of Numbers
var passNumCase = "0123456789";
var passNumCaseSplit = passNumCase.split("");
// Array of Symbols
var passSymCase ="!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var passSymCaseSplit = passSymCase.split("");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passRandom = [];
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
  var passLower = confirm("Do you want to add lowerCase letters?");
  if(passLower===true) {
   for (var i =0; i < passNumCaseSplit.length; i++) {
 passRandom.push(passLowCaseSplit[i]);
   }
 }
  var passUpper = confirm("Do you want to add UpperCase letters?");
  if (passUpper === true) {
    for (var i=0; i < passUppCaseSplit.length; i++){
      passRandom.push(passUppCaseSplit[i]);
    }
  }

 
 
 
}
 
 
 
  


