export const getSavedMovies = function (){
    const moviesJSON = localStorage.getItem('movies')
    if(moviesJSON !== null){
        return JSON.parse(moviesJSON)
    } else {
        return []
    }
}


export const renderMovies = function(movies,filters){
    let filteredMovies = []
    
    if(filters.hideWatched == false){
        filteredMovies = movies.filter(function(mov){
            return mov.title.toLowerCase().includes(filters.searchText.toLowerCase())
        })
    } else {
        filteredMovies = movies.filter(function(mov){
            return mov.title.toLowerCase().includes(filters.searchText.toLowerCase()) && mov.watched == false
        })
        
    }

    document.querySelector('#movie-list').innerHTML = ''
    

    filteredMovies.forEach(function (movie){

         let movieEl = generateMovieDom(movie)
        
         movieEl.style.marginBottom = "0px"
        
         
         const buttName = movie.title
         const regex = /\s+/g
         buttName.replace(regex,'')
        
         
          
         let list = document.querySelector('#movie-list')
         document.querySelector('#movie-list').appendChild(movieEl)
        
 
     })
 }   


 // generate the DOM structure for a movie
 export const generateMovieDom = function(movie){
    const movieEl = document.createElement('div')
    const textEl = document.createElement('p')
    textEl.setAttribute('href', `./movie.html#${movie.id}`)
    


    if(movie.title.length > 0){
        textEl.textContent = movie.title
    } else {
        textEl.textContent = 'Unnamed movie'
    }

    // create button for view more
    const button = document.createElement('button')
    button.style.marginBottom = "10px"
    button.style.marginLeft = "10px"
    button.style.paddingTop = "0px"
    button.textContent = 'View'
    button.setAttribute('name', 'viewMore')
    button.addEventListener('click', function(e){
        location.assign(`./movie.html#${movie.id}`)
    })

    // attach structures to page
    textEl.appendChild(button)
    movieEl.appendChild(textEl)

    return movieEl

}

// save movies
export const saveMovies = function (movies) {
    localStorage.setItem('movies', JSON.stringify(movies))
}


// remove movie
export const deleteMovie = function(id){
    const movieIndex = movies.findIndex(function(movie){
        return movie.id === id;
    })
    if(movieIndex > -1){
        movies.splice(movieIndex, 1)
    }
}

