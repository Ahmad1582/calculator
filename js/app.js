let result = document.getElementById("inputtext");
let CurrentResult = "";

function display(value) {
  CurrentResult += value;
  result.value = CurrentResult;
}
