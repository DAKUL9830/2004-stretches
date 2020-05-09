//write the splatter function

const splatter = (obj) => {
  sum=0;
  for(let el in obj){
    if(obj.hasOwnProperty(el)){
    sum+=parseFloat(obj[el])
    }
    return sum;
  }

  //write code here
};

module.exports = { splatter };
