class Memento {
    constructor(value) {
        this.index = 0;
        this.state = [value];
    }
    save (value) {
        this.index++;
        this.state.push(value);
    }
    getValue() {
        return this.state[this.index];
    }
    getPreviousValue() {
        return this.state[--this.index];
    }
}
const chat = new Memento("Hello");
chat.save("Hello world");
chat.save("Hello world 2");
console.log(chat.getValue());
console.log(chat.getPreviousValue());
console.log(chat.getPreviousValue());
