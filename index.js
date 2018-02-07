var arr = []
function createObj(name,phase,gender){
  var dataObj = {
    Name : name,
    Phase : phase,
    Gender : gender
  }

  arr.push(dataObj)
}

createObj('Akbar',1,'male')
createObj('Icha',1,'female')
console.log(arr)
