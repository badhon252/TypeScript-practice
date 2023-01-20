"use strict";
class Player {
    constructor(n, a, c, pClub, goals, jerseyNum) {
        this.previousClub = [];
        this.name = n;
        this.age = a;
        this.club = c;
        this.previousClub = pClub;
        this.totalGoals = goals;
        this.jerseyNumber = jerseyNum;
    }
    play() {
        console.log(`${this.jerseyNumber} ${this.name} is playing for ${this.club}`);
    }
}
const messi = new Player("Messi", 34, "PSG", ["PSG", "Barcelona"], 700, "#10");
// console.log(messi);
messi.play();
const neymar = new Player("Neymar", 29, "PSG", ["Barcelona", "PSG"], 500, "#10");
// console.log(neymar);
neymar.play();
const ronaldo = new Player("Ronaldo", 36, "Al-Nassr FC", ["Juventus", "Al-Nassr FC"], 700, "#7");
// console.log(ronaldo);
ronaldo.play();
const players = [];
players.push(messi, neymar, ronaldo);
console.log(players.map((p) => p.name));
//!New object ===
class Customer {
    constructor(n, a, addr) {
        this.name = n;
        this.age = a;
        this.address = addr;
    }
    ;
    customerInfo() {
        console.log(`Customer name is ${this.name}and his age is ${this.age} and his address is ${this.address}
         `);
    }
    ;
    customersOrder(product, amount) {
        console.log(`${this.name} has ordered ${amount}-${product}`);
    }
    ;
}
;
const customerLists = [];
const khalid = new Customer("khalid Hossain", 22, "Barishal");
console.log(khalid);
khalid.customerInfo();
khalid.customersOrder("Laptop", 5);
customerLists.push(khalid);
const Jannatul = new Customer("Jannatul Fardows", 22, "Barishal");
customerLists.push(Jannatul);
console.log(customerLists);
// console.log(customerLists.map((c)=>c.name));
