let arr = []
const createObj = (name, phase, gender) => {
    let obj = { name: name, phase: phase, gender: gender }
    arr.push(obj)
    return arr
}

const getData = (name) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === name) {
            return arr[i]
        }
    }
    return 'Tidak ditemukan'

}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
console.log(arr)
console.log('-------')
console.log(getData('Icha'))


