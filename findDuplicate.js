const arr = [1, 2, 3, 2, 4, 1, 5, 3];
let dup = []
for (i = 0; i <= arr.length -1 ; i++){
  for(j= i+1; j <= arr.length -1; j++){
    if( arr[i] === arr[j] && !dup.includes(arr[i])){
      dup.push(arr[i])
    }
  }
}
console.log(dup)