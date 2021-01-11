import { Movie } from "./movie.js";
import { Watchlist } from './watchlist.js';
import * as Utils from "./utils.js";

let movies = []

// test data hardcode **********************
let movie1 = {
    title: 'Waiting...',
    watched: true
}

let movie2 = {
    title: 'John Wick',
    watched: true
}

const movie = new Movie('Argo', false)

movies.push(movie, movie1, movie2)


console.log(movie.title)
console.log(movies)

// *****************************************

const filters = {
    searchText: ''
}

let insertAfter = function(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

// render list of movies to screen

const renderMovies = function(movies,filters){
   let filteredMovies = []
   filteredMovies = movies.filter(function(mov){
       return mov.title.toLowerCase().includes(filters.searchText)
   })
   document.querySelector('#movie-list').innerHTML = ''
   filteredMovies.forEach(function (movie){
        const movieEl = document.createElement('p')
        var changeButt
        if(movie.watched === false){
            changeButt = document.createElement('button')
            changeButt.textContent = 'We Watched it!'
        } else {
            changeButt = document.createElement('button')
            changeButt.textContent = 'Unwatch'

        }
        movieEl.textContent = movie.title
        movieEl.style.marginBottom = "0px"
        changeButt.style.marginBottom = "0px"
        changeButt.style.paddingTop = "0px"
        
        const buttName = movie.title
        const regex = /\s+/g
        buttName.replace(regex,'')
        //console.log(`BUTTON NAME = ${buttName.toLowerCase()}*********`)
        let test = 'Here we go'
        console.log(test)
        test.replace(/\s+/g, "")
        console.log(test)
         
        let list = document.querySelector('#movie-list')
        document.querySelector('#movie-list').appendChild(movieEl)
        list.appendChild(changeButt)

    })
}   

renderMovies(movies,filters)

// ******************************************

// Add movie form
document.querySelector('#add-movie-form').addEventListener('submit', function(e){
    e.preventDefault()

    var newMovieTitle = e.target.elements.addMovie.value
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
        title: newMovieTitle,
        watched: val
    }
    if(val === undefined ){
        alert('Let me know if you watched it already!')
    } else if (newMovieTitle <= 0) {
        alert('Enter a movie title!')
    } else {
        movies.push(newMovie)
        document.querySelector('#add-movie').value = ''
        document.querySelector('#true1').checked = false
        document.querySelector('#false1').checked = false
    }

    

    console.log(movies)
    renderMovies(movies,filters);
})



// Search query listener 
document.querySelector('#search').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderMovies(movies,filters)
})

// generate the DOM structure for a movie
const generateMovieDom = function(movie){
    const movieEl = document.createElement('p')
    const button = document.createElement('button')



    if(movie.title.length > 0){
        movieEl.textContent = movie.title
    } else {
        movieEl.textContent = 'Unnamed movie'
    }

    if(movie.watched === true){
        button.textContent = 'Unwatched'
    } else {
        button.textContent = 'We watched it!'
    }

    noteEl.appendChild(button)

    return movieEl

}