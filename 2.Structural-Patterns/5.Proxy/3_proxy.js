class RealSubject {
    request () {
        console.log("Real Request");
    }
}
class ProxySubject {
    constructor(realSubject) {
        this.realSubject = realSubject;
    }
    request () {
        console.log("Proxy check access");
        this.realSubject.request();
    }
}
const server = new RealSubject();
server.request();
const serverProxy = new ProxySubject(server);
serverProxy.request();
