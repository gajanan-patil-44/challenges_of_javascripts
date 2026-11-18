const str = "javascript";
let vowels =0
let consonants=0
let vow = ['a','e','i','o','u']
for( let char of str){
  let isVow = false
  for (let i =0; i <= vow.length -1; i++){
    if(char == vow[i]){
      isVow = true 
      break
    }
  }
  if(isVow){
    vowels ++
  }else{
    consonants ++
  }
}
  console.log(`VOWELS = ${vowels} 
  CONSONANTS = ${consonants}`)