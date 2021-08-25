const Traveler  = require("./models/Traveler");
class Hunter extends Travel{
    constructor(name){
        super(name);
        this.food = 2
        this.isHealthy = true
    }

    hunt(){
        this.food += 5
    }

    eat(){
        if (food === 1){
            this.food = 0
        }
        else if (this.food > 1) {
            this.food -= 2;
        }
        else{
            this.isHealthy = false;
        }
    }

    giveFood(traveler,numOfFoodUnits){

        if (traveler.food >= numOfFoodUnits){

            this.food -= numOfFoodUnits;
            traveler.food += numOfFoodUnits; 
            
        }
    }
}