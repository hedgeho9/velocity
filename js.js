let tapIndex = 1;

function currentTap(clickedIndex) {
  const sc_tap = document.getElementsByClassName("tapBox");
  const tapBtn = document.getElementsByClassName("tapBtn");

  for (let i = 0; i < sc_tap.length; i++) {
    sc_tap[i].style.display = "none";
  }

  for (let i = 0; i < tapBtn.length; i++) {
    tapBtn[i].className = tapBtn[i].className.replace(" active", "");
    console.log(tapBtn);
  }

  tapBtn[clickedIndex - 1].className += " active";
  sc_tap[clickedIndex - 1].style.display = "block";
}

function init() {
  currentTap(tapIndex);
}

init();
