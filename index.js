let arr = new Array;

// Solution 1 ============================
function createObj(name,phase,gender){
  let newObj = new Object;
  newObj.name = name;
  newObj.phase = phase;
  newObj.gender = gender;
  arr.push(newObj);
}


// Solution 2 ============================
function createObj(name,phase,gender){
  let newObj = {
    name : name,
    phase : phase,
    gender : gender
  }
  arr.push(newObj);
}


createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');

console.log(arr);
