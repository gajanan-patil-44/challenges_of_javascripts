const arr = [2,4,1,15,3,300,110]
  let largest = -Infinity 
let secondLargest = -Infinity
for (let i = 0; i <= arr.length -1; i++){
  if (arr[i] > largest){
    secondLargest = largest
    largest = arr[i]
  }
  else if (arr[i] > secondLargest && arr[i] < largest){
    secondLargest = arr[i]
  }
}
console.log(`largest = ${largest}`);
console.log(`secondLargest = ${secondLargest}`)