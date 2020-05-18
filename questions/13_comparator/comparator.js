//write a func that takes two arg... selectKey and obj

const comparator = (selectKey,Obj) => {
    //const newObj={};

/* Object.keys(obj).sort().forEach(function(key){
     newObj[key]=obj[key];
 })
 return newObj;*/
 if(!selectKey){
     throw new Error("incorrect key")
 }
 return Object.keys(Obj).sort().reduce(acc,key=>{
      if(acc[key]===obj[key]){
          return acc;
      }
 },{})

};


module.exports = { comparator };
