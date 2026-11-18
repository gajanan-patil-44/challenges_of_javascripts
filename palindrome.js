const str = "madam";
const str2 = "hello"
function palindrome (string){
let revStr = ""

for (let i = string.length -1; i >= 0; i--){
  revStr += string[i]
}
if (revStr === string){  
    console.log(`${string} is Palindrome`)
}else {
      console.log(`${string} is NOT Palindrome`)

}}
palindrome(str)
palindrome(str2)