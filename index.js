function isPalindrome(word) {
  let reverseWord = []
  for(let i = word.length -1; i >= 0; i--){
    reverseWord.push(word[i])
  }
  return reverseWord.join("") === word
}

/* THE PROBLEM
I need to check if the backwards form of the word
is the same as forwards. therefore i need to first reverse
the word and then simply check ===
 */

/* 
initialize a new word array
  for letters in word (i = 0, i > length, i++)
  newword[index] counting up is equal to OG word index
  counting down
  turn array into string and return

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
