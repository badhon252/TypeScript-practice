const myFunc = (name:string, age:number) =>{
    let isAdult = age>=18 ? true:false;
    return {name, age, isAdult}; // return object
    // return `${name}, ${age}, ${isAdult}`; // return strings
}
console.log(
    myFunc("Khalid Hossian", 22)
);
const newFunc = myFunc("Khalid Hossian", 22);
console.log(newFunc.name, newFunc.age, newFunc.isAdult);