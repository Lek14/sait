const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
app.use(express.static('www'));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

let db = new sqlite3.Database('./db.sqlite', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS users(username TEXT, password TEXT, email TEXT)');
});

app.post('/register', (req, res) => {
    const stmt = db.prepare("INSERT INTO users (username, password, email) VALUES(?, ?, ?)");
    stmt.run(req.body.username, req.body.password, req.body.email, (err) => {
        if (err) {
            console.error(err.message);
            res.redirect('http://localhost:8000/sait/www/templates/error404.html');
        } else {
             res.redirect('http://localhost:8000/sait/www/templates/login.html');
        }
        stmt.finalize()
    });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
  console.log(`App listening at http://localhost:${5000}`);
});

process.on('exit', () => {
  try {
    db.close();
  } catch (err) {
    console.error(err.stack);
  }
});

app.use(function(err, req, res, next) {
  console.error(err.stack); // log the error stack
  res.redirect('http://localhost:8000/sait/www/templates/error404.html');
});