var arr = [];

function createObj(name, phase, gender){
    arr.push({name: name, phase: phase, gender: gender})
}

createObj('Akbar', 1, 'Male');
createObj('Icha', 1, 'Female')
createObj('Adhit', 2, 'Male');
createObj('Tama', 2, 'Male');
createObj('Rifky', 3, 'Male');

console.log(arr);