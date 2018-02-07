let arr = new Array;
// ================================== Release 0 =================================
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
createObj('Andi', 1, 'male');
createObj('Ida', 1, 'female');
createObj('Fadhil', 1, 'male');
createObj('Irma', 1, 'female');

console.log("Release 0:");
console.log(arr);


// ================================== Release 1 =================================
function getData(name){
  for(var i = 0; i < arr.length; i++){
    if(arr[i].name==='Icha')
      return arr[i];
  }
}
console.log("\n\nRelease 1:");
console.log(getData('Icha'));
