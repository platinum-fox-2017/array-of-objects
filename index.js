//RELEASE 0
var arr = [];
function createObj(name, phase, gender){
  let obj = {};
  obj.name = name;
  obj.phase = phase;
  obj.gender = gender;
  arr.push(obj);
}

createObj('Akbar',1,'male');
createObj('Icha',1,'female');
createObj('Adhit',2,'male');
createObj('Tama',2,'male');
createObj('Rifky',3,'male');

console.log(arr);
console.log('----------------');

//RELEASE 1
function getData(name){
  for(var i=0; i<arr.length; i++){
    if(arr[i].name==='Icha'){
      return arr[i];
    }
  }
}

console.log(getData('Icha'));
