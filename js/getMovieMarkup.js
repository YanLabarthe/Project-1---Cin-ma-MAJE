/**
 * 
 * @param {*} movie object movie
 */

// export const createMovie = (image, titre, note, avertissement, butstart, butend, butvo, date, cat2, realisateur, acteur, synopsis) => {
    export const getMovieMarkup = (movie) => `
<hr>
    <section id="movie-${movie.id}">
     <button class="dropDownButton">
         <img src="${movie.img}" alt="affiche film1" id="imageAffiche" />
     </button>
     <div id="filmDescription">
         <h2 class="movieTitle">${movie.name}</h2>
         <div class="dropDownContent">
             <div id="mainInfoWrap">
                 <div id="infoPartOne">
                     <p id="infoType">Note <span id="text"> ${movie.note}/5 </span></p>
                     <p id="infoType"><span id="text">${movie.avert}</span>
                     </p>
                 </div>
             </div>
             <div id="infoPartTwo">
                 <button id="theaterInfoButton">
                     <div id="theaterInfoWrap">
                         <div id="seanceHeureDebut">${movie.button.butStart}</div>
                         <div id="seanceHeureFin">${movie.button.butEnd}</div>
                         <div id="seanceLangue">${movie.button.butVo}</div>
                     </div>
                 </button>
                 <button id="theaterInfoButton">
                     <div id="theaterInfoWrap">
                         <div id="seanceHeureDebut">${movie.button.butStart}</div>
                         <div id="seanceHeureFin">${movie.button.butEnd}</div>
                         <div id="seanceLangue">${movie.button.butVo}</div>
                     </div>
                 </button>
             </div>
             <div id="infoPartThree"></div>
             <div id="movieInfoWrap">
                 <p id="infoType">Date de sortie <span id="text">${movie.date}</span></p>
                 <p id="infoType">Catégorie <span id="text">${movie.cat.join(', ')}</span></p>
                 <p id="infoType">Réalisateur <span id="text">${movie.rea.join(', ')}</span></p>
                 <p id="infoType">Acteurs principaux <span id="text">${movie.act.join(', ')}</span>
                 </p>
                 <p id="infoType">Synopsis:</p>
                 <p><span id="text" id="textSynopsis">${movie.synop}
                     </span></p>
             </div>
         </div>
     </div>
     </div>`;

 export const createMovie = (movie) => {
     document.querySelector("main").innerHTML += getMovieMarkup(movie);
 }