const str1 = "javascript";

let freq1 = {}
  
for(let char of str1){
  if(freq1[char]){
    freq1[char]++
  }else{
    freq1[char] = 1;
  }
}
let maxCount = 0;
let maxChar = ''
for(let char in freq1){
  if(freq1[char] > maxCount){
    maxCount = freq1[char]
      maxChar = char
  }
}
console.log(`most numbers of appears character is = ${maxChar} count  = ${maxCount}`)