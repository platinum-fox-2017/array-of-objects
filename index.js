
var arr = [];

function createObj(name, phase, gender){
    let objek = {};
    objek.name = name;
    objek.phase = phase;
    objek.gender = gender;
    arr.push(objek);
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Joko', 2, 'male');
createObj('anwar', 1, 'male');

console.log(arr);

console.log('=============================');

function getData(name) {
    for(var i=0; i<arr.length; i++){
        if(arr[i].name === name){
            return arr[i];
        }
    }
}

console.log(getData('Icha'));

