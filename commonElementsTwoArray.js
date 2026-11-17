const arr1 = [1, 2, 3, 4, 5,3];
const arr2 = [3, 4, 5, 6, 7,3];
let newArr = []
for(let num of arr1){
  if (arr2.includes(num) && !newArr.includes(num)){
    newArr.push(num)
  }
}
console.log(newArr);
