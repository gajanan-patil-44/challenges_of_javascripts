const arr = [2,4,1,15,3,1,300,110,0,-7]
let smallest = +Infinity
let secondSmallest = +Infinity

for (i = 0; i <= arr.length -1 ; i++){
    if(arr[i] < smallest){
        secondSmallest = smallest
        smallest = arr[i]
    }else if ( arr[i] < secondSmallest && arr[i] > smallest ){
        secondSmallest = arr[i]
    }
}
console.log(`smallest = ${smallest}`);
console.log(`secondSmallest = ${secondSmallest}`);
