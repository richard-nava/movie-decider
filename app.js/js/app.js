import { Movie } from "./movie.js";
import { Watchlist } from './watchlist.js';
import * as Utils from "./utils.js";

let movies = Utils.getSavedMovies()


// *****************************************

const filters = {
    searchText: '',
    hideWatched : false
}

// render list of movies to screen
Utils.renderMovies(movies,filters)


// ******************************************

// Add movie form
document.querySelector('#add-movie-form').addEventListener('submit', function(e){
    e.preventDefault()
    const newMovieTitle = e.target.elements.addMovie.value
    const newID = uuidv4()


    var radios = document.querySelectorAll('input[name="watchedcheck"]')
    var val

    for (const radio of radios){
        //console.log(radios.value)
        if(radio.checked && radio.value == "true"){
            val = true

            break;
        } else if (radio.checked && radio.value == "false"){
            val = false
        } else {
            val = undefined
        }
    };

    let newMovie = {
        id: uuidv4(),
        title: newMovieTitle,
        watched: val
    }
    if(val === undefined ){
        alert('Let me know if you watched it already!')
    } else if (newMovieTitle <= 0) {
        alert('Enter a movie title!')
    } else {
        movies.push(newMovie)
        Utils.saveMovies(movies)
        document.querySelector('#add-movie').value = ''
        document.querySelector('#true1').checked = false
        document.querySelector('#false1').checked = false
    }
    
    
    console.log(movies)
    Utils.renderMovies(movies,filters);
})

document.querySelector('#hide-watched').addEventListener('change', function(e){
    filters.hideWatched = e.target.checked
    Utils.renderMovies(movies,filters)
})

// Search query listener 
document.querySelector('#search').addEventListener('input', function(e){
    filters.searchText = e.target.value

    Utils.renderMovies(movies,filters)
})

document.querySelector("[name='spin']").addEventListener('click', function(e){
    movieChooser(movies)
})



// ***************************************************************
// *********************** movie chooser *************************
// ***************************************************************
export const movieChooser = function(movies){
    
    // get all unwatched movies
    let unwatched = movies.filter(function (movie){
        return movie.watched === false
    })

    // Starts the chooser
    let rotation = setInterval(() => {chooser(unwatched)}, 100);

    // ends the chooser after 3 secs 
    setTimeout(function(){clearInterval(rotation)},3000)
    
}

// Chooser > gets a random movie, generates dom, displays dom, clears div
export const chooser = function(movies){
    document.querySelector('#random-titles').innerHTML = ''
    let movie = movies[Math.floor(Math.random() * movies.length)]
    let movieEl = titleDom(movie)
    titleDisp(movieEl)
}


// create DOM for movie chooser
export const titleDom = function(movie){
    const textEl = document.createElement('h2')
    textEl.textContent = movie.title
    return textEl
}

// appends the Title to the index
export const titleDisp = function(titleEl){
    document.querySelector('#random-titles').appendChild(titleEl)
}

// stops the chooser
export const stopChooser = function(){
    clearInterval(chooser)
}


//displays each unwatched title dom for half sec
export const showTitles = function(movies){
    movies.forEach(function (movie){
        let titleEl = titleDom(movie)
        setInterval(function(){titleDisp(titleEl)},400)
    })
}

