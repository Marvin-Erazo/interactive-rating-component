function changeColor(e){

  let selectedBtns = document.querySelectorAll('.selected');
  
  if(selectedBtns.length>0){
    selectedBtns.forEach(element => {
      element.className = "rate-btn"
    });
  }

  let btn = e.target;

  btn.className = btn.className == "selected" ? "rate-btn":"selected";
}