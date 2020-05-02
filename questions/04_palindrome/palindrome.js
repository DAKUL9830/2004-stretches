/* Given a string, determine if it is a palindrome */
/* A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam, or racecar */

const validPalindrome = (str) => {
  //YOUR CODEs
  if(str===str.split('').reverse.join('')){
    return true
  }else{
      return false 
    }

    
  
};

module.exports = { validPalindrome };
