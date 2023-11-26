const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
app.use(express.json());

let db = new sqlite3.Database('./mydb.sqlite', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS user(username TEXT, password TEXT, email TEXT)');
});

app.post('/register', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;

  let stmt = db.prepare('INSERT INTO user(username , password , email ) VALUES (?, ? ,?)');
  stmt.run(username,password,email);
  stmt.finalize();

  res.send('User registered successfully');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

process.on('exit', () => {
  db.close(); 
});