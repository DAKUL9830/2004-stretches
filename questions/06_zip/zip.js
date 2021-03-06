/*
write the zip function
zip([{x: 1}, {x: 2}]) => {x: 3}
zip([
  {x: 1, y: 2}, 
  {x: 2, z: 1},
  {z: 2, y: 1}]) => {x: 3, y: 3, z: 3}
*/

function zip(objs) {
  
  objs.reduce((acc,obj)=>{
    Object.entries(obj).forEach(([key,value])=>{
      if(acc[key]){
         acc+=value
        
      }else{
        acc[key]=value;
      }

    })
    return acc;
  },{})
  // YOUR CODE
}

module.exports = { zip };
