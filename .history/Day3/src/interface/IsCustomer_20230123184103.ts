interface isCustomer{
    name: string;
    age: number;

    info(productName:string, productAmount:number): void;
}

export {isCustomer};