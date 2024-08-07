// Класс отвечающий за цвет
class Color {
    constructor(type) {
        this.type = type;
    }
    // Реализует метод с логикой работы с цветом
    get() {
        return this.type;
    }
}
// Вариант работы с цветом
class BlackColor extends Color {
    constructor() {
        super("dark-black");
    }
}
// Класс отвечающий за модели автомобилей. Должен знать только ссылку на цвет.
class Model {
    constructor(color) {
        this.color = color;
    }
}
// Вариант модели автомобиля, использует связь с цветом для получения данных
class Bmw extends Model {
    constructor(color) {
        super(color);
    }
    // Тот самый мост который является связкой с цветом и его данными
    paint() {
        return `Auto: Bmw, Color: ${this.color.get()}`;
    }
}
// Создаем модель автомобиля и передаем ему цвет. Дальше модель ничего о его логики не знает но имеет мост для связи с цветом.
const blackBMW = new Bmw(new BlackColor());
console.log(blackBMW.paint());
