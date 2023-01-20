class Player{
    name: string;
    age:number;
    club: string;
    previousClub: string[] = [];
    totalGoals: number
    jerseyNumber: number

    constructor(n:string, a:number, c:string, pClub:string[], goals:number, jerseyNum:number){
        this.name = n;
        this.age = a;
        this.club = c;
        this.previousClub = pClub;
        this.totalGoals = goals;
        this.jerseyNumber = jerseyNum;
    }
    play(){
        console.log(`${this.name} is playing for ${this.club}`)
    }
}

const messi = new Player("Messi", 34, "PSG", ["PSG", "Barcelona"], 700, 10);
console.log(messi);
messi.play()

const neymar = new Player("Neymar", 29, "PSG", ["Barcelona", "PSG"], 700, 10);
console.log(neymar);
neymar.play();

const ronaldo = new Player("Ronaldo", 36, "Al-Nassr FC", ["Juventus", "Al-Nassr FC"], 700, 7);
console.log(ronaldo);
ronaldo.play();