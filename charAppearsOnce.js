const str = "aabbcde";
let freq = {}
for(let char of str){
  if(freq[char]){
    freq[char]++
  }else {
        freq[char] = 1;
  }
}
for(let char of str){
  if(freq[char] == 1){
    console.log(char)
    break
  }
}