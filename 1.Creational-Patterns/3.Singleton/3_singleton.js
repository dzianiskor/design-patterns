// В данном примере мы сделаем реализацию в конструкторе
class Counter {
  constructor() {
    // Проверяем существует ли статичное свойство
    if (Counter.instance) {
      return Counter.instance;
    }
    this.count = 0;
    // Если не существует то создаем
    Counter.instance = this;
  }
  getCount() {
    return this.count;
  }
  increaseCount() {
    return this.count++;
  }
}
// в обоих коунтерах один и тот же объект
const counter1 = new Counter();
const counter2 = new Counter();
counter1.increaseCount();
counter2.increaseCount();
console.log(counter2.getCount());
