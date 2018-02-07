var arr=[];

function createObj(name, phase, gender) {
    var person={
        name: name,
        phase: phase,
        gender: gender
    }
    arr.push(person);
}

function getData(name) {
    for(var i in arr) {
        if(arr[i].name===name) return arr[i]
    }
    return "Not Found";
}

createObj('Akbar',1,'male');
createObj('Icha',1,'female');
createObj('Adhit',2,'male');
createObj('Tama',2,'male');
createObj('Rifky',3,'male');

console.log(arr);
console.log(getData('Icha'));