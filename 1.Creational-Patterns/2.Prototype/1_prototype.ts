/*
  Прототип — это порождающий паттерн проектирования, который позволяет копировать объекты, не вдаваясь в подробности их реализации.
  Проще говоря мы можем реализовать метод clone который при вызове создает точную копию исходного объекта,
  при этом разработчику который использует clone не нужно думать что же там под капотом.
*/

interface IPrototype {
  primitive: any;
  component: object;
  circularReference: ComponentWithBackReference;
  clone: () => IPrototype;
}

class Prototype implements IPrototype {
  public primitive!: any;
  public component!: object;
  public circularReference!: ComponentWithBackReference;

  public clone(): this {
    const clone = Object.create(this);
    clone.component = Object.create(this.component);
    // Клонирование объекта, который имеет вложенный объект с обратной
    // ссылкой, требует специального подхода. После завершения клонирования
    // вложенный объект должен указывать на клонированный объект, а не на
    // исходный объект. Для данного случая хорошо подойдёт оператор
    // расширения (spread).
    clone.circularReference = {
      ...this.circularReference,
      reference: { ...this },
    };

    return clone;
  }
}

class ComponentWithBackReference {
  public reference: IPrototype;

  constructor(reference: IPrototype) {
    this.reference = reference;
  }
}

const p1 = new Prototype();
p1.primitive = 245;
p1.component = new Date();
p1.circularReference = new ComponentWithBackReference(p1);

const p2 = p1.clone();

if (p1.primitive === p2.primitive) {
  console.log("Primitive field values have been carried over to a clone. Yay!");
} else {
  console.log("Primitive field values have not been copied. Booo!");
}
if (p1.component === p2.component) {
  console.log("Simple component has not been cloned. Booo!");
} else {
  console.log("Simple component has been cloned. Yay!");
}

if (p1.circularReference === p2.circularReference) {
  console.log("Component with back reference has not been cloned. Booo!");
} else {
  console.log("Component with back reference has been cloned. Yay!");
}

if (p1.circularReference.reference === p2.circularReference.reference) {
  console.log(
    "Component with back reference is linked to original object. Booo!"
  );
} else {
  console.log("Component with back reference is linked to the clone. Yay!");
}
