class Traveler{
    constructor(name){
        this._name = name;
        this._food = 1;
        this._isHealthy = true ;
    }

    hunt(){
        this.food += 2;
    }

    eat(){
        if (this.food > 0) {
            this.food--;
        }
        else{
            this.isHealthy = false;
        }
    }
    get food(){
        return this._food
    }
    set food(value){
        this._food = value
    }
    get name(){
        return this._name
    }
    set name(value){
        this._name = value
    }
    get isHealthy(){
        return this._isHealthy
    }
    set isHealthy(value){
        this._isHealthy = value
    }
}

module.exports = Traveler;