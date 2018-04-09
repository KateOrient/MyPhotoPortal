const f = require('./app-func.js');

let express = require('express');
let fs = require('fs');

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

let app = express();
app.use(express.static(__dirname + '/public/'));

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

app.post('/getPhotoPost', urlencodedParser, (req, res) => {
    res.end(JSON.stringify(f.getPhotoPostsLimitFiltr(req.query.skip, req.query.top, JSON.parse(req.body.filterConfig))));
});

app.post('/addPhotoPost', urlencodedParser, (req, res) => {
    f.addPhotoPostJson(req.body.desc, req.body.url, req.body.hashtag, req.body.user);
    res.end('ok');
});

app.put('/editPhotoPost', urlencodedParser, (req, res) => {
    f.editPhotoPost(req.query.id, req.body.desc, req.body.url, req.body.hashtag, req.body.user);
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
       



