// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  constructor(sides,numDice){
    this.sides=sides;
    this.numDice=numDice;
    this.history=[]

    if(typeof sides!=='number'||sides<=0){
      throw Error;
    }
    else if(typeof numDices!=='number'||numDice<=0){
      throw Error;
    }
  }
  //YOUR CODE
  
  roll(sides,numDice){
    let sidesArr=[]
    sidesArr.push(sides);
    let numArr=[]
    numArr.push(numDice);
    let result ={sidesArr,numArr}
    this.history.push(result);
    return this.history;

  }
}

module.exports = { DiceRoller };
