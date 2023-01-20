class Player{
    name: string;
    age:number;
    club: string;
    salary: number;
    familyMember
    previousClub: string[] = [];
    totalGoal: number

    constructor(n, a, c, s, fMember, pClub, g){ // i choose this types of name to avoid confusion 
        this.name = n,
        this.age = a,
        this.club = c,
        this.salary = s,
        this.familyMember = fMember,
        this.previousClub = pClub,
        this.totalGoal = g

    }
}