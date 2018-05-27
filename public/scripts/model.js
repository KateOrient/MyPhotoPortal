let photoModel = (function () {
	
    let getLoginFormPromise = () => {
		
       return new Promise((resolve, reject) => {			
		    var res;		
            let formData = new FormData(document.forms.formLogin);
            let xhr = new XMLHttpRequest();
            xhr.open('POST', '/login/');
		
            xhr.onload = () => {
                if (xhr.status === 200) {					
                    resolve(xhr.response);
                } else {
                    let error = new Error(xhr.statusText);
                    error.code = xhr.status;
                    reject(error);
                }
            };
            xhr.onerror = () => {
                reject(new Error('Network Error'));
            };
            xhr.send(formData);			
            delete formData;		
        });	
    };

    let getLogiOutPromise = () => {
		
        return new Promise((resolve, reject) => {
            let data = '';
            let xhr = new XMLHttpRequest();
            xhr.open('GET', '/logout/' + data, true);
            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    let error = new Error(xhr.statusText);
                    error.code = xhr.status;
                    reject(error);
                }
            };
            xhr.onerror = () => {
                reject(new Error('Network Error'));
            };
            xhr.send();
        });		
	
    };	
	
	
    let getPhotoPostPromise = (id) => {
        return new Promise((resolve, reject) => {
            let data = '?id=' + encodeURIComponent(id);
            let xhr = new XMLHttpRequest();
            xhr.open('GET', '/getPhotoPost/' + data, true);

            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    let error = new Error(xhr.statusText);
                    error.code = xhr.status;
                    reject(error);
                }
            };
            xhr.onerror = () => {
                reject(new Error('Network Error'));
            };

            xhr.send();
        });
    };

    let getPhotoPostsPromise = (skip, top, filterConfig) => {
        return new Promise((resolve, reject) => {
            let data = '?skip=' + encodeURIComponent(skip) + '&top=' + encodeURIComponent(top);
            let body = 'filterConfig=' + encodeURIComponent(JSON.stringify(filterConfig));

            let xhr = new XMLHttpRequest();
            xhr.open('POST', '/getPhotoPost/' + data, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    let error = new Error(xhr.statusText);
                    error.code = xhr.status;
                    reject(error);
                }
            };
            xhr.onerror = () => {
                reject(new Error('Network Error'));
            };

            xhr.send(body);
        });
    };

    let getPhotoPostsServer = (skip, top, filterConfig) => {
        let tempFunc = async (skip, top, filterConfig) => {
            let posts = JSON.parse(await  getPhotoPostsPromise(skip, top, filterConfig));
            photoView.genPhotoPostsInPromise(skip, posts);
        };
        tempFunc(skip, top, filterConfig);

        return [];
    };

    let addPhotoPostPromise = () => {
        return new Promise((resolve, reject) => {
            let formData = new FormData(document.forms.formAdd);
            let xhr = new XMLHttpRequest();
            xhr.open('POST', '/addPhotoPost/', true);
            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    let error = new Error(xhr.statusText);
                    error.code = xhr.status;
                    reject(error);
                }
            };
            xhr.onerror = () => {
                reject(new Error('Network Error'));
            };

            xhr.send(formData);
            delete formData;

        });
    };

    let addPhotoPostServer = () => {
        addPhotoPostPromise()
            .then(response => {
                    photoPosts = readJsonData('/read');
                    photoView.genPhotoPosts(0, 10);
                },
                error => console.log(`rejected: ${error}`)
            );
        return false;
    };

    let editPhotoPostPromise = () => {
        return new Promise((resolve, reject) => {
            let formDataEdit = new FormData(document.forms.formEdit);
            let xhr = new XMLHttpRequest();
            xhr.open('PUT', '/editPhotoPost/', true);

            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    let error = new Error(xhr.statusText);
                    error.code = xhr.status;
                    reject(error);
                }
            };
            xhr.onerror = () => {
                reject(new Error('Network Error'));
            };

            xhr.send(formDataEdit);
            delete formDataEdit;

        });
    };

    let editPhotoPostServer = () => {
        editPhotoPostPromise()
            .then(response => {
                    photoPosts = readJsonData('/read');
                    photoView.genPhotoPosts(0, 10);
                    photoView.bCloseHiddenContent();
                },
                error => console.log(`rejected: ${error}`)
            );
        return false;
    };

    let removePhotoPostPromise = (id) => {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('DELETE', '/removePhotoPost/?id=' + encodeURIComponent(id), true);
            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    let error = new Error(xhr.statusText);
                    error.code = xhr.status;
                    reject(error);
                }
            };
            xhr.onerror = () => {
                reject(new Error('Network Error'));
            };
            xhr.send();
        });
    };

    let removePhotoPostServer = (id) => {
        removePhotoPostPromise(id)
            .then(response => {
                    photoPosts = readJsonData('/read');
                    photoView.genPhotoPosts(0, 10);
                },
                error => console.log(`rejected: ${error}`)
            );
        return false;
    };

    let likePhotoPostPromise = (id) => {
        return new Promise((resolve, reject) => {
            let user = localStorage.getItem('user');

            let data = '?id=' + encodeURIComponent(id) + '&user=' + encodeURIComponent(user);
            let xhr = new XMLHttpRequest();
            xhr.open('GET', '/likePhotoPost/' + data, true);
            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    let error = new Error(xhr.statusText);
                    error.code = xhr.status;
                    reject(error);
                }
            };
            xhr.onerror = () => {
                reject(new Error('Network Error'));
            };

            xhr.send();
        });
    };

    let readJsonDataPromise = () => {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', '/read', true);

            xhr.onload = () => {
                if (xhr.status === 200) {
                    return resolve(xhr.responseText);
                } else {
                    let error = new Error(xhr.statusText);
                    error.code = xhr.status;
                    return reject(error);
                }
            };
            xhr.onerror = () => {
                reject(new Error('Network Error'));
            };

            xhr.send();
        });
    };

    let readJsonData = () => {
        readJsonDataPromise()
            .then(response => {
                    photoModel.photoPosts = JSON.parse(response);
                },
                error => console.log(`rejected: ${error}`)
            );
        return [];
    };

    let photoPosts = readJsonData();
    let getNames = () => {
        return photoModel.photoPosts.map(post => post.author).filter((name, indx, self) => self.indexOf(name) === indx);
    };

    let getHashTags = () => {
        let hashtags = [];
        photoModel.photoPosts.forEach(post => post.hashTags.forEach(tag => hashtags.push(tag)));
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
        removePhotoPostServer, editPhotoPostServer, addPhotoPostServer,
        getPhotoPostsServer,
        getPhotoPostPromise, likePhotoPostPromise, getLoginFormPromise, getLogiOutPromise,
        photoPosts, 
        getNames, getHashTags,
        genDate, genHashTags, genDesc
    }
})();
