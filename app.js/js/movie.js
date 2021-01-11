export class Movie {
    constructor(title, watched){
        this.title = title; 
        this.watched = watched;
    }

    get title(){
        return this._title
    }

    set title(value){
        this._title = value.trim();
    }

    get watched(){
        return this._watched;
    }

    set watched(value){
        if(true || false){
            this._watched = value;
        } else {
            return 'Error! Not a valid entry.'
        }
    }
}

