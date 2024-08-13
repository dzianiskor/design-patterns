class Auto {
    // Пробрасываем внутрь функцию и исполняем ее
    addFunction(fn) {
        fn(this);
    }
}
class Tesla extends Auto {
    info() {
        return 'It is a Tesla car!';
    }
}
class Bmw extends Auto {
    info() {
        return 'It is a BMW car!';
    }
}
// Функция которую мы пробросим внутрь объекта и она добавит ему новые свойства
function extendExportVisitor(auto) {
    if (auto instanceof Tesla) {
        auto.export = () => console.log(`Exported data: ${auto.info()}`);
    }
}

const tesla = new Tesla();
tesla.addFunction(extendExportVisitor);
tesla.export();
