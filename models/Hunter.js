const Traveler  = require("./Traveler");
class Hunter extends Traveler{
    constructor(name){
        super(name);
        this._food = 2
        this._isHealthy = true
    }

    hunt(){
        this.food += 5
    }

    eat(){
        
        if (this.food === 1){
            this.food = 0
        }
        else if (this.food > 1) {
            this.food -= 2;
        }
        else{
            this.isHealthy = false;
        }
        console.log(this.isHealthy)
    }

    giveFood(traveler,numOfFoodUnits){

        if (traveler.food >= numOfFoodUnits){

            this.food -= numOfFoodUnits;
            traveler.food += numOfFoodUnits; 
            
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

module.exports = Hunter