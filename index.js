// Write your algorithm here

function isPalindrome(str) {
  // Convert to lowercase
  str = str.toLowerCase();

  // Compare the original string with its reverse
  return str === str.split('').reverse().join('');
  // .reverse() only accepts arrays
}

console.log(isPalindrome("mom"));      
console.log(isPalindrome("racecar"));  
console.log(isPalindrome("hello"));    


/* 
  Add your pseudocode here
*/

/* call a function that takes a string as argument.
  I change the string to lowercase to avoid problems.
  I call the methods split, reverse and join to the string.
  I compare the original and final string by ===
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
