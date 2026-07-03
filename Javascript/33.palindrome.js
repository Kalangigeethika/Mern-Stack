let name="amma"
let reverse=""
let n=name.length
for (let i=0;i<n;i++){
    reverse+=name[n-i-1]
}
if (name===reverse){
    console.log("It is a palindrome")
} else {
    console.log("It is not a palindrome")
}