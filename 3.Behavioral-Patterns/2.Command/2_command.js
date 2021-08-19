/*
    Предположим у нас есть класс с набором методов (square, cube).
    Данный паттер позволяет создать абстрактную оболочку (другой класс) из которого будут вызываться данные команды.
*/

class MyMath {
  constructor(initialValue = 0) {
    this.num = initialValue;
  }

  // Методы основного класса, будут вызываться из оболочки
  square() {
    return this.num ** 2;
  }

  cube() {
    return this.num ** 3;
  }
}

class Command {
  constructor(subject) {
    this.subject = subject;
    this.commandsExecuted = [];
  }

  execute(command) {
    this.commandsExecuted.push(command);
    // Вызываем метод основного класса square() /  cube()
    return this.subject[command]();
  }
}

const x = new Command(new MyMath(2));

console.log(x.execute("square"));
console.log(x.execute("cube"));

console.log(x.commandsExecuted);
