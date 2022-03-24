import { createMovie } from "./getMovieMarkup.js";
import { movie } from "./lesFilms.js";

const searchInput = document.querySelector(".search-input");



movie.forEach(movie => createMovie(movie));

searchInput.addEventListener("input", e => {
  const value = e.target.value
  console.log(value);
  movie.forEach(film => {
    const isVisible = film.name.includes(value) || film.cat.includes(value) || film.rea.includes(value) || film.act.includes(value);
    document.querySelector(`#movie-${film.id}`).classList.toggle("hide", !isVisible);
  })
}); 


const dropDownButtons = document.getElementsByClassName("dropDownButton");
const dropDownButtonsArr = Array.prototype.slice.call(dropDownButtons);

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
