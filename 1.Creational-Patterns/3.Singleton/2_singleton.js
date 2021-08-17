/*
    Смысл данного паттерна сводится к тому что объект данного класса создается только один раз.
    В случае попытки создания второго объекта данного класса нам возвращается уже созданный ранее объект.
*/
class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }
    Database.instance = this;
    Database.exists = true;
    this.data = data;
  }

  getData() {
    return this.data;
  }
}

const mongo = new Database("MongoDB");
console.log(mongo.getData());

const mysql = new Database("MySQL");
console.log(mysql.getData());
