const x=10;
function temp(){
    const x=11;
    // x=20 gives error;
    console.log(x);
}
function temp1(){
    console.log(x);
}
temp1()