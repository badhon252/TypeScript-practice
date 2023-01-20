class Player{
    name: string;
    age:number;
    club: string;
    salary: number;
    familyMember
    previousClub: string[] = [];
    totalGoal: number

    constructor(name, age, club, salary, familyMember, previousClub, totalGoal){
        this.name = name;
        this.age = age;
        this.club = club;
        this.salary = salary;
        this.familyMember = familyMember;
        this.previousClub = previousClub;
        this.totalGoal = totalGoal;
    }
}