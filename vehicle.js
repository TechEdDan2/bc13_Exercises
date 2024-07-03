// Part 01
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return 'Beep';
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}
// Part 02
class Car extends Vehicle {
    constructor(mk, md, yr) {
        super(mk, md, yr);
        this.numWheels = 4;
    }

}

//Part 03
class Motorcycle extends Vehicle {
    constructor(mk, md, yr) {
        super(mk, md, yr);
        this.numWheels = 2;
    }
    revEngine() {
        return 'VROOM!!!';
    }

}

//Part 04
class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.maxCap = capacity;
    }
    add(vObj) {
        if (!(vObj instanceof Vehicle)) {
            return "You can't park that here";
        }
        if (this.maxCap < this.vehicles.length) {
            this.vehicles.push(vObj);
            return "It's in the Garage";
        } else {
            return `Sorry, we're full; the Garage Max Capacity is ${this.maxCap}`;
        }

    }
}