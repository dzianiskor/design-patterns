class ArrayIterator {
    constructor(el) {
        this.index = 0;
        this.elements = el;
    }
    next() {
        return this.elements[this.index++];
    }
    hasNext() {
        return this.index < this.elements.length;
    }
}
const songs = new ArrayIterator(["Song1", "Song2", "Song3"]);
while (songs.hasNext()) {
    const currentSong = songs.next();
    console.log("Сейчас играет:", currentSong);
}
