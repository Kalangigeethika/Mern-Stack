let name="rohith"
let vowels="aeiou"
let consonants=0
for (let i=0;i<name.length;i++){
    if (!vowels.includes(name[i])){
        consonants++
    }
}
console.log(consonants)