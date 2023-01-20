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

function userInfo(user:userType, id:StringOrNumber){
    console.log(`User Info: ${user.name}, ${user.age}, ${id}`);
}
userInfo({name:"Khalid Hossain", age:22}, 1);