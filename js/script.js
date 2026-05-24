let scenario = [];

let index = 0;

const nameElement = document.getElementById("name");

const textElement = document.getElementById("text");

const nextBtn = document.getElementById("next-btn");

fetch("./data/scenario.json")
  .then(response => response.json())
  .then(data => {

    scenario = data;

    showMessage();

  });

function showMessage() {

  const message = scenario[index];

  nameElement.textContent = message.name;

  textElement.textContent = message.text;

}


document.body.addEventListener("click", () => {

  index++;

  if (index >= scenario.length) {

    index = 0;

  }

  showMessage();

});