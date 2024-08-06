/*
Абстрактная фабрика задаёт интерфейс создания всех доступных типов продуктов, а каждая конкретная реализация фабрики порождает продукты одной из вариаций.
Клиентский код вызывает методы фабрики для получения продуктов, вместо самостоятельного создания с помощью оператора new.
При этом фабрика сама следит за тем, чтобы создать продукт нужной вариации.
*/

// Создаем фабрику которая в зависимости от параметра возвращает нужную фабрику
class BmwAbstractFactory {
    createFactory(type) {
        switch (type) {
            case "sport":
                return new SportCarFactory();
            case "family":
                return new FamilyCarFactory();
        }
    }
}

// Фабрика имеет метод create который в зависимости от параметра возвращает объект нужного класса
class SportCarFactory {
    create(model) {
        switch (model) {
            case "M3":
                return new M3();
            case "M5":
                return new M5();
        }
    }
}
class FamilyCarFactory {
    create(model) {
        switch (model) {
            case "I3":
                return new I3();
        }
    }
}

class M3 {
    info() {
        return "M3 is a Sport car!";
    }
}
class M5 {
    info() {
        return "M5 is a Sport car!";
    }
}
class I3 {
    info() {
        return "i3 is a Family car!";
    }
}
const bmwAbstractFactory = new BmwAbstractFactory();
// Получаем из абстрактной фабрики нужную нам фабрику
const bmwSportFactory = bmwAbstractFactory.createFactory("sport");
// Из нужной фабрики создаем модель
const bmwM3 = bmwSportFactory.create("M3");
const bmwM5 = bmwSportFactory.create("M5");
console.log(bmwM3.info());
console.log(bmwM5.info());
const bmwFamilyFactory = bmwAbstractFactory.createFactory("family");
const bmwI3 = bmwFamilyFactory.create("I3");
console.log(bmwI3.info());
