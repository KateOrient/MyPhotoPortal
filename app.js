const f = require('./app-func.js');


let express = require('express');

let app = express();
app.use(express.static(__dirname + '/public/'));

let fs = require('fs');

var multer = require('multer');
var nameUploadFile = '';
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/img/photo');
    },
    filename: function (req, file, callback) {
        nameUploadFile = Date.now() + '-' + file.originalname;
        callback(null, nameUploadFile);
    }
});
var upload = multer({storage: storage});

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/read', (req, res) => {
    res.end(fs.readFileSync('./server/data/post.json', 'utf8'));
});

app.post('/save', urlencodedParser, (req, res) => {
    fs.writeFileSync('./server/data/post.json', JSON.stringify(JSON.parse(req.body.data), '', 4));
    res.end('');
});

app.get('/getPhotoPost', urlencodedParser, (req, res) => {
    res.end(JSON.stringify(f.getPhotoPostId(req.query.id)));
});

var events = require('events');
var dispatcher = new events.EventEmitter();

app.post('/getPhotoPost', urlencodedParser, (req, res) => {

    dispatcher.emit('message', JSON.stringify(f.getPhotoPostsLimitFiltr(req.query.skip, req.query.top, JSON.parse(req.body.filterConfig))));

    res.set('Content-Type', 'text/plain;charset=utf-8');
    res.end('ok');
});

app.get('/subscribe', (req, res) => {
    res.set('Content-Type', 'text/plain;charset=utf-8');
    res.set('Cache-Control', 'no-cache, must-revalidate');

    dispatcher.once('message', message => {
        res.end(message);
    });
});


app.post('/addPhotoPost', upload.single('namePhotoLink'), (req, res) => {

    f.addPhotoPostJson(req.body.namePhotoDesc, nameUploadFile, req.body.namePhotoHash, req.body.namePhotoUser);

    res.end('ok');
});

app.put('/editPhotoPost', upload.single('editPhotoLink'), (req, res) => {

    f.editPhotoPost(req.body.editId, req.body.editPhotoDesc, nameUploadFile, req.body.editPhotoHash, req.body.namePhotoUserEdit);
    nameUploadFile = '';
    res.end('ok');
});

app.delete('/removePhotoPost', urlencodedParser, (req, res) => {
    f.removePhotoPost(req.query.id);

    res.end('ok');
});

app.get('/likePhotoPost/', urlencodedParser, (req, res) => {
    res.end(f.likePhotoPost(req.query.id, req.query.user));
});

app.listen(3000, () => {
    console.log('Working on port 3000');
});
       



