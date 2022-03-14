let express = require('express');
let path = require('path');
let fs = require('fs');
let bodyParser = require('body-parser');
const { env } = require('process');
let app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });


app.listen(process.env.PORT ? process.env.PORT : 3000, function () {
  console.log(process.env.PORT ? process.env.PORT : 3000);
  console.log("test");
});
