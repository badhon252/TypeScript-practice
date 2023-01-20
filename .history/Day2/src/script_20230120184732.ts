const myFunc = (name:string, age:number, isAdult:boolean = false) =>{
    return {name, age, isAdult}
    // return `${name}, ${age}, ${isAdult}`; // return strings
}
console.log(
    myFunc("Khalid Hossian", 22, true)
);

let newFun = myFunc("Khalid Hossian", 22, true)
const {name, age, isAdult} = newFun