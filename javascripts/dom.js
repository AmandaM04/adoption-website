const outputDiv = document.getElementById('pets');

const domString = (petsArray) => {
  let domString = '';
  petsArray.forEach((pet) => {
    switch (pet.type) {
      case 'cat':
        domString += `<div class="col-md-4 cat">`;
        break;
      case 'dog':
        domString += `<div class="col-md-4 dog">`;
        break;
      case 'dino':
        domString += `<div class="col-md-4 dino">`;
        break;
    }
    domString += `<div class="panel panel-default card">
    <div class="panel-heading">`;
    domString +=   `<h4>${pet.name}</h4>`;
    domString += `</div>`;
    domString += `<div class="panel-body">`;
    domString +=   `<img class="photo" src=${pet.imageUrl}>`;
    domString +=   `<p class="center">${pet.color}</p>`;
    domString +=   `<p class="center">${pet.specialSkill}</p>`;
    domString += `</div>`;
    switch (pet.type) {
      case 'cat':
        domString += `<div class="panel-footer blue">`;
        break;
      case 'dog':
        domString += `<div class="panel-footer green">`;
        break;
      case 'dino':
        domString += `<div class="panel-footer orange">`;
        break;
    }
    domString +=   `<p class="center">${pet.type}</p>`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `</div>`;
  });
  return domString;
};

const printToDom = (petsArray) => {
  outputDiv.innerHTML = domString(petsArray);

};

module.exports = printToDom;
