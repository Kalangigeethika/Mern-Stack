let name="geethika"
let frequency={}
for (let i=0;i<name.length;i++){
    let char=name[i]
    frequency[char]=(frequency[char]||0)+1
}
console.log(frequency)