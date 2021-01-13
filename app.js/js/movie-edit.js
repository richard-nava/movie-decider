import { getSavedMovies } from "./utils.js"

import { Movie } from "./movie.js";
import { Watchlist } from './watchlist.js';
import * as Utils from "./utils.js";

const movieID = location.hash.substring(1)
let movies = getSavedMovies();
let movie = movies.find(function(movie){
    return movie.id === movieID
})

if(!movie){
    location.assign('./index.html')
}

// Give intial values
document.querySelector('#movie-title-set').value = movie.title
let watchedTrue = document.querySelector('#true1')
let watchedFalse = document.querySelector('#false1')
if(movie.watched){
    watchedTrue.checked = true
} else {
    watchedFalse.checked = true
}

// Go back to homepage
document.querySelector('#go-home').addEventListener('click', function(e){
    location.assign('./index.html')
})

// Remove movie from watchlist listener
document.querySelector('#remove-movie').addEventListener('click', function(e){
    let movieIndex = movies.findIndex(function (movie){
        return movie.id === movieID
    });
    let answer = confirm(`Are you sure you wish to delete ${movie.title}?`)
    
    if(answer){
        movies.splice(movieIndex, 1)
        Utils.saveMovies(movies);
        location.assign('./index.html')
    }
    
})

// Edit current movie properties
document.querySelector('#edit-movie').addEventListener('submit', function(e){
    e.preventDefault()
    let notifArea = document.querySelector('#notification-area');
    let editTitle = e.target.elements.updatedTitle.value
    let editWatched = e.target.elements.watchedcheck.value
    let watchedVal;
    if(editWatched === "true"){
        watchedVal = true
    } else {
        watchedVal = false
    }
    
    movie.title = editTitle
    console.log(watchedVal)
    movie.watched = watchedVal
    Utils.saveMovies(movies)
    
    notifArea.appendChild(changeNotification(movie))
    setTimeout(function(){
        notifArea.innerHTML = ''
    }, 5000)
})

const changeNotification = function(movie){
    let notif = document.createElement('h5')
    notif.style.color = "red";
    notif.textContent = `Edits to ${movie.title} were saved!`
    
    return notif;
}


const stopNotif = function(){
    clearInterval(changeNotification)
}