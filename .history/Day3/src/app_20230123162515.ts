class Customer{
    private _firstName: string;
    private _lastName: string;
    private _age: number;

    constructor(theFirst: string, theLast: string, age:number){
        this._firstName = theFirst;
        this._lastName = theLast;
        this._age = age;
    }

    public get firstName(): string{
        return this._firstName;
    }

   public set firstName(value: string){
        this._firstName = value
   }

    public get lastName(): string{
        return this._lastName;
    }

    public set lastName(value: string){
        this._lastName = value;
    }

    public get age(): number{
        return this._age;
    }

    public set age(value: number){
        this._age = value;
    }
}

let customer1 = new Customer("Khalid", "Hossain", 22);

console.log(customer1.firstName);
console.log(customer1.lastName);
console.log(customer1.age);