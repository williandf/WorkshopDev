const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./ws.db');

db.serialize(function () {
  // Criar a Tabela
  db.run(`
    CREATE TABLE IF NOT EXISTS ideas(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      title TEXT,
      category TEXT,
      description TEXT,
      link Text
    );
  `);
  // Inserir dados na tabela
  // const query = `
  // INSERT INTO ideas(
  //   image,
  //   title,
  //   category,
  //   description,
  //   link
  // ) VALUES (?,?,?,?,?);`

  // const values = [
  //   "https://image.flaticon.com/icons/svg/2728/2728995.svg",
  //   "Cursos de Programação",
  //   "Estudo",
  //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat porro esse commodi laboriosam cum quisquam? Ea rerum laborum explicabo non expedita, eligendi dolores ut eum ratione, culpa id consequatur placeat?",
  //   "https://rocketseat.com.br"
  // ];

  // db.run(query, values, function(err) {
  //   if (err) return console.log(err)

  //   console.log(this)
  // });

  // Deletar um dado da tabela
  // db.run(`DELETE FROM ideas WHERE id = ?`, [1], function (err) {
  //   if (err) return console.log(err)

  // console.log("DELETEI", this)
  // });

  // Consultar dados na tabela
  // db.all(`SELECT * FROM ideas`, function(err, rows) {
  //   if (err) return console.log(err)

  //   console.log(rows)
  // });
});

module.exports = db;
