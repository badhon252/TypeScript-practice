import { isCustomer } from "../interface/IsCustomer.js";

/* class Customer{
    private _firstName: string;
    private _lastName: string;
    private _age: number;

    constructor(theFirst: string, theLast: string, age:number){
        this._firstName = theFirst;
        this._lastName = theLast;
        this._age = age;
    }

    public get firstName(): string{
        return this._firstName; // firstName will be printed
    } 

   public set firstName(value: string){
        this._firstName = value // here we can set the value of firstName=value
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

    public info(productName:string, productAmount:number): object{
        return {
            firstName: this._firstName,
            lastName: this._lastName,
            age: this._age,
            productName: productName,
            productAmount: productAmount
        }
    }
}
 */

class Customer implements isCustomer{
    constructor(
        public name: string,
        public age: number,
        private email: string,
    ){}
  
    info(){
        console.log(`Customer name is ${this.name} and age is ${this.age} years old`);
    };
    getEmail(){
        return this.email;
    }
}
export {Customer};