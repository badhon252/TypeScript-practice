class Player{
    name: string;
    age:number;
    club: string;
    previousClub: string[] = [];
    totalGoals: number
    jerseyNumber: number|string;
    
    constructor(n:string, a:number, c:string, pClub:string[], goals:number, jerseyNum:number|string){
        this.name = n;
        this.age = a;
        this.club = c;
        this.previousClub = pClub;
        this.totalGoals = goals;
        this.jerseyNumber = jerseyNum;
    }
    play(){
        console.log(`${this.jerseyNumber} ${this.name} is playing for ${this.club}`)
    }
}

const messi = new Player("Messi", 34, "PSG", ["PSG", "Barcelona"], 700, "#10");
// console.log(messi);
messi.play()

const neymar = new Player("Neymar", 29, "PSG", ["Barcelona", "PSG"], 500, "#10");
// console.log(neymar);
neymar.play();

const ronaldo = new Player("Ronaldo", 36, "Al-Nassr FC", ["Juventus", "Al-Nassr FC"], 700, "#7");
// console.log(ronaldo);
ronaldo.play();

const players: Player[] = [];
players.push(messi, neymar, ronaldo)
console.log(players.map((p)=>p.name));


//!New object ===
class Customer{
    name: string;
    age: number;
    address: string;
    constructor(n:string, a:number, add:string){
        this.name = n;
        this.age = a;
        this.address = add;
    }
    customerInfo(){
        console.log(`Customer name is ${this.name} and his age is ${this.age} and his address is ${this.address}`)
    }
}