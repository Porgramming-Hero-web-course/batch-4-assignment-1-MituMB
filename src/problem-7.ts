// Problem 7:
// Create a TypeScript class Car with properties make, model, and year. 
// Include a method getCarAge that returns the car's age based on the current year.

class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // calculate the car's age
    getCarAge(currentYear: number): number {
        return currentYear - this.year;
    }
}

const car = new Car("Honda", "Civic", 2018);
// car.getCarAge();

console.log(`Car age is ${car.getCarAge(2024)} year`);



