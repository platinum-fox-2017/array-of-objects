function createObj(name,phase,gender){
  let obj = {
    name : name,
    phase : phase,
    gender : gender
  }
  return obj
}

let arr = []
arr.push(createObj('Akbar',1,'male'))
arr.push(createObj('Mira',2,'female'))
arr.push(createObj('Miri',2,'female'))
arr.push(createObj('Miru',2,'female'))
arr.push(createObj('Mire',2,'female'))


function getData(name){
  let result
  arr.forEach(function(item,index,array){
    if(item.name === name){
      result = item
    }
  })
  return result
}

console.log(arr);
console.log(getData('Miri'));
