const arr = [1, 2, 5,3];
let revArr = []
for( let i = arr.length -1 ; i >= 0; i--){
    revArr.push(arr[i]);
}
console.log(revArr);


// best approach by 2 pointers left and right
// const arr = [1, 2, 3, 4, 5,];
let left = 0
let right = arr.length - 1;
while (left < right ){
  let temp = arr[left];
arr[left] = arr[right] ;
  arr[right] = temp;
  left++;
  right--;
}

console.log(arr)