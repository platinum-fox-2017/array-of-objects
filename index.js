class ArrayOfObjects{
    constructor(){
        this.data = []
    }

    converter(name){
        let keyStandard = ['name','phase','gender']
        let obj = {}
        for(let i in name){
            obj[keyStandard[i]] = name[i]
        }
        this.data.push(obj)
    }
    
    findName(findName){
        // this.data.forEach(each =>{
        //     if(findName === each.name){
        //       hasil = each
        //     }
        // })

        const hasil = this.data.filter(each =>{
            if(findName === each.name){
                return each
            }
        })

        if(hasil.length !==  0){
            return hasil
        }else{
            return `tidak ada namanya`
        }
    }

    hasil(){
        console.log(this.data)
    }
}
let name = ['Akbar',1,'male']
let name2 = ['Icha',1,'female']
let name3 = ['Adhit',1,'male']
let name4 = ['Tama',1,'male']
let name5 = ['Rifky',1,'male']

let release0 = new ArrayOfObjects()
release0.converter(name)
release0.converter(name2)
release0.converter(name3)
release0.converter(name4)
release0.converter(name5)
console.log(release0.findName('Akbar'))
// release0.hasil()