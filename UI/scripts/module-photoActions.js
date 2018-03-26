let photoActions = (function () {

    var getLocalStorage = (marker) => {
        let arrData = [];
        let i = 0;
        while (localStorage.getItem(marker + i)) {
            arrData[i] = JSON.parse(localStorage.getItem(marker + i));
            arrData[i].createdAt = new Date(Date.parse(arrData[i].createdAt));
            i++;
        }
        return arrData;
    };

    var setLocalStorage = (marker, arrDate) => {
        let i = 0;
        while (localStorage.getItem(marker + i)) {
            localStorage.removeItem(marker + i);
            i++;
        }
        arrDate.forEach((post, j) => {
            localStorage.setItem(marker + j, JSON.stringify(post));
        });
    };

    let photoPosts = getLocalStorage("id");

    let getPhotoPosts = (skip, top, filterConfig = {}) => {

        photoPosts = photoPosts.sort((a, b) => b.createdAt - a.createdAt);
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

    let getPhotoPost = id => {
        return photoPosts.find(el => el.id === id);
    };

    let validateId = (post, presence) => {
        if ('id' in post) {
            if (typeof post.id !== 'string' || post.id.length === 0 || getPhotoPost(post.id)) {
                return false;
            }
        }
        else if (presence) {
            return false;
        }
        return true;
    };

    let validateDesc = (post, presence) => {
        if ('description' in post) {
            if (typeof post.description !== 'string' || post.description.length >= 200 || post.description.length === 0) {
                return false;
            }
        }
        else if (presence) {
            return false;
        }
        return true;
    };

    let validateDate = (post, presence) => {
        if ('createdAt' in post) {
            if ({}.toString.call(post.createdAt) !== '[object Date]') {
                return false;
            }
        }
        else if (presence) {
            return false;
        }
        return true;
    };

    let validateAuthor = (post, presence) => {
        if ('author' in post) {
            if (typeof post.author !== 'string' || post.author.length === 0 || post.author !== USER) {
                return false;
            }
        }
        else if (presence) {
            return false;
        }
        return true;
    };

    let validateLink = (post, presence) => {
        if ('photoLink' in post) {
            if (typeof post.photoLink !== 'string' || post.photoLink.length === 0) {
                return false;
            }
        }
        else if (presence) {
            return false;
        }
        return true;
    };

    let validateHashTags = post => {
        if ('hashTags' in post) {
            if ({}.toString.call(post.hashTags) !== '[object Array]') {
                return false;
            }
            let regexp = new RegExp('#[A-Za-z_]+');
            if (!post.hashTags.every(hashtag => regexp.test(hashtag))) {
                return false;
            }
        }
        return true;
    };

    let validateLikes = post => {
        if ('likes' in post) {
            if ({}.toString.call(post.hashTags) !== '[object Array]') {
                return false;
            }
        }
        return true;
    };

    //параметр presence обозначает, обязательно ли
    //присутсвие всех 'обязательных' полей в проверяемом объекте
    let validatePhotoPost = (post, presence) => {
        let validate = {
            validateAuthor,
            validateDate,
            validateDesc,
            validateId,
            validateLikes,
            validateHashTags,
            validateLink
        };
        return Object.keys(validate).every(func => validate[func](post, presence));
    };

    let addPhotoPost = (desc, url, hash) => {

        let i = photoPosts.length;
        photoPosts[i] = {};
        photoPosts[i].id = (i + 1) + '';
        photoPosts[i].description = desc;
        photoPosts[i].createdAt = new Date();
        photoPosts[i].author = user;
        url = url.split("\\");
        photoPosts[i].photoLink = './img/photo/' + url[url.length - 1];
        photoPosts[i].likes = [];
        photoPosts[i].hashTags = hash.split(' ');

        setLocalStorage("id", photoPosts);

        DOMActions.showPostPhoto();


        console.log(photoPosts[i]);
    };

    let editPhotoPost = (id, desc, url, hash) => {

        let i = 0;
        while (photoPosts[i].id !== id) i++;

        photoPosts[i].description = desc;
        photoPosts[i].createdAt = new Date();
        photoPosts[i].hashTags = hash.split(' ');
        if (url) {
            url = url.split("\\");
            photoPosts[i].photoLink = './img/photo/' + url[url.length - 1];
        }
        setLocalStorage("id", photoPosts);


        DOMActions.showPostPhoto();
    };

    let removePhotoPost = id => {

        photoPosts.forEach((post, i) => {
            if (post.id === id) photoPosts.splice(i, 1);
        });
        setLocalStorage("id", photoPosts);
        DOMActions.showPostPhoto();
    };

    let getIndx = post => {
        return photoPosts.indexOf(post);
    };

    let getNames = () => {
        return photoPosts.map(post => post.author).filter((name, indx, self) => self.indexOf(name) === indx);
    };

    let getHashTags = () => {
        let hashtags = [];
        photoPosts.forEach(post => post.hashTags.forEach(tag => hashtags.push(tag)));
        return hashtags.filter((tag, indx, self) => self.indexOf(tag) === indx);
    };

    let outlikePhotoPost = (id, elImg, elNum) => {

        let i = 0;
        while (photoPosts[i].id !== id) i++;
        for (let j = 0; j < photoPosts[i].likes.length; j++) {
            if (photoPosts[i].likes[j] === user) {
                photoPosts[i].likes.splice(j, 1);
            }
        }

        setLocalStorage("id", photoPosts);

        elImg.src = './img/like/like-outline.png';
        elImg.title = photoPosts[i].likes.join(", ");
        elNum.textContent = photoPosts[i].likes.length;


        let doubleEl = document.querySelector("div[data-id='" + id + "']").querySelector(".like-info").querySelector(".like");
        doubleEl.src = './img/like/like-outline.png';
        doubleEl.title = photoPosts[i].likes.join(", ");
        let doubleElNum = document.querySelector("div[data-id='" + id + "']").querySelector(".like-info").querySelector(".like-num");
        doubleElNum.textContent = photoPosts[i].likes.length;

    };

    let likePhotoPost = (id, elImg, elNum) => {

        let i = 0;
        while (photoPosts[i].id !== id) i++;

        photoPosts[i].likes[photoPosts[i].likes.length] = user;

        setLocalStorage("id", photoPosts);

        elImg.src = './img/like/like.png';
        elImg.title = photoPosts[i].likes.join(", ");
        elNum.textContent = photoPosts[i].likes.length;

        let doubleEl = document.querySelector("div[data-id='" + id + "']").querySelector(".like-info").querySelector(".like");
        doubleEl.src = './img/like/like.png';
        doubleEl.title = photoPosts[i].likes.join(", ");
        let doubleElNum = document.querySelector("div[data-id='" + id + "']").querySelector(".like-info").querySelector(".like-num");
        doubleElNum.textContent = photoPosts[i].likes.length;

    };


    return {
        getLocalStorage,
        setLocalStorage,
        photoPosts,
        getPhotoPosts,
        getPhotoPost,
        validatePhotoPost,
        addPhotoPost,
        editPhotoPost,
        removePhotoPost,
        likePhotoPost,
        outlikePhotoPost,
        getIndx,
        getNames,
        getHashTags
    }
})();
