//write a func that takes two arg... selectKey and obj

const comparator = (obj) => {
    const newObj={};

 Object.keys(obj).sort().forEach(function(key){
     newObj[key]=obj[key];
 })
 return newObj
};


module.exports = { comparator };
