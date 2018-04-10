let fs = require('fs');

let likePhotoPost = (id, user) => {
    let photoPosts = JSON.parse(fs.readFileSync('./server/data/post.json', 'utf8'));

    let i = 0;
    while (photoPosts[i].id !== id) i++;

    let html = '';
    if (photoPosts[i].likes.indexOf(user) !== -1) {
        for (let j = 0; j < photoPosts[i].likes.length; j++) {
            if (photoPosts[i].likes[j] === user) {
                photoPosts[i].likes.splice(j, 1);
            }
        }
        html = '<img src="./img/like/like-outline.png" class="like" title="' + photoPosts[i].likes.join(', ') + '">';
        html += '<div class="like-num">' + photoPosts[i].likes.length + '</div>';
    } else {
        photoPosts[i].likes[photoPosts[i].likes.length] = user;
        html = '<img src="./img/like/like.png" class="like" title="' + photoPosts[i].likes.join(', ') + '">';
        html += '<div class="like-num">' + photoPosts[i].likes.length + '</div>';
    }

    fs.writeFileSync('./server/data/post.json', JSON.stringify(photoPosts, '', 4));

    return html;
};

let removePhotoPost = (id) => {
    let photoPosts = JSON.parse(fs.readFileSync('./server/data/post.json', 'utf8'));

    let  i = 0;
    while (photoPosts[i].id !== id) i++;
    photoPosts.splice(i, 1);

    fs.writeFileSync('./server/data/post.json', JSON.stringify(photoPosts, '', 4));

};

let editPhotoPost = (id, desc, url, hash, user) => {
    let photoPosts = JSON.parse(fs.readFileSync('./server/data/post.json', 'utf8'));

    let i = 0;
    while (photoPosts[i].id !== id) i++;

    photoPosts[i].description = desc;
    photoPosts[i].createdAt = new Date();
    photoPosts[i].hashTags = hash.split(' ');
    if (url) {
        url = url.split('\\');
        photoPosts[i].photoLink = './img/photo/' + url[url.length - 1];
    }
    fs.writeFileSync('./server/data/post.json', JSON.stringify(photoPosts, '', 4));
};

let addPhotoPostJson = (desc, url, hash, user) => {
    let photoPosts = JSON.parse(fs.readFileSync('./server/data/post.json', 'utf8'));

    let i = photoPosts.length;
    photoPosts[i] = {};
    photoPosts[i].id = (i + 1) + '';
    photoPosts[i].description = desc;
    photoPosts[i].createdAt = new Date();
    photoPosts[i].author = user;
    url = url.split('\\');
    photoPosts[i].photoLink = './img/photo/' + url[url.length - 1];
    photoPosts[i].likes = [];
    photoPosts[i].hashTags = hash.split(' ');

    fs.writeFileSync('./server/data/post.json', JSON.stringify(photoPosts, '', 4));
};

let getPhotoPostId = (id) => {
    let photoPosts = JSON.parse(fs.readFileSync('./server/data/post.json', 'utf8'));

    return photoPosts.find(el => el.id === id);
};

let getPhotoPostsLimitFiltr = (skip, top, filterConfig = {}) => {
    let photoPosts = JSON.parse(fs.readFileSync('./server/data/post.json', 'utf8'));

    photoPosts = photoPosts.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
    skip = skip ? skip : 0;
    top = top ? top : 10;
    let resPhotoPosts = photoPosts;
    if (Object.keys(filterConfig).length !== 0) {
        if (filterConfig.hasOwnProperty('author')) {
            if (filterConfig.author) {
                resPhotoPosts = resPhotoPosts.filter(post => post.author.startsWith(filterConfig.author));
            }
        }
        if (filterConfig.hasOwnProperty('dateFrom')) {
            if (filterConfig.dateFrom) {
                resPhotoPosts = resPhotoPosts.filter(post => post.createdAt >= filterConfig.dateFrom);
            }
        }
        if (filterConfig.hasOwnProperty('dateTo')) {
            if (filterConfig.dateTo) {
                resPhotoPosts = resPhotoPosts.filter(post => post.createdAt <= filterConfig.dateTo);
            }
        }
        if (filterConfig.hasOwnProperty('hashtag')) {
            if (filterConfig.hashtag) {
                resPhotoPosts = resPhotoPosts.filter(post => {
                    let res = false;
                    post.hashTags.forEach(tag => {
                        if (tag.startsWith(filterConfig.hashtag)) {
                            res = true;
                        }
                    });
                    return res;
                });
            }
        }
    }
    return resPhotoPosts.slice(skip, top);
};

module.exports.likePhotoPost = likePhotoPost;
module.exports.removePhotoPost = removePhotoPost;
module.exports.addPhotoPostJson = addPhotoPostJson;
module.exports.editPhotoPost = editPhotoPost;
module.exports.getPhotoPostId = getPhotoPostId;
module.exports.getPhotoPostsLimitFiltr = getPhotoPostsLimitFiltr;
	
	
	
	
	
	