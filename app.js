let array = [];
let button = document.getElementById("gen");
let button2 = document.getElementById("roll");
let button3 = document.getElementById("sum");
button.addEventListener("click", newDie);

class Die {
  constructor() {
    this.div = document.createElement("div");
    this.container = document.getElementById("con2");
    this.container.appendChild(this.div);
    this.div.className = "die";
    this.diceRoll();
    this.div.addEventListener("click", () => {
      this.diceRoll();
    });
    this.div.addEventListener("dblclick", () => {
      this.div.remove();
      let index = array.indexOf(this);
      array.splice(index, 1);
    });
  }
  diceRoll() {
    let dieFace = ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"];
    this.value = Math.floor(Math.random() * 6);
    this.div.innerHTML = dieFace[this.value];
  }
}

function newDie() {
  let dice = new Die();
  array.push(dice);
}

button2.addEventListener("click", function () {
  for (let i = 0; i < array.length; i++) {
    array[i].diceRoll();
  }
});

button3.addEventListener("click", () => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i].value + 1;
  }
  alert(`the sum of the current die is ${sum}.`);
});
