// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
 let tempStr1=str1.split('').sort().join('')
 let tempStr2=str2.split('').sort().join('')
 if(tempStr1!==tempStr2){
   return false
 }else{

  return true;
 }
  //YOUR CODE
};

module.exports = { checkAnagrams };
