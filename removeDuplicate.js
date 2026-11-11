const arr = [1, 2, 3, 2, 4, 1, 5];
let newArr = []
for (let i = 0; i <= arr.length - 1; i++){
  if(!newArr.includes(arr[i])){
    newArr.push(arr[i])
  }
}
console.log(newArr)

//using Set 
const setArr = [... new Set(arr)]
console.log(setArr)