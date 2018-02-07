class DataPerson{
  constructor(){
    this.data = []
  }

  addPerson(name,phase,gender){
    let obj={}
    obj['name'] = name
    obj['phase'] = phase
    obj['gender'] = gender
    this.data.push(obj)
  }

  findData(name){
    for(let i = 0 ; i < this.data.length ; i ++){
      if(name === this.data[i].name){
        console.log(this.data[i])
      }
    }

  }

  alldata(){
    console.log(this.data)
  }

}

let person = new DataPerson()
person.addPerson('akbar',1,'male')
person.addPerson('icha',1,'female')
person.addPerson('adhi',1,'male')
person.addPerson('ryan',1,'male')
person.findData('akbar')
// person.alldata()
