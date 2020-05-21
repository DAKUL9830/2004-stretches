const delay = (str, time) => {
  return new Promise((resolve)=>{

  
  setTimeout(()=>
    resolve(str)
  ,time)
})
  //Your code here
};

module.exports = { delay };
