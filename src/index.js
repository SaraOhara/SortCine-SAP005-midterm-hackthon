import carrossel from "./carrossel.js";
import movieGenres from "./genres.js"

let imgBaseUrl = "https://image.tmdb.org/t/p/w200";
let imgSrc = "";
let posters = ` <button "type="button"
class="buttonSorteio" id="btnSorteio">Sorteio</button>
<h3 id="resultado"></h3>`;
let filmes;


const getPoster = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(json => json.results)
}

function showMovieInfo(url) {
  getPoster(url).then(moviesList => {
    console.log(moviesList);
    filmes = moviesList
    for (let movie of moviesList) {
      // console.log(movie.poster_path);
      imgSrc = imgBaseUrl + movie.poster_path;
      // console.log(imgSrc);
      posters += `
        <div class="poster">
          <div class="poster-container">
            <div class="poster-front">
              <img src="${imgSrc}">
            </div>
            <div class="poster-back">
              <h3>${movie.title}</h3>
              <p>Sinopse: ${movie.overview}</p>
            </div>
          </div>
        </div>
      `;
    }
    document.getElementById("root").innerHTML = posters;
    sorteio()
  })
}

const filterAction = document.getElementById("action");
filterAction.addEventListener("click", () => {
  showMovieInfo(movieGenres.actionNfx);
  showMovieInfo(movieGenres.actionAmz);
})

const filterAdventure = document.getElementById("adventure");
filterAdventure.addEventListener("click", () => {
  showMovieInfo(movieGenres.adventureNfx);
  showMovieInfo(movieGenres.adventureAmz);
})

const filterAnimation = document.getElementById("animation");
filterAnimation.addEventListener("click", () => {
  showMovieInfo(movieGenres.animationNfx);
  showMovieInfo(movieGenres.animationAmz);
})

const filterComedy = document.getElementById("comedy");
filterComedy.addEventListener("click", () => {
  showMovieInfo(movieGenres.comedyNfx);
  showMovieInfo(movieGenres.comedyAmz);
})

const filterCrime = document.getElementById("crime");
filterCrime.addEventListener("click", () => {
  showMovieInfo(movieGenres.crimeNfx);
  showMovieInfo(movieGenres.crimeAmz);
})

const filterDocumentary = document.getElementById("documentary");
filterDocumentary.addEventListener("click", () => {
  showMovieInfo(movieGenres.documentaryNfx);
  showMovieInfo(movieGenres.documentaryAmz);
})

const filterDrama = document.getElementById("drama");
filterDrama.addEventListener("click", () => {
  showMovieInfo(movieGenres.dramaNfx);
  showMovieInfo(movieGenres.dramaAmz);
})

const filterFamily = document.getElementById("family");
filterFamily.addEventListener("click", () => {
  showMovieInfo(movieGenres.familyNfx);
  showMovieInfo(movieGenres.familyAmz);
})

const filterFantasy = document.getElementById("fantasy");
filterFantasy.addEventListener("click", () => {
  showMovieInfo(movieGenres.fantasyNfx);
  showMovieInfo(movieGenres.fantasyAmz);
})

const filterHistory = document.getElementById("history");
filterHistory.addEventListener("click", () => {
  showMovieInfo(movieGenres.historyNfx);
  showMovieInfo(movieGenres.historyAmz);
})

const filterHorror = document.getElementById("horror");
filterHorror.addEventListener("click", () => {
  showMovieInfo(movieGenres.horrorNfx);
  showMovieInfo(movieGenres.horrorAmz);
})

const filterMusic = document.getElementById("music");
filterMusic.addEventListener("click", () => {
  showMovieInfo(movieGenres.musicNfx);
  showMovieInfo(movieGenres.musicAmz);
})

const filterMystery = document.getElementById("mystery");
filterMystery.addEventListener("click", () => {
  showMovieInfo(movieGenres.mysteryNfx);
  showMovieInfo(movieGenres.mysteryAmz);
})

const filterRomance = document.getElementById("romance");
filterRomance.addEventListener("click", () => {
  showMovieInfo(movieGenres.romanceNfx);
  showMovieInfo(movieGenres.romanceAmz);
})

const filterThriller = document.getElementById("thriller");
filterThriller.addEventListener("click", () => {
  showMovieInfo(movieGenres.thrillerNfx);
  showMovieInfo(movieGenres.thrillerAmz);
})

const filterScifi = document.getElementById("scifi");
filterScifi.addEventListener("click", () => {
  showMovieInfo(movieGenres.scifiNfx);
  showMovieInfo(movieGenres.scifiAmz);
})

const filterWestern = document.getElementById("western");
filterWestern.addEventListener("click", () => {
  showMovieInfo(movieGenres.westernNfx);
  showMovieInfo(movieGenres.westernAmz);
})


function sorteio() {

  const btn = document.querySelector("#btnSorteio")
  btn.addEventListener("click", () => {
    //console.log(filmes)
    const h3 = document.querySelector("#resultado");

    carrossel.funcaoSorteio(h3, filmes)
  })
}
