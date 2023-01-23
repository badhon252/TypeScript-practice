interface isCustomer{
    name: string;
    age: number;
    email: string;

    info(productName:string, productAmount:number): void;

    getEmail(): string;
}

export {isCustomer};