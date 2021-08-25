class Wagon {
    constructor(capacity){
        this.capacity = capacity;
        this.passengers = []
    }
    getAvailableSeatCount(){
        let availableSeat = this.capacity - this.passengers.length 
        return availableSeat
    }
    join(passenger){
        if (this.capacity > this.passengers.length){
            this.passengers.push(passenger)
        }
    }
    shouldQuarantine(){
        let output = false
        this.passengers.map((person)=>{
            if (! person.isHealthy){
                output = true
            }
        })
        return output
    }
    totalFood(){
        let total = 0
        this.passengers.map((person)=>{
            total += person.food
        })
        return total
    }
}

module.exports = Wagon;