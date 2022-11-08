

//rest parameter
function sum(a,b,c,...rest){
    console.log(a);
    console.log(b);
    console.log(c);
}
let num=[1,2,3,4,5,6]
console.log(sum(...num))
