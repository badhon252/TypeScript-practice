console.log("Hello typescript!");
// arrow function
let test = (a:number = 5, b:number = 6) =>{
    console.log(a*b);
}
test()

let test2 = (a:number = 5, b:number = 6) =>{
    console.log(a*b);
}
test2(2,3)

const array = []
array.push(1)
array.push("Hello World!")
array.push(true)
array.push({name:"John", age: 20})
array.push(()=>{console.log("Hello World!")})

console.log(array);
