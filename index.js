var arr=[]

function createobj(name,phase,gender){
  var obj={
    Name:name,
    Phase:phase,
    Gender:gender
  }
  arr.push(obj)

}

createobj('akbar',1,'male')
createobj('icha',1,'female')

console.log(arr)

function getdata(name){
  for(let i=0;i<arr.length;i++){
    if(arr[i].Name===name){
      var output=arr[i]
      break;
    }
  }
  return output
}

console.log(getdata('icha'))
