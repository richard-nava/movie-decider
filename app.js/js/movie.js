export class Movie {
    constructor(id, title, watched){
        this.id = id;
        this.title = title; 
        this.watched = watched;
    }

    get title(){
        return this._title
    }

    set title(value){
        this._title = value.trim();
    }

    get id(){
        return this._id;
    }

    set id(value){
        this._id = value;
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

