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
type userType = {
    name: string,
    age:number
}
type productName = string | number;

const userInfo = (user:userType, id:StringOrNumber):string =>{
    return(`User Info: ${user.name}, ${user.age}, User Id: ${id}`);
}
const user1 = userInfo({name:"Khalid Hossain", age:22}, "193-011-011");
console.table(user1);


// function signature 
let Customer : (user:userType, id:StringOrNumber, product:productName) => any;

Customer = (user, id, product) =>{

}
