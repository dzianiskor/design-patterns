class Engine2 {
    // Простой метод который мы знаем
    simpleInterface() { console.log('Engine 2.0 - tr-tr-tr') }
}

class EngineV8 {
    // Новый метод который мы не знаем
    complecatedInterface() { console.log('Engine V8! - wroom wroom!') }
}

// Класс адаптер, прослойка для вызова известного метода simpleInterface
class EngineV8Adapter {
    constructor(engine) {
        this.engine = engine;
    }

    simpleInterface() {
        this.engine.complecatedInterface();
    }
}

class Auto {
    startEngine(engine) {
        // Мащина которая при старте использует старый метод
        engine.simpleInterface()
    }
}

const myCar = new Auto();
// Старый объект
const oldEngine = new Engine2();
// Новый объект
const newEngine = new EngineV8();
// Новый объект который знает методы старого
const newEngineAdapted = new EngineV8Adapter(newEngine);

myCar.startEngine(oldEngine);
// myCar.startEngine(newEngine); - ОШИБКА
myCar.startEngine(newEngineAdapted);
