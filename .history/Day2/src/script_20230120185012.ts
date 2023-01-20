const myFunc = (name:string, age:number, isAdult:boolean = false) =>{
    return {name, age, isAdult=()=>age>18?true:false}; // return object
    // return `${name}, ${age}, ${isAdult}`; // return strings
}
console.log(
    myFunc("Khalid Hossian", 22, true)
);

const {name, age, isAdult} = myFunc("Khalid Hossian", 22, true)