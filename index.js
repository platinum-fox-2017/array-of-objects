//RELEASE 0
var arr=[]
function createObj(name, phase, gender) {
  var obj = {}
  obj.name = name
  obj.phase = phase
  obj.gender = gender
  arr.push(obj)
}
createObj('Akbar',1,'male')
createObj('Icha',1,'female')
createObj('Adhit',2,'male')
createObj('Tama',2,'male')
createObj('Rifky',3,'male')
console.log(arr);

//RELEASE 1
function getData(name) {
  for(let i=0; i<arr.length; i++) {
    if(arr[i].name == name) {
      return arr[i]
    }
  }
}
console.log(getData('Icha'))
