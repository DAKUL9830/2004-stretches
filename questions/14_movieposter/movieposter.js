//Write a function that takes a list of strings and prints them
// one per line, in a rectangular frame.
// ********
// * Any  *
// * Gun  *
// * Can  *
// * Play *
// ********

const movieposter = (arr) => {
  if(typeof arr==!'Array'||arr.length===0){
    return Error
  }
  for(let i=0;i<arr.length;i++){
    if(typeof arr[i]==='string'){
      return `*${arr[i]}*/n`

    }
    else{
      return false;
    }
  }
  //write code here
};

module.exports = { movieposter };
