//Release 0
var arr = [];
let createObj = (name, phase, gender) => {
    let obj ={
        name: name,
        phase: phase,
        gender: gender
    }
    arr.push(obj);
};

createObj('Akbar',1,'male');
createObj('Icha',1,'female');
createObj('Adhit',2,'male');
createObj('Tama',2,'male');
createObj('Rifky',3,'male');

console.log(arr);

//Release 1
let getData = (name) => {
    let result;
    arr.forEach(item => {
        if(item.name === name){
            result = item;
        }
    })
    return result;
};

console.log(getData('Icha'));
