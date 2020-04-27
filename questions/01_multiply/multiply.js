// This stretch requires you to write your own test cases

const multiply = (num1, num2) => {
if( num1===undefined|| num2===undefined){

    throw Error;
}
if( typeof(num1)==='array'|| typeof(num2)==='array'){
    throw  Error
}
    return num1*num2

    
};

module.exports = { multiply };
