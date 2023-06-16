const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=81136a994896492c8b71e18847d5f2ca&page=1'

const Img_path = 'https://image.tmdb.org/t/p/w1280'


const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=81136a994896492c8b71e18847d5f2ca&query="'


const form = document.getElementById('form');
const search = document.getElementById('search')
const main = document.getElementById('main')
const btn = document.getElementById('btn')


//get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const movieEL = document.createElement('div')

        movieEL.classList.add('movie')
        movieEL.innerHTML =`
       
            <img src="${Img_path + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassBYrate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
               <div class ="view"> ${overview}</div>
            </div>
     
        `
        main.appendChild(movieEL)

    });
}

function getClassBYrate (vote){
    if(vote >= 8){
        return 'green'

    } else if (vote >= 5){
        return 'orange'
    }
    else{
        return 'red'
    }
}

//  form.addEventListener('submit', (e) => {
//      e.preventDefault
//      const searchterm = search.value

//      if (searchterm && searchterm != '') {      
//          getMovies(SEARCH_API+searchterm)    
//          search.value =''
//      }
//      else {
//          window.location.reload()
//      }
//  })



btn.addEventListener('click', (e) => {
    e.preventDefault()

    const searchterm = search.value

    if (searchterm && searchterm != '') {
        
        getMovies(SEARCH_API+searchterm)
       

        search.value =''
    }
    else {
        window.location.reload()
    }
})

form.addEventListener('submit', (f) => {
    f.preventDefault
    const searchterm = search.value
    
    if (searchterm && searchterm != '') {      
        getMovies(SEARCH_API+searchterm)    
        search.value =''
    }
    else {
        window.location.reload()
    }
})






