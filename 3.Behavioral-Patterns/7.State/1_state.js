class OrderStatus {
    constructor(name, nextStatus) {
        this.name = name;
        this.nextStatus = nextStatus;
    }

    next() {
        return new this.nextStatus();
    }
}

class WaitingForPayment extends OrderStatus {
    constructor() {
        super('waitingForPayment', Shipping);
    }
}

class Shipping extends OrderStatus {
    constructor() {
        super('shipping', Delivered);
    }
}

class Delivered extends OrderStatus {
    constructor() {
        super('delivered', Delivered);
    }
}

class Order {
    constructor() {
        this.state = new WaitingForPayment();
    }

    nextState() {
        this.state = this.state.next();
    };

    cancelOrder() {
        this.state.name === "waitingForPayment" ? console.log("Order was cancelled") : console.log("Error! Order cant be cancelled");
    }
}

const order = new Order();
order.cancelOrder(); // Order was cancelled
order.nextState();
order.nextState();
order.cancelOrder(); //Error! Order cant be cancelled
