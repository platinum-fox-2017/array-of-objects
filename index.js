var arr = [];

function createObj(name,phase,gender){
  let obj = {
    name: name,
    phase: phase,
    gender: gender
  };
  arr.push(obj);
}

createObj('Akbar',1,'male');
createObj('Icha',1,'female');
console.log(arr);
