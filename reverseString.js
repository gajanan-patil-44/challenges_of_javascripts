const str = "hello";
let rev = ''
for( let i = str.length -1 ; i >= 0; i--){
  rev = rev + str[i]
}
console.log(rev)

//built in method
console.log(str.split('').reverse().join(''))