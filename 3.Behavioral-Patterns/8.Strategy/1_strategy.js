function baseStrategy(amount) {
    // Сложная логика вычислений
    return amount;
}
function premiumStrategy(amount) {
    return amount * 0.85;
}

class AutoCart {
    constructor(strategy) {
        this.strategy = strategy;
        this.amount = 50000;
    }
    checkout() {
        // Вызываем нашу функцию стратегии
        console.log(`Customer will spend ${this.strategy(this.amount)}$`);
    }
}

const baseCustomer = new AutoCart(baseStrategy);
const premiumCustomer = new AutoCart(premiumStrategy);
baseCustomer.checkout();
premiumCustomer.checkout();
