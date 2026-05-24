let scenario = [];
let index = 0;

const nameElement = document.getElementById("name");
const textElement = document.getElementById("text");
const bgElement =  document.getElementById("bg");

/*================
シナリオ読み込み
================*/
fetch("./data/scenario.json")
  .then(response => response.json())
  .then(data => {
    scenario = data;
    showMessage();
  });

/*================
次のメッセージを表示
================*/
function showMessage() {
  const message = scenario[index];
  nameElement.textContent = message.name;
  textElement.textContent = message.text;
  if (message.bg) { /*背景画像があれば上書き*/
    backgroundElement.src = message.bg;
  }
}

/*================
クリックしたら(画面全体)
================*/
document.body.addEventListener("click", () => {
  index++;
  if (index >= scenario.length) {
    index = 0;
  }
  showMessage();
});
