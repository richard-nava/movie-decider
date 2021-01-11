import { Movie } from "./movie.js";
import { Watchlist } from './watchlist.js';
import * as Utils from "./utils.js";

let movies = Utils.getSavedMovies()


// *****************************************

const filters = {
    searchText: ''
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
        console.log(radios.value)
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



// Search query listener 
document.querySelector('#search').addEventListener('input', function(e){
    filters.searchText = e.target.value
    Utils.renderMovies(movies,filters)
})

document.querySelector("[name='spin']").addEventListener('click', function(e){
    movieChooser(movies)
})

// *********************************************
// ************** movie chooser ****************
// *********************************************

// on click, choose a random movie from a list of unwatched movies
// display that chosen movie to the screen
// if confirm button is clicked, change watched status to watched and have an alert pop up confirming selection

export const movieChooser = function(movies){
    let unwatched = movies.filter(function (movie){
        return movie.watched === false
    })
    console.log(unwatched)
    
}