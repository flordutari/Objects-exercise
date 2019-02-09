'use strcict'

let myPenguin = {
  name: 'Wheezy',
  origin: 'Toy Story2',
  author: 'Robert J. Sherman'
}

console.log('Hello, I\'m a penguin and my name is ' + myPenguin.name);

myPenguin.canFly = false;

myPenguin.chirp = console.log('CHIRP CHIRP! Is this what penguins sound like?');

myPenguin.sayHello = function() {
  console.log('Hello, I\'m a penguin and my name is ' + this.name);
}
myPenguin.sayHello();

myPenguin.name = 'Penguin McPenguinFace';

//console.log(myPenguin);

myPenguin.fly = function() {
  if (this.canFly) {
    console.log('I can fly');
  } else {
    console.log('No flying for me!');
  }
}

myPenguin.fly();

myPenguin.canFly = true;

myPenguin.fly();

for (const prop in myPenguin) {
  console.log(`myPenguin.${prop} = ${myPenguin[prop]}`);
}

for (const prop in myPenguin) {
  console.log(`myPenguin.${prop}`);
}

myPenguin.favoriteFoods = ['fish', 'chips', 'carrot'];

console.log(myPenguin.favoriteFoods[1]);

myPenguin.firstFavFood = myPenguin.favoriteFoods[0];

myPenguin.favoriteFoods.push('apple');

console.log(myPenguin.favoriteFoods.length);

myPenguin.favoriteFoods[3] = 'pinapples';

console.log(myPenguin.favoriteFoods);

for (let i = 0; i < myPenguin.favoriteFoods.length; i++) {
  console.log(myPenguin.favoriteFoods[i]);
}

myPenguin.outfit = {hat: 'baseball cap', shirt: 'hawaiian shirt', pants: 'cargo shorts', shoes: 'flip-flops'}

const penguinHatType = myPenguin.outfit.hat;

console.log(penguinHatType);

myPenguin.outfit.accessoire = "pocket watch";

delete myPenguin.outfit.pants;

for (property in myPenguin.outfit) {
  console.log(myPenguin.outfit[property]);
}

var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  }
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  }
};

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  }
};

const penguins = [gunter, ramon, fred];
console.log(penguins[0]);

const secondPenguin = penguins[1];

console.log(penguins[2]);

penguins.push(myPenguin);
console.log(penguins.length);

penguins[0].canFly = true;
console.log(penguins[0]);

penguins[0].sayHello();

for(let i = 0; i < penguins.length; i++){
  console.log(penguins[i].name)
}

for(let i = 0; i < penguins.length; i++){
  penguins[i].sayHello();
}

for(let i = 0; i < penguins.length; i++){
  penguins[i].numberOfFeets = 2;
}

for(let i = 0; i < penguins.length; i++){
  if(penguins[i].canFly === true){
    console.log(`${penguins[i].name} can fly!`)
  }
}

window.addEventListener('load', main);