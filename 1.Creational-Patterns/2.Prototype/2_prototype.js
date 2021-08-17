/*
  Мы можем создавать новые объекты используя как скелет для его прототипа другой объект
  Например мы можем создать объект carWithOwner на базе объекта car.
  Можем использовать метод объекта car внутри carWithOwner дополнив его своими значениями.
*/

const car = {
  wheels: 4,

  init() {
    console.log(
      `У меня есть ${this.wheels} колеса, мой владелец ${this.owner}`
    );
  },
};

const carWithOwner = Object.create(car, {
  owner: {
    value: "Дмитрий",
  },
});

console.log(carWithOwner.__proto__ === car);

carWithOwner.init();
