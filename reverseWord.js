const str = "hello world javascript";
let splt = str.split( ' ')
let res =[]
for(let word of splt){
  let rev = ''
  for(let i = word.length -1; i >= 0; i--){
    rev += word[i]
  }
  res.push(rev)
}
console.log(res)