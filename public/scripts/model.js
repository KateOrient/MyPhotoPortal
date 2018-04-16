let photoModel = (function () {

    let getPhotoPostsServerLongPolling = (skip, top, filterConfig) => {
        let res;
        let data = '?skip=' + encodeURIComponent(skip) + '&top=' + encodeURIComponent(top);
        let body = 'filterConfig=' + encodeURIComponent(JSON.stringify(filterConfig));

        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/getPhotoPostLongPoling/' + data, false);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                res = JSON.parse(xhr.responseText);
            }
        };
        xhr.send(body);
        return res;
    };


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

    let addPhotoPostServer = () => {
        let res;

        let formData = new FormData(document.forms.formAdd);
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/addPhotoPost/', false);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                res = xhr.responseText;
            }
        };
        xhr.send(formData);
        delete formData;

        if (res === 'ok') {
            photoPosts = readJsonData('/read');
            photoView.genPhotoPosts(0, 10);
        }
    };

    let editPhotoPostServer = () => {
        let res;

        let formDataEdit = new FormData(document.forms.formEdit);

        let xhr = new XMLHttpRequest();
        xhr.open('PUT', '/editPhotoPost/', false);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                res = xhr.responseText;
            }
        };
        xhr.send(formDataEdit);
        delete formDataEdit;


        if (res === 'ok') {
            photoPosts = readJsonData('/read');
            photoView.genPhotoPosts(0, 10);
            photoView.bCloseHiddenContent();
        }

        return false;
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
            photoView.genPhotoPosts(0, 10);
        }
    };

    let likePhotoPostServer = (id) => {

        let user = localStorage.getItem('user');
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
        return res;
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

    var photoPosts = readJsonData('/read');

    let getNames = () => {
        return photoPosts.map(post => post.author).filter((name, indx, self) => self.indexOf(name) === indx);
    };

    let getHashTags = () => {
        let hashtags = [];
        photoPosts.forEach(post => post.hashTags.forEach(tag => hashtags.push(tag)));
        return hashtags.filter((tag, indx, self) => self.indexOf(tag) === indx);
    };

    let genDate = date => {
        d = new Date(Date.parse(date));
        let options = {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'};
        return d.toLocaleString('ru', options);
    };

    let genDesc = desc => {
        if (desc.length > 70) {
            return desc.substr(0, 70) + '...';
        }
        return desc;
    };

    let genHashTags = hashTags => {
        let res = '';
        hashTags.forEach(tag => {
            res += '<u class="listHashtag">' + tag + '</u> &nbsp;';
        });
        return res;
    };


    return {
        likePhotoPostServer, removePhotoPostServer, editPhotoPostServer, addPhotoPostServer,
        getPhotoPostServer, getPhotoPostsServer, getPhotoPostsServerLongPolling,
        readJsonData, saveJsonData,
        photoPosts,
        getNames, getHashTags,
        genDate, genHashTags, genDesc
    }
})();
