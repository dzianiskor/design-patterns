// Создадим объект "Лампочка":
class Light {
    constructor() {
        this.isOn = false;
    }
    on() {
        this.isOn = true;
        console.log("Лампочка включена!");
    }
    off() {
        this.isOn = false;
        console.log("Лампочка выключена!");
    }
}
// Создадим команды для управления лампочкой
class LightOnCommand {
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.on();
    }
}
class LightOffCommand {
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.off();
    }
}
// Создадим "пульт", который будет хранить и выполнять команды
class RemoteControl {
    constructor() {
        this.command = null;
    }
    setCommand(command) {
        this.command = command;
    }
    pressButton() {
        this.command.execute();
    }
}
// Используем наш код
const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const remote = new RemoteControl();

// Включаем свет
remote.setCommand(lightOn);
remote.pressButton(); // Вывод: "Лампочка включена!"

// Выключаем свет
remote.setCommand(lightOff);
remote.pressButton(); // Вывод: "Лампочка выключена!"

// Light - это "получатель" команд.
// LightOnCommand и LightOffCommand - это конкретные команды, которые инкапсулируют действия над получателем.
// RemoteControl - это "инициатор", который хранит и выполняет команды.
