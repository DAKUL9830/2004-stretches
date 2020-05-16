//write the splatter function

const splatter = (...args) => {
 /* sum=0;
  for(let el in obj){
    if(obj.hasOwnProperty(el)){
    sum+=parseFloat(obj[el])
    }
    return sum;
  }
  
  //write code here*/

  return args.reduce((acc,item)=>{
    Object.entries(item).forEach(([key,value])=>{
      acc+=value;

    });
    return acc

  },0)
};

module.exports = { splatter };
