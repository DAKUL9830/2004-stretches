const lockBox = (elem1,elem2) => {
  // write code here
  if(typeof elem1!=='number'||typeof elem2!=='string'){

    throw Error
  }
  let code=elem1;
  let message=elem2;
  return{

  modCode:(prevCode,newCode)=>{
   if(prevCode!==code){
     throw Error
   }else{
     code=newCode
   }
   return newCode;


  },
  modMessage:(prevMessage,newMessage)=>{
    if(prevMessage!==message){
      throw Error
    
    }else{
      message=newMessage
    }
    return newMessage


  },
  revealMessage:(num,str)=>{
    code=newCode
    if(num!==newCode){
        throw Error
    }else{
      return str
    }

  }
  }
};

module.exports = { lockBox };
