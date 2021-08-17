/*
    Фабричный метод — это порождающий паттерн проектирования, который определяет общий интерфейс для создания объектов в суперклассе, позволяя подклассам изменять тип создаваемых объектов.

    В нашем примере есть абстрактный класс Logistics с методом getTransport. Каждый наследник (RoadLogistic или SeaLogistic) обязан в своем теле определить этот метод.
    Внутри метода getTransport обязана быть функция deliver которая и определить каким образом будет доставлен товар. Метод sendProducts общий для всех, можно его не переопределять.
*/

interface ILogistics {
  getTransport: () => ITransport;
  sendProducts: () => string;
}

interface ITransport {
  type: string;
  deliver: () => string;
}

abstract class Logistics implements ILogistics {
  public abstract getTransport(): ITransport;

  public sendProducts(): string {
    const transport = this.getTransport();
    return `Тип доставки указан: ${
      transport.type
    }, значит товар ${transport.deliver()}`;
  }
}

class RoadLogistic extends Logistics {
  public getTransport(): ITransport {
    return new Track();
  }
}

class SeaLogistic extends Logistics {
  public getTransport(): ITransport {
    return new Ship();
  }
}

class Track implements ITransport {
  type = "Машина";

  public deliver(): string {
    return "Доставляем на машине!";
  }
}

class Ship implements ITransport {
  type = "Корабль";

  public deliver(): string {
    return "Доставляем на корабле!";
  }
}

const logistic1 = new RoadLogistic();
console.log(logistic1.sendProducts());

const logistic2 = new SeaLogistic();
console.log(logistic2.sendProducts());
