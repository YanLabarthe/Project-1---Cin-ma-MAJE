import { createMovie } from "./getMovieMarkup.js";
import { movie } from "./lesFilms.js";

console.table(movie[0]);
console.log(movie[0].img);
console.log(createMovie(movie[0]));
const dropDownButtons = document.getElementsByClassName("dropDownButton");
const dropDownButtonsArr = Array.prototype.slice.call( dropDownButtons )

dropDownButtonsArr.forEach(dropDownButton => {
  dropDownButton.addEventListener("click", function () {
    this.nextElementSibling.querySelector(".dropDownContent").classList.toggle("visible");
  })
});

/*     
Possible style animation du expend and collapse 
var content = this.nextElementSibling;
if (content.style.maxHeight){
  content.style.maxHeight = null;
} else {
  content.style.maxHeight = content.scrollHeight + "px";
}
console.log(content)
}); */
