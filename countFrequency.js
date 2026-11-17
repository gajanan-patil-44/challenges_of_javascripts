const arr = [2,3,2,4,4,1]
let freq = {}
for( let num of arr){
    if(freq[num]){
        freq[num]++
    }else{
        freq[num] = 1;
    }
}
console.log(freq);
