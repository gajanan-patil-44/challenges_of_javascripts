const arr = [2,4,5]
let sum = 0 ;
for ( let i = 0; i <= arr.length - 1; i++){
  sum = sum +arr[i];
  
}
  console.log(` sum = ${sum}`)

let start = arr[0]
let end = arr[arr.length - 1]
let sum2 = 0;
for (let i = start; i <= end; i++){
  sum2 += i
}
console.log(`sum 2 = ${sum2}`)
let missing;
if (sum < sum2){
 missing = sum2 - sum
}
console.log(`missing number is = ${missing}`)