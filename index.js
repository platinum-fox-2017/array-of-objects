// Release 0
var arr = [];

function createObj (name, phase, gender){
    let newObj = {};
    newObj.name = name;
    newObj.phase = phase;
    newObj.gender = gender;

    return arr.push(newObj);
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');
createObj('Rifky', 3, 'male');

console.log(arr);

// Release 1
function getData (name) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i].name === name){
            return arr[i];
        }
    }
}

console.log(getData('Icha'));