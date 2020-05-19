/*
write the zip function
zip([{x: 1}, {x: 2}]) => {x: 3}
zip([
  {x: 1, y: 2}, 
  {x: 2, z: 1},
  {z: 2, y: 1}]) => {x: 3, y: 3, z: 3}
*/

function zip(objs) {
  
  objs.reduce((obj,item)=>{
    Object.entries(item).forEach(([key,value])=>{
      if(key[i]===key[i+1]){
        
      }

    })
  })
  // YOUR CODE
}

module.exports = { zip };
