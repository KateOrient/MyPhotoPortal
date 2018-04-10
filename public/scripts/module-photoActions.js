let photoActions = (function () {
    let getPhotoPostServer = (id) => {
        let res;
        let data = '?id=' + encodeURIComponent(id);
        let xhr = new XMLHttpRequest();
        xhr.open('GET', '/getPhotoPost/' + data, false);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                res = JSON.parse(xhr.responseText);
            }
        };
        xhr.send();
        return res;
    };

    let getPhotoPostsServer = (skip, top, filterConfig) => {
        let res;
        let data = '?skip=' + encodeURIComponent(skip) + '&top=' + encodeURIComponent(top);
        let body = 'filterConfig=' + encodeURIComponent(JSON.stringify(filterConfig));

        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/getPhotoPost/' + data, false);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                res = JSON.parse(xhr.responseText);
            }
        };
        xhr.send(body);
        return res;
    };

    let addPhotoPostServer = (desc, url, hashtag, user) => {
        let res;
        let body = 'desc=' + encodeURIComponent(desc) + '&url=' + encodeURIComponent(url) +
            '&hashtag=' + encodeURIComponent(hashtag) + '&user=' + encodeURIComponent(user);
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/addPhotoPost/', false);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                res = xhr.responseText;
            }
        };
        xhr.send(body);
        if (res === 'ok') {
            photoPosts = readJsonData('/read');
            window.genPhotoPosts(0, 10);
        }
    };

    let editPhotoPostServer = (id, desc, url, hashtag, user) => {
        let res;
        let data = '?id=' + id;
        let body = 'desc=' + encodeURIComponent(desc) + '&url=' + encodeURIComponent(url) +
            '&hashtag=' + encodeURIComponent(hashtag) + '&user=' + encodeURIComponent(user);
        let xhr = new XMLHttpRequest();
        xhr.open('PUT', '/editPhotoPost/' + data, false);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                res = xhr.responseText;
            }
        };
        xhr.send(body);

        if (res === 'ok') {
            photoPosts = readJsonData('/read');
            window.genPhotoPosts(0, 10);
        }
    };

    let removePhotoPostServer = (id) => {
        let res;
        let xhr = new XMLHttpRequest();
        xhr.open('DELETE', '/removePhotoPost/?id=' + encodeURIComponent(id), false);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                res = xhr.responseText;
            }
        };
        xhr.send();
        if (res === 'ok') {
            photoPosts = readJsonData('/read');
            window.genPhotoPosts(0, 10);
        }
    };

    let likePhotoPostServer = (id, user) => {
        let res;
        let data = '?id=' + encodeURIComponent(id) + '&user=' + encodeURIComponent(user);
        let xhr = new XMLHttpRequest();
        xhr.open('GET', '/likePhotoPost/' + data, false);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                res = xhr.responseText;
            }
        };
        xhr.send();

        document.querySelector('div[data-id=\'' + id + '\']').querySelector('.like-info').innerHTML = res;
        document.querySelector('div[data-id=\'' + id + '\']').querySelector('.like').onclick = () => {
            if (user) photoActions.likePhotoPostServer(id, user);
        };
        if (document.getElementById('divInnerViewPhoto')) {
            document.getElementById('divInnerViewPhoto').querySelector('.like-info').innerHTML = res;
            document.getElementById('divInnerViewPhoto').querySelector('.like').onclick = () => {
                if (user) photoActions.likePhotoPostServer(id, user);
            }
        }
    };

    let readJsonData = () => {
        let arrPost = [];
        let reqServer = new XMLHttpRequest();
        reqServer.open('GET', '/read', false);
        reqServer.onreadystatechange = () => {
            if (reqServer.readyState === 4 && reqServer.status === 200) {
                arrPost = JSON.parse(reqServer.responseText);
            }
        };
        reqServer.send();
        return arrPost;
    };

    let saveJsonData = (arrPost) => {
        let body = 'data=' + encodeURIComponent(JSON.stringify(arrPost));
        let reqServer = new XMLHttpRequest();
        reqServer.open('POST', '/save', false);
        reqServer.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        reqServer.onreadystatechange = () => {
            if (reqServer.readyState === 4 && reqServer.status === 200) {
                console.log(reqServer.responseText);
            }
        };
        reqServer.send(body);
    };

    let photoPosts = readJsonData('/read');

    let getNames = () => {
        return photoPosts.map(post => post.author).filter((name, indx, self) => self.indexOf(name) === indx);
    };

    let getHashTags = () => {
        let hashtags = [];
        photoPosts.forEach(post => post.hashTags.forEach(tag => hashtags.push(tag)));
        return hashtags.filter((tag, indx, self) => self.indexOf(tag) === indx);
    };

    return {
        likePhotoPostServer,
        removePhotoPostServer,
        editPhotoPostServer,
        addPhotoPostServer,
        getPhotoPostServer,
        getPhotoPostsServer,
        readJsonData,
        saveJsonData,
        photoPosts,
        getNames,
        getHashTags
    }
})();
