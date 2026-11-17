const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
let arr = []
for( let num of arr1){
  if(!arr2
     .includes(num)){
    arr.push(num)
  }
}console.log(arr)