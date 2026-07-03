let name="geethika"
let vowels="aeiou"
let res=0
for (let i=0;i<name.length;i++){
    if (vowels.includes(name[i])){
        res++
    }
}
console.log(res)