// не заморачивайтесь, эти 2 строки скопированы из документации
var express = require('express');
var app = express();


// >>> НАЧАЛО КОДА СЕРВЕРА
app.get('/randomnum', function (req, res) {
  const randomNum = Math.floor( Math.random() * 10 );
  res.send({ message: randomNum });
});
// >>> КОНЕЦ КОДА СЕРВЕРА


// не заморачивайтесь, эти 3 строки скопированы из документации
app.listen(3000, function () {
  console.log('Example app listening on http://localhost:3000/randomnum');
});
