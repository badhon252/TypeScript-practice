const myFunc = (name:string, age:number, isAdult:boolean = false) =>{
    return (name+ age+ isAdult)
    // return `${name}, ${age}, ${isAdult}`;
}
console.log(
    myFunc("Khalid Hossian", 22, true)
);

