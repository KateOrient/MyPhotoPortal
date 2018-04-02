let express = require("express");
let fs = require('fs');

var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended: false});

let app = express();
app.use(express.static(__dirname + "/public/"));


app.get('/', (req, res) => {

    res.sendFile(__dirname + "/index.html");
});

app.get('/read', (req, res) => {

    fs.readFile("./server/data/post.json", "utf8", function (error, data) {
        if (error) throw error;
        res.end(data);
    });
});

app.post('/save', urlencodedParser, (req, res) => {
    let arrPost = JSON.parse(req.body.data);
    fs.writeFile('./server/data/post.json', JSON.stringify(arrPost, "", 4), function (error) {
        if (error) throw error;
        console.log('запись данных');
    });
    res.end('');
});

app.get('/test-get', urlencodedParser, (req, res) => {
    console.log('Данные GET-запроса: ' + req.query.data);
    res.end(req.method + '-запрос обработан');
});

app.post('/test-post', urlencodedParser, (req, res) => {
    console.log('Данные POST-запроса: ' + req.body.data);
    res.end(req.method + '-запрос обработан');
});

app.put('/test-put', urlencodedParser, (req, res) => {
    console.log('Данные PUT-запроса: ' + req.body.data);
    res.end(req.method + '-запрос обработан');
});

app.delete('/test-delete', (req, res) => {
    console.log('Данные DELETE-запроса: ' + req.query.data);
    res.end(req.method + '-запрос обработан');
});


app.listen(3000, () => {
    console.log("Working on port 3000");
});



