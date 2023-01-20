const myFunc = (name:string, age:number):object =>{
    let isAdult = age>=18 ? true:false;
    return {name, age, isAdult}; // return object
    // return `${name}, ${age}, ${isAdult}`; // return strings
}
console.log(
    myFunc("Khalid Hossian", 22)
);
console.log(
    myFunc("Jannatul Fardows", 22)
);

// type alias 
type StringOrNumber = string | number;

function()