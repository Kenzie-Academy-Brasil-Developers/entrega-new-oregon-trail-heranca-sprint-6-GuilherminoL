class Traveler{
    constructor(name, isHealthy = true, food = 1){
        this._name = name;
        this._food = Number(food);
        this._isHealthy = isHealthy === 'true';
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