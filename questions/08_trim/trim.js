// trim takes an object and removes any keys that have undefined or null values

const trim = obj => {
  if (typeof obj==='object'){
    return true

    
  }else{
    return false;
  }
 
  for(let [key,value] of Object.entries(obj)){
    if(Object.value(obj)===undefined||Object.value(obj)===null){
      return `${key}:${value}`
    }
  }
  
  }
  // YOUR CODE

module.exports = { trim };
