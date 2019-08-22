/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
  constructor(attributes) {
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

class CharacterStats extends GameObject {
  constructor(attributes) {
    super(attributes);
    this.healthPoints = attributes.healthPoints;
  }

  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends CharacterStats {
  constructor(attributes) {
    super(attributes);
    this.team = attributes.team;
    this.weapons = attributes.weapons;
    this.language = attributes.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }

  dmgCalc() {
    const min = Math.ceil(this.atkPwr - 5);
    const max = Math.floor(this.atkPwr + 5);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;

class Hero extends Humanoid {
  constructor(attributes) {
    super(attributes);
    this.atkPwr = attributes.atkPwr;
  }

  mortalStrike(damageDealt, target) {
    if (this.healthPoints <= 0) {
      return `You can't attack while dead. Next time don't let your health points reach 0.`;
    }

    if (target.healthPoints <= 0) {
      return `You have already slained ${
        target.name
      }. You can stop attacking now.`;
    }

    target.healthPoints = target.healthPoints - damageDealt;
    if (target.healthPoints > 0) {
      return `You mortal striked and dealt ${damageDealt} damage points to ${
        target.name
      }, remaining health points: ${target.healthPoints}`;
    } else {
      return `You have obliterated ${
        target.name
      }, bringing great honor to the ${this.team}`;
    }
  }
}

class Villain extends Humanoid {
  constructor(attributes) {
    super(attributes);
    this.atkPwr = attributes.atkPwr;
  }

  pyroBlast(damageDealt, target) {
    if (this.healthPoints <= 0) {
      return `You can't attack while dead. Next time don't let your health points reach 0.`;
    }

    if (target.healthPoints <= 0) {
      return `You have already slained ${
        target.name
      }. You can stop attacking now.`;
    }
    target.healthPoints = target.healthPoints - damageDealt;
    if (target.healthPoints > 0) {
      return `You casted pyroblast and dealt ${damageDealt} damage points to ${
        target.name
      }, remaining health points: ${target.healthPoints}`;
    } else {
      return `You have incinerated ${
        target.name
      }, bringing great honor to the ${this.team}`;
    }
  }
}

// * Create two new objects, one a villain and one a hero and fight it out with methods!
const saurfang = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 65,
  name: "Varok Saurfang",
  team: "Blackrock Clan",
  weapons: ["Arcanite Reaper"],
  language: "Hordish",
  atkPwr: 10
});

const kaelthas = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 55,
  name: "Kael'thas Sunstrider",
  team: "Sunfury",
  weapons: ["Felo'melorn"],
  language: "Elvish",
  atkPwr: 15
});

console.log(saurfang.mortalStrike(saurfang.dmgCalc(), kaelthas));
console.log(kaelthas.pyroBlast(kaelthas.dmgCalc(), saurfang));
console.log(saurfang.mortalStrike(saurfang.dmgCalc(), kaelthas));
console.log(kaelthas.pyroBlast(kaelthas.dmgCalc(), saurfang));
console.log(saurfang.mortalStrike(saurfang.dmgCalc(), kaelthas));
console.log(kaelthas.pyroBlast(kaelthas.dmgCalc(), saurfang));
console.log(saurfang.mortalStrike(saurfang.dmgCalc(), kaelthas));
console.log(kaelthas.pyroBlast(kaelthas.dmgCalc(), saurfang));
console.log(saurfang.mortalStrike(saurfang.dmgCalc(), kaelthas));
console.log(kaelthas.pyroBlast(kaelthas.dmgCalc(), saurfang));
console.log(saurfang.mortalStrike(saurfang.dmgCalc(), kaelthas));
