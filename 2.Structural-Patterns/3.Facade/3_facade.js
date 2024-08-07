class Conveyor {
    setBody() {
        console.log('Body set!');
    }
    getEngine() {
        console.log('Dismantle Engine!');
    }
    setEngine() {
        console.log('Engine set!');
    }
    setInterior() {
        console.log('Exterior added!');
    }
    changeInterior() {
        console.log('Update interior!');
    }
    setExterior() {
        console.log('Added interior!');
    }
    setWheels() {
        console.log('Wheels!');
    }
    addElectronics() {
        console.log('Added electronics!');
    }
    paint() {
        console.log('Car painted!');
    }
}

class ConveyorFacade {
    constructor(car) {
        this.car = car;
    }
    // Метод фасада который включает и скрывает логику
    assembleCar() {
        this.car.setBody();
        this.car.setEngine();
        this.car.setInterior();
        this.car.setExterior();
        this.car.setWheels();
        this.car.addElectronics();
        this.car.paint();
    }
}

const car = new ConveyorFacade(new Conveyor());
car.assembleCar();
