const addEventListeners = (petArray) => {
  const catButton = document.getElementById('button-cats');
  const dogButton = document.getElementById('button-dogs');
  const dinoButton = document.getElementById('button-dinos');

  catButton.addEventListener('click', () => {
    filterAnimals('cat');
  });

  dogButton.addEventListener('click', () => {
    filterAnimals('dog');
  });

  dinoButton.addEventListener('click', () => {
    filterAnimals('dino');
  });

  const filterAnimals = (animal) => {
    const cards = document.getElementsByClassName('col-md-4');
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = 'none';
    };
    const cards2 = document.getElementsByClassName(animal);
    for (let ii = 0; ii < cards2.length; ii++) {
      cards2[ii].style.display = 'block';
    };
  };
};

addEventListeners();

module.export = addEventListeners;
