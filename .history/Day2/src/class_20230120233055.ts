class Player{
    name: string;
    age:number;
    club: string;
    salary: number;
    wife: string;
    previousClub: string[] = [];

    constructor(name, age, club, salary, wife, previousClub){
        this.name = name;
        this.age = age;
        this.club = club;
        this.salary = salary;
        this.wife = wife;
        this.previousClub = previousClub;
    }
}