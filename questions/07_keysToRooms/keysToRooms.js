/* 
There are N rooms and you start in room 0. 
Each room has a distinct number in 0, 1, 2, ..., N-1 
Each room may have some keys to access the next room.  

Initially, all the rooms start locked (except for room 0).
To open the next room, you must have already encountered 
the appropriate key for that room.

EXAMPLE OF ROOMS 
ex 1. 
[[1],[2],[3],[]] 

ex 2. 
[[1,3],[3,0,1],[2],[0]]

*/

const keysToRooms = (rooms) => {
  for(let i=0;i<rooms.length1-1;ii++){
    for(let j=0;j<rooms.lenght-1;j++){
      if(rooms[j+1]===rooms[i]){
        return true

        }else {
          return false;
        }
      
    }
  }
  //YOUR CODE HERE
};

module.exports = { keysToRooms };
