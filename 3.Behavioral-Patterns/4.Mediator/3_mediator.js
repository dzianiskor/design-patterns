// Создадим объект "Чат-медиатор":
class Chatroom {
    constructor() {
        this.users = {};
    }
    addUser(user) {
        this.users[user.name] = user;
        user.setChatroom(this);
    }
    sendMessage(message, from) {
        for (let key in this.users) {
            // Проверяем что бы пользователь не отправил сам себе сообщение
            if (this.users[key] !== from) {
                this.users[key].receiveMessage(message, from);
            }
        }
    }
}
//Создадим объект "Пользователь":
class User {
    constructor(name) {
        this.name = name;
        this.chatroom = null;
    }
    setChatroom(chatroom) {
        this.chatroom = chatroom;
    }
    sendMessage(message) {
        this.chatroom.sendMessage(message, this);
    }
    receiveMessage(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}
// Используем Медиатор
const chatroom = new Chatroom();
const john = new User("John");
const jane = new User("Jane");

chatroom.addUser(john);
chatroom.addUser(jane);
// Пользователи только отправляют сообщения, остальное делает чатрум
john.sendMessage("Привет, Jane!");
jane.sendMessage("Привет, John!");

// Chatroom - это медиатор, который управляет взаимодействием между пользователями.
// User - это коллега, который общается с другими коллегами только через медиатора.
// Метод sendMessage у пользователя отправляет сообщение медиатору, а не напрямую другому пользователю.
// Медиатор, в свою очередь, рассылает сообщение всем остальным пользователям.
