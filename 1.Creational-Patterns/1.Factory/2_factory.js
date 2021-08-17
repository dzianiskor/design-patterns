/*
В данном примере нам нужно создавать много объектов похожего типа но с некоторыми отличиями.
Например пользователь с различными типами подписок (Простая, Стандартная, Премиум).
Очевидно что имя пользователя и возраст не меняется, а цена подписки меняется в зависимости от ее типа.
*/

class abstractMembership {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class SimpleMembership extends abstractMembership {
  constructor(name, age) {
    super(name, age);
    this.cost = 50;
  }
}

class StandardMembership extends abstractMembership {
  constructor(name, age) {
    super(name, age);
    this.cost = 150;
  }
}

class PremiumMembership extends abstractMembership {
  constructor(name, age) {
    super(name, age);
    this.cost = 500;
  }
}

class MemberFactory {
  static list = {
    simple: SimpleMembership,
    standard: StandardMembership,
    premium: PremiumMembership,
  };

  create(name, age, type = "simple") {
    // Определяем тип
    const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
    // Создаем юзера
    const member = new Membership(name, age);
    member.type = type;
    member.define = function () {
      console.log(`${this.name} - ${this.age} (${this.type}): ${this.cost}`);
    };
    return member;
  }
}

const factory = new MemberFactory();

const members = [
  factory.create("Denis", "simple"),
  factory.create("Elena", "premium"),
  factory.create("Vasilisa", "standard"),
  factory.create("Ivan", "premium"),
  factory.create("Petr"),
];

members.forEach((m) => {
  m.define();
});
