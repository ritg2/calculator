const numBtn = document.querySelectorAll(".num");
const input = document.getElementById("input");
const ans = document.querySelector(".ans");
let inputs = "";
let inv = false;
let answ;

numBtn.forEach((num) => {
  num.addEventListener("click", () => {
    input.value += num.textContent;
    inputs += num.textContent;
    console.log(inputs);
  });
});

function equals() {
  ans.textContent = input.value + "=";
  inputs = eval(inputs);
  input.value = inputs;
  answ = inputs + "";
}

function clearAll() {
  input.value = "";
  inputs = "";
}

function multiply() {
  inputs += "*";
  input.value += " × ";
}

function power() {
  inputs += "**";
}

function divide() {
  inputs += "/";
  input.value += " ÷ ";
}

function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

function factorial() {
  input.value += "!";
  let a = inputs.split(" ");
  let b = eval(a[a.length - 1]);
  a.pop();
  inputs = a.join(" ");
  inputs += factorialize(b);
}

function cosine() {
  if (!inv) {
    input.value += "cos(";
    inputs += "Math.cos(";
  } else {
    input.value += "arccos(";
    inputs += "Math.cosh(";
  }
}

function sine() {
  if (!inv) {
    input.value += "sin(";
    inputs += "Math.sin(";
  } else {
    input.value += "arcsin(";
    inputs += "Math.sinh(";
  }
}

function logarithm() {
  input.value += "Log(";
  inputs += "Math.log10(";
}

function tangent() {
  if (!inv) {
    input.value += "tan(";
    inputs += "Math.tan(";
  } else {
    input.value += "arctan(";
    inputs += "Math.tanh(";
  }
}

function squareRoot() {
  input.value += "√(";
  inputs += "Math.sqrt(";
}

function pii() {
  input.value += "π";
  inputs += "Math.PI";
}

function inverse(a) {
  invact();
  inv = !inv;
  a.style.backgroundColor = inv ? "#f1f3f4" : "";
}

function ln() {
  input.value += "ln(";
  inputs += "Math.log(";
}

// function exponential() {
//   let a = inputs.split(" ");
//   let b = eval(a[a.length - 1]);
//   input.value +=
// }

function percent() {
  input.value += "%";
  inputs += "/100";
}

function answer() {
  input.value += "Ans";
  inputs += answ;
}

function toggle(a) {
  a.childNodes.forEach((c, i) => {
    i == 1 || i == 3 ? c.classList.toggle("active") : "";
  });
}

function invact() {
  let h = document.querySelectorAll(".afk");
  if (!inv) {
    h[0].innerHTML = "sin<sup>-1</sup>";
    h[1].innerHTML = "cos<sup>-1</sup>";
    h[2].innerHTML = "tan<sup>-1</sup>";
  } else {
    h[0].textContent = "sin";
    h[1].textContent = "cos";
    h[2].textContent = "tan";
  }
}

document.querySelector(".mode").addEventListener("click", () => {
  document.querySelector(".scientific-keyboard").classList.toggle("show");
  document.querySelector(".basic-keyboard").classList.toggle("hide");
});
