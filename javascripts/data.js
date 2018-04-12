const loadPets = require('./pets');
const printToDom = require('./dom');

let petsArray = '';

const animalOnLoad = function () {
  petsArray = JSON.parse(this.responseText).pets;
  printToDom(petsArray);
};

const noAnimals = function () {
  console.log('Nothing To See Here');
};

const success = () => {
  loadPets(animalOnLoad, noAnimals);
};

const showPets = () => {
  return petsArray;
};

module.exports = {
  success,
  showPets,
};
