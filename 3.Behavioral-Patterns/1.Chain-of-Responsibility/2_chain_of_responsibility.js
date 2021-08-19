/*
    Chain of Responsibility - позволяет последовательно, у одного и того же объекта, вызывать какой-то набор операций
    и последовательно тем самым модифицировать результат.
*/

class MySum {
  constructor(initialValue = 42) {
    this.sum = initialValue;
  }

  add(value) {
    this.sum += value;
    // Возврат самого объекта является указателем на данный паттерн,
    // кроме того теперь мы можем по цепочке вызвать другие методы
    return this;
  }
}

const sum1 = new MySum();
console.log(sum1.add(8).add(10).add(1).add(9).sum);

const sum2 = new MySum(0);
console.log(sum2.add(1).add(2).add(3).sum);
