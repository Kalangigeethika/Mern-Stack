// function declaration
// function expression
const Add = function(){
    console.log("add fucntion")
}
// anonymous function
const anonymous = function () {
    console.log("Anonymous function");
};
() => {}
// arrow function
const Subtract = (a, b) => {
    return a - b;
};
// recursion

function factorial(n){
    if (n==0){
        return 1
    }
    return n*factorial(n-1)
}
console.log(factorial(5))