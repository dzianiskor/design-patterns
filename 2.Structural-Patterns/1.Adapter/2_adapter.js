/*
    Адаптер - паттерн позволяющий интегрировать старый интерфейс в новый.
    Например часто используется для работы с различными API что бы в случае изменения версий мы вызывали один и тот же метод,
    но под капотом он использовал бы уже новые возможности.
*/

class OldCalc {
  // Старый интерфейс
  operations(t1, t2, operation) {
    switch (operation) {
      case "add":
        return t1 + t2;
      case "sub":
        return t1 - t2;
      default:
        return NaN;
    }
  }
}

class NewCalc {
  // Новые возможности
  add(t1, t2) {
    return t1 + t2;
  }

  sub(t1, t2) {
    return t1 - t2;
  }
}

class CalcAdapter {
  constructor() {
    this.calc = new NewCalc();
  }
  // Старый интерфейс
  operations(t1, t2, operation) {
    switch (operation) {
      case "add":
        // Вызвает новые возможности
        return this.calc.add(t1, t2);
      case "sub":
        return this.calc.sub(t1, t2);
      default:
        return NaN;
    }
  }
}

const oldCalc = new OldCalc();
console.log(oldCalc.operations(10, 5, "add"));

const newCalc = new NewCalc();
console.log(newCalc.add(10, 5));

const adapter = new CalcAdapter();
console.log(adapter.operations(25, 10, "sub"));
