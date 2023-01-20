class Player{
    name: string;
    age:number;
    club: string;
    salary: number;
    familyMember: string;
    previousClub: string[] = [];
    totalGoal: number

    constructor(name:string, age:number, club:string, salary:number, familyMember:string, previousClub:string[], totalGoal:number){
        this.name = name;
        this.age = age;
        this.club = club;
        this.salary = salary;
        this.familyMember = familyMember;
        this.previousClub = previousClub;
        this.totalGoal = totalGoal;
    }
}