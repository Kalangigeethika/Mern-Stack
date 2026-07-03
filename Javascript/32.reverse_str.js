let name="geethika"
n=name.length
for (let i=0;i<n/2;i++){
    let temp=name[i]
    name[i]=name[n-i-1]
    name[n-i-1]=temp
} // strings are immutable so the above code does not work
console.log(name)
let reverse=""
for (let i=0;i<n;i++){
    reverse+=name[n-i-1]
}
console.log(reverse)