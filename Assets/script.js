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
var passSymCase ="!#$%&)*+{}-./:;<=>?@^[]^_`{|}~";
var passSymCaseSplit = passSymCase.split("");

// Password Requirements (Prompts / Confirms )
var manyCharacters = "How many characters your password will have? (Minimum 8 characters)."
var placeholder= "Your new password will appear here."
var wantLowerCase = "Do you want to add lower case letters?"
var wantUpperCase = "Do you want to add upper case letters?"
var wantNumbers = "Do you want to add numbers?"
var wantSymbols = "Do you want to add special characters?"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  
  var passwordValue = [];
  var randomPass = "";
  var passCharacters = prompt(manyCharacters);
  
  // First Requirement, Total Lenght of Password 
  if (passCharacters < 8) {
      alert("Your password must be minimum of 8 characters.");
        return placeholder;
  } else if (passCharacters > 128) {
        alert("Oh, I forgot! Your password must not exceed  128 characters.");  
          return placeholder; 
  
  } else if (passCharacters === null){
       return placeholder;
  }    
  
  // Second Requirement, Lower Case Letters
    var passLower = confirm(wantLowerCase); 
      if(passLower===true) {
        for (var i =0; i < lowerCaseSplit.length; i++) {
          passwordValue.push(lowerCaseSplit[i]);
    }
    
  }

  // Third Requirement, Upper Case Letters
  var passUpper = confirm(wantUpperCase);
    if (passUpper===true) {
      for (var i=0; i < passUppCaseSplit.length; i++){
        passwordValue.push(passUppCaseSplit[i]);
    }
      
  }
  
  // Fourth Requirement, Numbers
  var passNumbers= confirm(wantNumbers);
    if (passNumbers ===true) {
      for (var i=0; i < passNumCaseSplit.length; i++){
        passwordValue.push(passNumCaseSplit[i]);
     }
  }     

   // Fifth Requirement, Special Characters
  var passSymbols = confirm(wantSymbols);
  if (passSymbols ===true) {
    for (var i=0; i < passSymCaseSplit.length; i++)
      passwordValue.push(passSymCaseSplit[i]);
 } 
  
   // If no requirements have been selected
 if (passLower === false && passUpper === false && passSymbols === false && passNumbers === false){
  alert("Please, choose at least one option.");
  return  placeholder;
 }

 // Sum all Values and Generate a Random Password
 for (var i=0; i < passCharacters; i++){
   passwordValue[Math.floor(Math.random() * passwordValue.length)];
   randomPass +=
    passwordValue [Math.floor(Math.random() * passwordValue.length)];
 }
 return randomPass
}
 
 
 
  


