const outputDiv = document.getElementById('pets');

const domString = (petsArray) => {
  let domString = '';
  petsArray.forEach((pet) => {
    domString += `<img class="photo" src=${pet.imageUrl}>`;
    domString += `<h2>${pet.name}</h2>`;
    domString += `<p>${pet.color}</p>`;
    domString += `<p class="skill">${pet.specialSkill}</p>`;
    domString += `<p>${pet.type}</p>`;
  });
  return domString;
};

const printToDom = (petsArray) => {
  outputDiv.innerHTML = domString(petsArray);

};

module.exports = printToDom;
