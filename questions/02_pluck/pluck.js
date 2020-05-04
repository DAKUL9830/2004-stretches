/*
Write a function that takes an object and an array of keys.
The function should return a new object with the keys from the array 
and the associated values from passed in object.

const obj1 = { a: 1, b: true };
pluck(obj1, ['a']));
returns  { a: 1};

newObj={}

elements.forEach(elem=>{
  if(obj.elem!==undefined){
    obj.elem===newObj.elem
  }
})

const obj2 = { a: 1, b: true, c: 42 };
pluck(obj2, ['a', 'c']));
returns { a: 1, c: 42};

const obj3 = { a: 1, b: true, c: 42 };
pluck(obj3, ['a', 'c', 'x'])
returns { a: 1, c: 42};
*/

function pluck(obj, elements) {
  let newObj={}
  elements.forEach((el)=> {
  if(obj[el]!== undefined)
  obj[el] = newObj[el]
  })
  return newObj
  // YOUR CODE
}

module.exports = { pluck };
