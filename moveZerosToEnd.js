const arr = [0,2,0,4,1,0]
let newArr = []
for (let num of arr) {
  if (num !== 0){
    newArr.push(num)
  }
}

while (newArr.length !== arr.length){
  newArr.push(0)
}
console.log(newArr)