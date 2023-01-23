interface isCustomer{
    name: string;
    age: number;

    info(productName:string, productAmount:number): void;

    getEmail(): string;
}

export {isCustomer};