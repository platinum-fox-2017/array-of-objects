'use strict'
var arr = []
const createObj = (name, phase, gender) => {
  let obj = {
    name: name,
    phase: phase,
    gender: gender
  }
  arr.push(obj)
  return arr
}

// console.log(arr);

createObj('Akbar', 1, 'Male'),
createObj('Icha', 1, 'Female'),
createObj('Adhit', 2, 'Male'),
createObj('Tama', 2, 'Male'),
createObj('Rifky', 1, 'Male')

const getData = name => {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].name === name) {
      return arr[i]
    }
  }
}

// console.log(getData('Icha'));
