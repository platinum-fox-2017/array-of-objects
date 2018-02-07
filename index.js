var arr=[];

function createObj(name, phase, gender) {
    var person={
        name: name,
        phase: phase,
        gender: gender
    }
    arr.push(person);
}

createObj('Akbar',1,'male');
createObj('icha',1,'female');
createObj('Adhit',2,'male');
createObj('Tama',2,'male');
createObj('Rifky',3,'male');

console.log(arr);