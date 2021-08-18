/*
    Заместитель — это структурный паттерн проектирования, который позволяет подставлять вместо реальных объектов специальные объекты-заменители.
    Эти объекты перехватывают вызовы к оригинальному объекту, позволяя сделать что-то до или после передачи вызова оригиналу.
    Заместитель получает вызовы от клиента, выполняет свою функцию (контроль доступа, кеширование, изменение запроса и прочее), а затем передаёт вызов сервисному объекту.

    В данном примере мы к запросу на сервер навешиваем доп проверки и защиты если хотим.
*/

interface Subject {
  request(): void;
}

class RealSubject implements Subject {
  public request(): void {
    console.log("Тело запроса: информация пошла.");
  }
}

class ProxyClass implements Subject {
  private realSubject: RealSubject;

  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject;
  }

  public request(): void {
    if (this.checkAccess()) {
      this.realSubject.request();
    }
  }

  private checkAccess(): boolean {
    // Некоторые реальные проверки должны проходить здесь.
    console.log("Proxy: Проверяем и контролим что-нить.");
    return true;
  }
}

console.log("Client: Отправляем без прокси:");
const realSubject = new RealSubject();
realSubject.request();

console.log("");

console.log("Client: Используем Proxy:");
const proxyObj = new ProxyClass(realSubject);
proxyObj.request();
