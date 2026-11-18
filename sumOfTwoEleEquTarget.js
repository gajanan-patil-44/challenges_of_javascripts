const arr = [2, 7, 11, 15,9,0];
const target = 9;
for (let i = 0; i < arr.length -1 ; i++){
  for( let j = i + 1; j <= arr.length -1; j++)  {
    if (arr[i] == target|| arr[i] + arr[j] == target ){
      console.log(`sum of ${arr[i]} and  ${arr[j]} is equals to your target ${target}`)
    }
  }
}