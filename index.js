/*
RELEASE 0
*/

var arrHasil = [];

function createObj(name,phase,gender) {
    //YOUR CODE HERE...
    var objEmpty = {};

    objEmpty['name'] = name;
    objEmpty['phase'] = phase;
    objEmpty['gender'] = gender;

    // console.log(objEmpty);
    arrHasil.push(objEmpty);    
    
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');

// console.log(0, arrHasil);

/*
Release 1
*/

function getData(nama) {
    //YOUR CODE HERE...

    // console.log(arrHasil.length); // 2
    for (var i = 0; i < arrHasil.length; i++) {
        if (arrHasil[i].name == nama) {
            return arrHasil[i];
        }
    }
}

console.log(getData('Icha'));


























































































// TEST DOANG

// var arr = {};
// for (var i = 0; i < 3; i++) {
    // arr['name'] = 'Marco','Ade';
    // arr.kegiat = 'Coding';
    // arr[1].name = 'Marcia';
// }

// console.log(arr);
