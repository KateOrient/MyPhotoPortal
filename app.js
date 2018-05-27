const f = require('./app-func.js');

var mongoClient = require('mongodb').MongoClient;
f.fillMongodbFromJson('./server/data/post.json');

let usersList = require('./server/data/user.json');
const crypto = require('crypto');

//хеширование паролей
/*
let users = { 'admin': '1234', 'kate145': '1234' };
for( let key in users ){	
let cipher = crypto.createCipher('aes-256-cbc', key);
let decipher = crypto.createDecipher('aes-256-cbc', key);
   
let encryptedPassword = cipher.update(users[key], 'utf8', 'hex');
encryptedPassword += cipher.final('hex')

let decryptedPassword = decipher.update(encryptedPassword, 'hex', 'utf8');
decryptedPassword += decipher.final('utf8');

console.log('encrypted :', encryptedPassword);
console.log('decrypted :', decryptedPassword);   
} 
*/

let express = require('express');
let app = express();
app.use(express.static(__dirname + '/public/'));

app.get('/', (req, res) => {
    console.log(req.session.login);
    res.sendFile(__dirname + '/index.html');
});

let fs = require('fs');

let multer = require('multer');
let nameUploadFile = '';
let storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/img/photo');
    },
    filename: function (req, file, callback) {
        nameUploadFile = Date.now() + '-' + file.originalname;
        callback(null, nameUploadFile);
    }
});
let upload = multer({storage: storage});

let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({extended: false});


//авторизация
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;

//ссесия
let expressSession = require('express-session');
app.use(expressSession({secret: 'ekaterina'}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy({
        usernameField: 'login',
        passwordField: 'pass'
    },
    function (username, password, done) {
        if (usersList[username]) {
            //console.log('пользователь ' + username + ' есть');

            let decipher = crypto.createDecipher('aes-256-cbc', username);
            let decryptedPassword = decipher.update(usersList[username], 'hex', 'utf8');
            decryptedPassword += decipher.final('utf8');

            if (decryptedPassword === password) {
                //console.log('пароль ' + password + ' совпал');
                let tempUser = {};
                tempUser.username = username;
                return done(null, tempUser);
            }
            else {
                //console.log('пароль ' + password + ' не совпадает');
                return done(null, false);
            }
        }
        else {
            //console.log('пользователя ' + username + ' нет');
            return done(null, false, {message: 'Incorrect password.'});
        }
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.username);
});

passport.deserializeUser(function (username, done) {
    done(null, {username: username});
});

app.post('/login/',
    upload.single(''),
    passport.authenticate('local'),
    (req, res) => {
        //console.log(req.user.username);
        res.end(req.user.username);
    }
);

app.get('/logout/', function (req, res) {
    req.logout();
    res.end('logout ok!');
});

app.post('/logincash/', upload.single(''),
    passport.authenticate('local'),
    (req, res) => {
        res.end('ok!!!');
    }
);

app.get('/', (req, res) => {
    console.log(req.session.login);
    res.sendFile(__dirname + '/index.html');
});

app.get('/read', (req, res) => {
    let urlDB = 'mongodb://localhost:27017/';
    mongoClient.connect(urlDB, function (err, client) {

        let db = client.db('mpp');
        db.collection('photo').find().toArray(function (err, results) {
            console.log('---------------------------------------------------');
            console.log('произвольный JSON документ из коллекции photo');
            console.log('---------------------------------------------------');
            console.log(results[Math.floor(Math.random() * (results.length + 1))]);
            console.log('---------------------------------------------------');
            res.end(JSON.stringify(results, '', 4));
            client.close();
        });
    });
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
       



