const myFunc = (name:string, age:number, isAdult:boolean = false) =>{
    return {name, age, isAdult}; // return object
    // return `${name}, ${age}, ${isAdult}`; // return strings
}
console.log(
    myFunc("Khalid Hossian", 22, true)
);
const newFunc = myFunc("Khalid Hossian", 22);
console.log(newFunc.name);