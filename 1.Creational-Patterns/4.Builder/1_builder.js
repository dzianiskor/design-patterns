// Это наш класс объект которого нам нужен
class Car {
    // Задаем ему свойства по умолчанию
    constructor() {
        this.autoPilot = false;
        this.parktronic = false;
        this.signaling = false;
    }
}
// Класс надстройка для задания свойств
class CarBuilder {
    // Создаем объект нужного нам класса и работаем с ним
    constructor() {
        this.car = new Car();
    }
    // Из каждого метода возвращаем THIS что бы получить объект надстройку билдера и продолжить конфиги
    addAutoPilot(autoPilot) {
        this.car.autoPilot = autoPilot;
        return this;
    }
    addParktronic(parktronic) {
        this.car.parktronic = parktronic;
        return this;
    }
    addSignaling(signaling) {
        this.car.signaling = signaling;
        return this;
    }
    // Финальный метод который возвращает готовый объект
    build() {
        return this.car;
    }
}
// По цепочке вызываем конфиги, а в конце строим итоговый объект
const myCar = new CarBuilder().addParktronic(true).build();
console.log(myCar);
