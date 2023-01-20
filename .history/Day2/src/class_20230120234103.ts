class Player{
    name: string;
    age:number;
    club: string;
    previousClub: string[] = [];
    totalGoals: number

    constructor(n:string, a:number, c:string, pClub:string[], Goals:number){
        this.name = n;
        this.age = a;
        this.club = c;
        this.previousClub = pClub;
        this.totalGoals = Goals;
    }
    play(){
        console.log(`${this.name} is playing for ${this.club}`)
    }
}

const messi = new Player("Messi", 34, "Barcelona", ["PSG", "Barcelona"], 700);

console.log(messi);