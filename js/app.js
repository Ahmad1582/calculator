let result = document.getElementById("inputtext");
let CurrentResult = "";

function display(value) {
  CurrentResult += value;
  result.value = CurrentResult;
}
function evl() {
    try {
      result.value = math.evaluate(CurrentResult);
      CurrentResult = result.value;
    } catch (error) {
      result.value = "Error";
      CurrentResult = "";
    }
  }
  function del(){
      let del=document.getElementById("inputtext")
      del.value=del.value.slice(0,-1)
  }
  function clear() {
      let inp = document.getElementById("inputtext");
      inp.value = ""
  }
  let clearbtn=document.getElementById("clear")
  clearbtn.addEventListener("click",()=>{
      result.value=""
      CurrentResult=""
  })