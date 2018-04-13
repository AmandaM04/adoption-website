const loadPets = require('./pets');
const printToDom = require('./dom');
const events = require('./events');

let petsArray = '';

const animalOnLoad = function () {
  petsArray = JSON.parse(this.responseText).pets;
  printToDom(petsArray);
  events.addEventListeners();
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
