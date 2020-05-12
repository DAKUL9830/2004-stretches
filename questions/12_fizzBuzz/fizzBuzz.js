const fizzBuzz = (num) => {
  //YOUR CODE HERE
  if(typeof num==='number'||typeof num<0){
   throw Error;
  }
  for(let i=0;i<num;i++){
    if(i%3===0){
      return 'Fizz'
    } if(i%5){
      return 'Buzz'
    }
    else if(i%15){
      return 'FizzBuzz'
    }

  }
  //started too late

};
module.exports = { fizzBuzz };
