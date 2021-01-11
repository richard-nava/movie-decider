import { getSavedMovies } from "./utils.js"

import { Movie } from "./movie.js";
import { Watchlist } from './watchlist.js';
import * as Utils from "./utils.js";

const movieID = location.hash.substring(1)
let movies = getSavedMovies();
let movie = movies.find(function(movie){
    return movie.id === movieID
})

if(movie === undefined){
    location.assign('./index.html')
}

document.querySelector('#remove-movie').addEventListener('click', function(e){
  
})