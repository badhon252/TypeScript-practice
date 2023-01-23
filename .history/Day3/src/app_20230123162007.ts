class Customer{
    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast: string){
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    public get firstName(): string{
        return this._firstName;
    }

   public set firstName(value: string): string{
        this._firstName = value
   }

    public get lastName(): string{
        return this._lastName;
    }

    public set lastName(value: string){
        this._lastName = value;
    }
}

let customer1 = new Customer("Khalid", "Hossain")