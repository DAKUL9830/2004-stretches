// B-Town bakery over-bought the supplies to make cake and needs to know how many they can make all together.

const btownbake = (recipe,supplies) => {
  
  if(typeof recipe!=='object'||typeof supplies!=="object"){
    throw new Error("Thisis not an object")
  }
  let newNum=[];
 for(let key in recipe){
   if(key in supplies){
      newNum.push(Math.floor(supplies[key]/recipe[key]));
   }else{
     return 0;
   }
   
 }
   return Math.min(...newNum);
  //enter code here
};

module.exports = { btownbake };
