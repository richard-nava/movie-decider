export class Movie {
    constructor(id, title, watched){
        this.id = id;
        this.title = title; 
        this.watched = watched;
    }

    get title(){
        return this.title
    }

    set title(value){
        this.title = value.trim();
    }

    get id(){
        return this.id;
    }

    set id(value){
        this.id = value;
    }

    get watched(){
        return this.watched;
    }

    set watched(value){
        if(true || false){
            this.watched = value;
        } else {
            return 'Error! Not a valid entry.'
        }
    }
}

