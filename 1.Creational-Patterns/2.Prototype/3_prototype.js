/*
  Прототип — это порождающий паттерн проектирования, который позволяет копировать объекты, не вдаваясь в подробности их реализации.
  Проще говоря мы можем реализовать метод clone который при вызове создает точную копию исходного объекта,
  при этом разработчику который использует clone не нужно думать что же там под капотом. После этого можно
  каждому объекту точечно поменять нужные свойства.
*/

class TeslaCar {
    constructor(model, price, interior, autopilot) {
        this.model = model;
        this.price = price;
        this.interior = interior;
        this.autopilot = autopilot;
    }
    // Реализуем метод клонирования исходного объекта, все свойства при этом будут уже заданы
    clone() {
        return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
    }
}
// Создаем объект прототип
const prototypeCar = new TeslaCar("S", 10000, "Black", false);
// Создаем объекты на основе прототипа, они все одинаковые
const car1 = prototypeCar.clone();
const car2 = prototypeCar.clone();
const car3 = prototypeCar.clone();
// Изменяем свойства созданных объектов в зависимости от того что нам нужно от конкретного объекта
car1.interior = "White";
car2.autopilot = true;
