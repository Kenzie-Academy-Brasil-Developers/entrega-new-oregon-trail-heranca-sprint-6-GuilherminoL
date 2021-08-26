const Traveler  = require("./Traveler");
class Doctor extends Traveler{
    constructor(name){
        super(name)
        this._food = 1
        this.isHealthy = true
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

    heal(traveler){
        traveler.isHealthy = true
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
module.exports = Doctor