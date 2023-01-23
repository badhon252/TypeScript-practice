interface isCutomer{
    name: string;
    age: number;

    info(productName:string, productAmount:number): object;
}

export {isCutomer};