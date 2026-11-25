const str1 = "listen";
const str2 = "silent";

let freq1 = {}
let freq2 = {}
  
for(let char of str1){
  if(freq1[char]){
    freq1[char]++
  }else{
    freq1[char] = 1;
  }
}

for(let char of str2){
  if(freq2[char]){
    freq2[char]++
  }else{
    freq2[char] = 1;
  }
}

let isAnagram = str1.length === str2.length
for(let char in freq1){
  if(freq1[char] !== freq2[char]){
    isAnagram = false;
    break;
  }
  
}
console.log(isAnagram ? 'Anagram':'not Anagram')