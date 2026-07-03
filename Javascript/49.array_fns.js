//push()-add element at end
let arr=[1,2,3,4,5]
arr.push(6)
console.log(arr)

//pop()-remove element from end
arr.pop()
console.log(arr)

//shift()-remove element from beginning
arr.shift()
console.log(arr)

//unshift()-add element at beginning
arr.unshift(0)
console.log(arr)

//concat()-join arrays
let arr2=[7,8,9]
let arr3=arr.concat(arr2)
console.log(arr3)

//includes()-check if element exists in array
console.log(arr.includes(5))

//indexOf()-find index of element
console.log(arr.indexOf(5))

//join()-join array elements into string
console.log(arr.join(", "))

//reverse()-reverse array elements
arr.reverse()
console.log(arr)

//sort()-sort array elements
arr.sort()
console.log(arr)

//Advanced array methods
//forEach()-iterate over array elements
let arr4=[1,2,3,4,5]
arr4.forEach((element)=>{
    console.log(element)
})

//map()-create new array by transforming elements
let arr5=[1,2,3,4,5]
let arr6=arr5.map((element)=>{
    return element*2
})
console.log(arr6)

//filter()-create new array with elements that pass a test
let arr7=[1,2,3,4,5]
let arr8=arr7.filter((element)=>{
    return element>3
})
console.log(arr8)

//reduce()-reduce array to single value
let arr9=[1,2,3,4,5]
let sum=arr9.reduce((acc,element)=>{
    return acc + element
}, 0)
console.log(sum)

//find()-find first element that passes a test
let arr10=[1,2,3,4,5]
let found=arr10.find((element)=>{
    return element>3
})
console.log(found)