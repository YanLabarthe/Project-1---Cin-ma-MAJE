import { createMovie } from "./getMovieMarkup.js";
import { movie as movies } from "./lesFilms.js";

const searchInput = document.querySelector(".search-input");
const autocompleteResults = document.querySelector(".autocomplete-results");

//================== Vide la liste de l'auto complétion ====================

const closeAutoComplete = () => {
  autocompleteResults.innerHTML = "";
};



//==================searchs the input=======================================
searchInput.addEventListener("input", (e) => {
  const value = e.target.value;
  movies.forEach((film) => {
    const isVisible =
      film.name.includes(value) ||
      film.cat.includes(value) ||
      film.rea.includes(value) ||
      film.act.includes(value);
    document
      .querySelector(`#movie-${film.id}`)
      .classList.toggle("hide", !isVisible);
  });
});



// =========================Auto-Complete=====================================
searchInput.addEventListener("input", (e) => {
  const value = e.target.value;

  if (!value) {
    closeAutoComplete();
    return false;
  }

  autocompleteResults.innerHTML = "";

  movies.forEach((movie) => {
    if (
      movie.name.substr(0, value.length).toUpperCase() == value.toUpperCase()
    ) {
      const b = document.createElement("div");
      b.innerHTML = `
        <img src="${movie.img}" alt="" width="100" />
        <strong> ${movie.name.substr(0, value.length)} </strong>
        ${movie.name.substr(value.length)}
      `;

      autocompleteResults.appendChild(b);

      b.addEventListener("click", (e) => {
        window.location.hash = `#movie-${movie.id}`;
        closeAutoComplete();
      });
    }
  });
});



//=========================Créé l'HTML========================================

movies.forEach((movie) => createMovie(movie));



//=========Le dropDown de la version mobile ==================================
const dropDownButtons = document.getElementsByClassName("dropDownButton");
const dropDownButtonsArr = Array.prototype.slice.call(dropDownButtons);

dropDownButtonsArr.forEach((dropDownButton) => {
  dropDownButton.addEventListener("click", function () {
    this.nextElementSibling
      .querySelector(".dropDownContent")
      .classList.toggle("visible");
  });
});

