let arr = []

function createObj(name, phase, gender) {
    //your code here...
    return arr.push({name, phase, gender})
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')

// console.log(arr)

function getData(name) {
    return arr.filter(value => {
        return value.name == name
    })
}

console.log(getData('Icha'))