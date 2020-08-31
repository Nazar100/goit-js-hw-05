// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих

class Storage {
    constructor(array) {
        this.array = array;
    }

    getItems() {
        console.log(this.array);
    }

    addItem(item) {
        this.array.push(item);
    }
    removeItem(item) {
        for (const newItem of this.array) {
            if (item === newItem) {
                this.array.splice(this.array.indexOf(newItem), 1);
            }
        }
    }
}
const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
]);

const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
