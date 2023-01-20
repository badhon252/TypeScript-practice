class Player{
    name: string;
    age:number;
    club: string;
    previousClub: string[] = [];
    totalGoals: number

    constructor(name:string, age:number, club:string,   previousClub:string[], totalGoal:number){
        this.name = name;
        this.age = age;
        this.club = club;
        this.previousClub = previousClub;
        this.totalGoals = totalGoal;
    }
}