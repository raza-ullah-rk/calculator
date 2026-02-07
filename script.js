function press(value) {
  document.getElementById("screen").value += value;
}

function calculate() {
  let data = document.getElementById("screen").value;
  document.getElementById("screen").value = eval(data);
}

function clearScreen() {
  document.getElementById("screen").value = "";
}
