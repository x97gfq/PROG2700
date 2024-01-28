class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        return `This is a ${this.brand} ${this.model} from ${this.year}.`;
    }
}


let myCar = new Car("Toyota", "Corolla", 2020);


