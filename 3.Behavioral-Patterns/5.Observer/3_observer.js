class AutoNews {
    constructor() {
        this.news = '';
        this.actions = [];
    }
    setNews(text) {
        // Создается новость которая генерирует событие на которое подписаны пользователи
        this.news = text;
        this.notifyAll();
    }
    notifyAll() {
        return this.actions.forEach(subs => subs.inform(this.news));
    }
    register(observer) {
        this.actions.push(observer);
    }
}

class Jack {
    inform(message) {
        console.log(`Jack has been informed about: ${message}`);
    }
}
class Max {
    inform(message) {
        console.log(`Max has been informed about: ${message}`);
    }
}

const autoNews = new AutoNews();
// Подписываем два наших объекта наблюдателя
autoNews.register(new Jack());
autoNews.register(new Max());
// Генерируем новость которую получат все наши подписчики
autoNews.setNews("Get FREE TESLA");
