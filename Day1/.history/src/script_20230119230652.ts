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

// I didn't declared the type of the value in this array
const array = []
array.push(1)
array.push("Hello World!")
array.push(true)
array.push({name:"John", age: 20})
array.push(()=>{console.log("Hello World!")})
console.log(array);

// typed array
const array2: number[] = [];
array2.push(1)
array2.push(2)

console.log(array2);

// typed array
const array3: (number | string)[] = [];
array3.push(1)
array3.push("Hello World!")

console.log(array3);

// typed array