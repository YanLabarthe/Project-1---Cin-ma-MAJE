const dropDownButton = document.querySelector(".dropDownButton");
const dropDownContent = document.querySelector(".dropDownContent");

dropDownButton.addEventListener("click", function () {
    // On click we toggle the class visible on the dropdown
    dropDownContent.classList.toggle("visible");
  });