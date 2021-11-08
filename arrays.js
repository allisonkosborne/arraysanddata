/* For each of the sections, consider the array and the method.  What would you expect the output to be? */

let letters = ["l", "s", "a", "r", "d", "f"];

// letters.sort('a','d','f','l','r','s')

// letters.pop('l','s','a','r','d')

// letters.push('l','s','a','r','d','f','q')

// letters.shift('s','a','r','d','f')

// letters.unshift('y','l','s','a','r','d','f')

// letters.slice(1,2)('s')

let names = ["John", "Mandeep", "Ruby", "Rose", "Jackson"];

// names.concat(letters)

// names.join(' ')

// names.reverse()

let superheroes = [
  "Wonder Woman",
  "Captain America",
  "Spiderman",
  "Batman",
  "The Flash",
];

// iterate over superheroes and console log the superhero's name in the following sentance "<NAME> is a superhero!".

let superheroesDetails = [
  {
    id: 1,
    name: "Wonder Woman",
    isDC: true,
  },
  {
    id: 1,
    name: "Captain America",
    isDC: true,
  },
  {
    id: 1,
    name: "Batman",
    isDC: true,
  },
  {
    id: 1,
    name: "The Flash",
    isDC: true,
  },
  {
    id: 1,
    name: "Spiderman",
    isDC: false,
  },
];

// iterate over superheroesDetails if the superhero is a DC character (isDC = true)  console log "<the heros name> is in the Justice League.".  Otherwise console log "<the heros name> is a superhero" in the following sentance "<NAME> is a superhero!".

const animals = [
  {
    id: 3,
    name: "Rex",
    trait: "mischievous",
    species: "dog",
    isReal: true,
  },
  {
    id: 9,
    name: "Joel",
    trait: "playful",
    species: "dog",
    isReal: true,
  },
  {
    id: 5,
    name: "Cleo",
    trait: "friendly",
    species: "rat",
    isReal: true,
  },
  {
    id: 8,
    name: "Draco",
    trait: "grumpy",
    species: "dragon",
    isReal: false,
  },
  {
    id: 2,
    name: "George",
    trait: "curious",
    species: "monkey",
    isReal: true,
  },
  {
    id: 1,
    name: "Peanut",
    trait: "needy",
    species: "cat",
    isReal: true,
  },
  {
    id: 1,
    name: "Lexi",
    trait: "shy",
    species: "cat",
    isReal: true,
  },
];

// iterate over animals and console log each animal by the following conditions:
// if the animal is a dragon console log "I am mythical."
// if the animal is a dog console log "I bark."
// if the animal is a monkey or a rat console log the animals name and "I am a rat or monkey."
// if the animal is a cat  is needy console log "I am Sydney's cat."
// if the animal does not meet any of the above conditions console log the animals name, trait and species

// BONUS:  Sort the array of animals by id.
