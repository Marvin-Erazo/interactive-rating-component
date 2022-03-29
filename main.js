
function changeColor(e){
  selectedRate();
  let btn = e.target;
  btn.className = btn.className == "selected" ? "rate-btn":"selected";
}

function selectedRate(){
  let selectedBtns = document.querySelectorAll('.selected');
  if(selectedBtns.length>0){
    selectedBtns.forEach(element => {
      element.className = "rate-btn"
    });
  }
}

function verify(){
  let selectedBtns = document.querySelectorAll('.selected');
  if(selectedBtns.length === 0){
    alert("select a rate");
  }
  else{
    showThanks();
  }
}

function showThanks(){
  let ratecard = document.getElementsByClassName("rate-card");
  ratecard[0].style.display = "none";

  let modal = document.getElementsByClassName("modal")[0].style.display = "flex";
  
  document.getElementsByClassName("rate")[0].innerHTML = "You selected "+ document.getElementsByClassName("selected")[0].value +" out of 5";
}