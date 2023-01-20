const myFunc = (name:string, age:number, isAdult:boolean = false) =>{
    let isAdult1 = age>=18 ? true:false;
    return {name, age, isAdult1}; // return object
    // return `${name}, ${age}, ${isAdult}`; // return strings
}
console.log(
    myFunc("Khalid Hossian", 22, true)
);
const newFunc = myFunc("Khalid Hossian", 22);
console.log(newFunc.name, newFunc.age, newFunc.isAdult);