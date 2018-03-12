//- Data
let photoPosts = [
    {
        id: '11',
        description: 'My best photo',
        createdAt: new Date('2018-02-13T06:25:41'),
        author: 'Kate145',
        photoLink: './img/10.jpg',
        likes: [
            'Ivan Ivanov',
            'EgorGitar',
            'Kate Sosinovich',
            'Egor1995'
        ],
        hashTags: [
            '#me',
            '#life'
        ]
    },
    {
        id: '15',
        description: 'To love or To be loved? How you\'ve spent St. Valintine\'s day? Mine was great!',
        createdAt: new Date('2018-02-14T21:45:08'),
        author: 'AnyaKotik',
        photoLink: './img/photo/14.jpg',
        likes: [
            'SamiyKrytoi',
            'Egor1995',
            'EgorGitar',
            'Kate Sosinovich'
        ],
        hashTags: [
            '#love',
            '#friends'
        ]
    },
    {
        id: '3',
        description: 'Me and my friends. Enjoy each moment of your life',
        createdAt: new Date('2018-02-15T07:25:48'),
        author: 'Kate145',
        photoLink: './img/photo/2.jpg',
        likes: [
            'Ivan Ivanov',
            'AnyaKotik',
            'SamiyKrytoi',
            'Egor1995',
            'KirrilK'
        ],
        hashTags: [
            '#seaside',
            '#life',
            '#friends',
            '#enjoyment'
        ]
    },
    {
        id: '13',
        description: 'Life is really unpredictable...I\'d never have thought I\'d met such a wonderful person',
        createdAt: new Date('2018-02-18T12:07:40'),
        author: 'Egor1995',
        photoLink: './img/photo/12.jpg',
        likes: [],
        hashTags: [
            '#friends',
            '#life'
        ]
    },
    {
        id: '7',
        description: 'Really missing that days in Oslo. Such photos reminds me of great time I spent there with my friends',
        createdAt: new Date('2018-02-19T16:31:59'),
        author: 'EgorGitar',
        photoLink: './img/photo/6.jpg',
        likes: [
            'AnyaKotik',
            'AnnaKirova',
            'Egor1995',
            'Svetik1998'
        ],
        hashTags: [
            '#friends',
            '#trip',
            '#enjoyment'
        ]
    },
    {
        id: '5',
        description: 'This cat looks so self-confident. Shouldn\'t we learn from him?',
        createdAt: new Date('2018-02-20T16:45:36'),
        author: 'KirrilK',
        photoLink: './img/photo/4.jpg',
        likes: [
            'AnyaKotik',
            'Egor1995',
            'LenaLena',
            'Svetik1998',
            'Kate Sosinovich',
            'AnnaKirova'
        ],
        hashTags: [
            '#cat',
            '#confidence',
            '#life',
            '#people_and_animals'
        ]
    },
    {
        id: '12',
        description: 'Hey! Look at this car! I\'ve never seen such in our city',
        createdAt: new Date('2018-02-21T09:45:01'),
        author: 'EgorGitar',
        photoLink: './img/photo/11.jpg',
        likes: [
            'Ivan Ivanov',
            'Egor1995',
            'Kate145K'
        ],
        hashTags: [
            '#car',
            '#life',
            '#city_life'
        ]
    },
    {
        id: '10',
        description: 'Nice day with nice people',
        createdAt: new Date('2018-02-21T19:03:25'),
        author: 'Kate Sosinovich',
        photoLink: './img/photo/9.jpg',
        likes: [
            'AnyaKotik',
            'Egor1995',
            'EgorGitar',
            'Kate Sosinovich'
        ],
        hashTags: [
            '#me',
            '#nice_day'
        ]
    },
    {
        id: '18',
        description: 'My life - my rules! Best party in my life',
        createdAt: new Date('2018-02-22T23:04:21'),
        author: 'EgorGitar',
        photoLink: './img/photo/17.jpg',
        likes: [
            'Egor1995',
            'SamiyKrytoi'
        ],
        hashTags: [
            '#party',
            '#friends'
        ]
    },
    {
        id: '4',
        description: 'Me enjoying sunny day<3',
        createdAt: new Date('2018-02-23T07:36:18'),
        author: 'Kate145',
        photoLink: './img/photo/3.jpg',
        likes: [
            'Ivan Ivanov',
            'AnyaKotik',
            'Svetik1998',
            'SamiyKrytoi',
            'Egor1995'],
        hashTags: [
            '#sun',
            '#life',
            '#nature',
            '#me'
        ]
    },
    {
        id: '20',
        description: 'Me looking forward warm sunny days',
        createdAt: new Date('2018-02-23T09:21:59'),
        author: 'AnyaKotik',
        photoLink: './img/photo/19.jpg',
        likes: [
            'Kate Sosinovich',
            'AnyaKotik',
            'EgorGitar'
        ],
        hashTags: [
            '#warm_vs_cold'
        ]
    },
    {
        id: '17',
        description: 'I\'m absolutely fascinated by this novel...Advise everyone!',
        createdAt: new Date('2018-02-23T10:20:14'),
        author: 'Kate145',
        photoLink: './img/photo/16.jpg',
        likes: [
            'SamiyKrytoi',
            'Egor1995',
            'Kate Sosinovich'
        ],
        hashTags: [
            '#book',
            '#life',
            '#life_and_people'
        ]
    },
    {
        id: '14',
        description: '\'Be who you are\' - the best advice I\'ve ever heard. What do you think about it?',
        createdAt: new Date('2018-02-23T11:24:20'),
        author: 'Ivan Ivanov',
        photoLink: './img/photo/13.jpg',
        likes: [
            'Kate145',
            'AnyaKotik',
            'Egor1995'
        ],
        hashTags: [
            '#life',
            '#thoughts'
        ]
    },
    {
        id: '9',
        description: 'WOW! Is it a stone or a piece of brick wall??',
        createdAt: new Date('2018-02-23T12:45:00'),
        author: 'AnyaKotik',
        photoLink: './img/photo/8.jpg',
        likes: [
            'Ekaterina Sosinovich',
            'AnyaKotik',
            'EgorGitar',
            'Egor1995'
        ],
        hashTags: [
            '#hashtag1',
            '#hashtag2'
        ]
    },
    {
        id: '8',
        description: 'Looks amazing, isn\'t it? Do you know what they are doing? If not, visit google.com',
        createdAt: new Date('2018-02-23T20:01:24'),
        author: 'SamiyKrytoi',
        photoLink: './img/photo/7.jpg',
        likes: [
            'Ivan Ivanov',
            'SamiyKrytoi',
            'Egor1995',
            'Ekaterina Sosinovich'
        ],
        hashTags: [
            '#life',
            '#hashtag2'
        ]
    },
    {
        id: '16',
        description: 'Thanks for being such a nice team lead! Happy Birthday, Ivan!',
        createdAt: new Date('2018-02-23T20:30:53'),
        author: 'Egor1995',
        photoLink: './img/photo/15.jpg',
        likes: [
            'Ivan Ivanov',
            'EgorGitar',
            'Kate Sosinovich',
            'Kate145K'
        ],
        hashTags: []
    },
    {
        id: '1',
        description: 'This is an amazing photo! Do you like it?',
        createdAt: new Date('2018-02-23T20:45:32'),
        author: 'Kate145',
        photoLink: './img/photo/0.jpg',
        likes: [
            'Ivan Ivanov',
            'AnyaKotik',
            'SamiyKrytoi',
            'Egor1995'
        ],
        hashTags: [
            '#life',
            '#hashtag2'
        ]
    },
    {
        id: '2',
        description: 'It\'s my cat Cookie. I love him sooo much',
        createdAt: new Date('2018-02-24T14:34:22'),
        author: 'AnyaKotik',
        photoLink: './img/photo/1.jpg',
        likes: [
            'Ivan Ivanov',
            'Kate145',
            'SamiyKrytoi',
            'Egor1995',
            'Natya Leonova',
            'KirrilK'
        ],
        hashTags: [
            '#my_cat',
            '#fluffy'
        ]
    },
    {
        id: '6',
        description: 'Can\'t stop gazing at this photo! I\'m dreaming of visiting such kind of place',
        createdAt: new Date('2018-02-25T19:12:04'),
        author: 'Kate Sosinovich',
        photoLink: './img/photo/5.jpg',
        likes: [
            'Ivan Ivanov',
            'AnnaKirova',
            'SamiyKrytoi',
            'EgorGitar'
        ],
        hashTags: [
            '#landscape',
            '#nature',
            '#life',
            '#trip',
            '#dream'
        ]
    },
    {
        id: '19',
        description: 'Tulips and roses. Missing spring so much!!!',
        createdAt: new Date('2018-02-28T17:45:02'),
        author: 'Kate145',
        photoLink: './img/photo/18.jpg',
        likes: [
            'AnyaKotik',
            'Svetik1998',
            'Kate Sosinovich'
        ],
        hashTags: [
            '#spring',
            '#flowers',
            '#roses',
            '#tulips'
        ]
    }];

const USER = 'Kate145';

//- Module
let photoActions = (function () {
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
        return resPhotoPosts.slice(skip, top + skip);
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

    let addPhotoPost = post => {
        if (validatePhotoPost(post)) {
            photoPosts.push(post);
            photoPosts = photoPosts.sort((a, b) => b.createdAt - a.createdAt);
            return true;
        }
        return false;
    };

    let editPhotoPost = (id, editedPost) => {
        let post = getPhotoPost(id);
        if (post) {
            if (post.author === USER) {
                if (Object.keys(editedPost).every(prop => prop in post)) {
                    if (validatePhotoPost(editedPost, false)) {
                        photoPosts.splice(photoPosts.indexOf(post), 1);
                        photoPosts.push({...post, ...editedPost});
                        photoPosts = photoPosts.sort((a, b) => b.createdAt - a.createdAt);
                        return true;
                    }
                }
            }
        }
        return false;
    };

    let removePhotoPost = id => {
        let post = getPhotoPost(id);
        if (post) {
            if (post.author === USER) {
                photoPosts.splice(photoPosts.indexOf(post), 1);
                return true;
            }
        }
        return false;
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

    return {
        getPhotoPosts,
        getPhotoPost,
        validatePhotoPost,
        addPhotoPost,
        editPhotoPost,
        removePhotoPost,
        getIndx,
        getNames,
        getHashTags
    }
})();

let DOMActions = (function () {
    let genDate = date => {
        let options = {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'};
        return date.toLocaleString("ru", options);
    };

    let genDesc = desc => {
        if (desc.length > 70) {
            return desc.substr(0, 70) + '...';
        }
        return desc;
    };

    let genHashTags = hashTags => {
        let res = '';
        hashTags.forEach(tag =>
            res += tag + ' '
        );
        return res;
    };

    let genPhotoPost = post => {
        let item = document.getElementById('photocell_temp').content.querySelector('div');
        let postToGen = document.importNode(item, true);

        postToGen.getElementsByClassName('photo-img')[0].src = post.photoLink;
        if (post.author === USER) {
            postToGen.getElementsByClassName('edit')[0].style.visibility = 'visible';
            postToGen.getElementsByClassName('delete')[0].style.visibility = 'visible';
        }
        postToGen.getElementsByClassName('author')[0].textContent = post.author;
        postToGen.getElementsByClassName('like-num')[0].textContent = post.likes.length;
        postToGen.getElementsByClassName('hashtags')[0].textContent = genHashTags(post.hashTags);
        postToGen.getElementsByClassName('post-date')[0].textContent = genDate(post.createdAt);
        postToGen.getElementsByClassName('description')[0].textContent = genDesc(post.description);

        return postToGen;
    };

    let genPhotoPosts = (postsToGen) => {
        let table = document.getElementById('phototable');
        table.innerHTML = '';

        postsToGen.forEach(post => {
            let postToGen = genPhotoPost(post);
            table.appendChild(postToGen);
        });
    };

    let genLog = () => {
        let logRoot = document.getElementById('log');
        logRoot.innerHTML = '';
        let logName = document.createElement('span');
        logName.id = 'username';
        let logInput = document.createElement('span');
        if (USER) {
            logName.textContent = USER;
            logInput.id = 'sign-out';
            logInput.textContent = 'Sign out';
        }
        else {
            logInput.id = 'sign-in';
            logInput.textContent = 'Sign in';
        }
        logRoot.appendChild(logName);
        logRoot.appendChild(logInput);
    };

    let genNameList = (names) => {
        let root = document.getElementById('name-list');

        names.forEach(name => {
            let option = document.createElement('option');
            option.textContent = name;
            root.appendChild(option);
        })
    };

    let genHashTagList = (hashTags) => {
        let root = document.getElementById('hashtag-list');

        hashTags.forEach(tag => {
            let option = document.createElement('option');
            option.textContent = tag;
            root.appendChild(option);
        })
    };

    let addPhotoPost = (post, indx) => {
        let posts = document.getElementsByClassName('photo-cell');
        console.log(posts);
        if (indx < posts.length && indx > -1) {
            let postToAdd = genPhotoPost(post);
            let next = posts[indx];
            console.log(postToAdd);
            console.log(next);
            next.before(postToAdd);
            posts[posts.length - 1].remove();
        }
    };

    let removePhotoPost = (indx) => {
        let posts = document.getElementsByClassName('photo-cell');

        if (indx < posts.length && indx > -1) {
            let postToDel = posts[indx];
            postToDel.remove();
        }
    };

    let editPhotoPost = (indx, editedPost) => {
        let posts = document.getElementsByClassName('photo-cell');

        if (indx < posts.length && indx > -1) {
            let postToEdit = posts[indx];
            let newPost = genPhotoPost(editedPost);
            postToEdit.replaceWith(newPost);
        }
    };

    return {
        genLog,
        genPhotoPosts,
        genNameList,
        addPhotoPost,
        removePhotoPost,
        editPhotoPost,
        genHashTagList
    }
})();

let genPhotoPosts = () => {
    let skip = 0;
    let top = 10;

    let dateFrom = document.getElementById('filt-input-date-from').value;
    let dateTo = document.getElementById('filt-input-date-to').value;
    let filterConfig = {
        author: document.getElementById('filt-input-name').value,
        dateFrom: dateFrom.length > 0 ? new Date(dateFrom) : null,
        dateTo: dateTo.length > 0 ? new Date(dateTo) : null,
        hashtag: document.getElementById('filt-input-hashtag').value
    };

    console.log(filterConfig);

    let posts = photoActions.getPhotoPosts(skip, top, filterConfig);

    DOMActions.genPhotoPosts(posts);
};

let addPhotoPost = post => {
    if (photoActions.addPhotoPost(post)) {
        console.log('fdsfs');
        DOMActions.addPhotoPost(post, photoActions.getIndx(post));
    }
};

let editPhotoPost = (id, editedPost) => {
    if (photoActions.editPhotoPost(id, editedPost)) {
        DOMActions.editPhotoPost(photoActions.getIndx(photoActions.getPhotoPost(id)), photoActions.getPhotoPost(id));
    }
};

let removePhotoPost = id => {
    let indx = photoActions.getIndx(photoActions.getPhotoPost(id));
    if (photoActions.removePhotoPost(id)) {
        DOMActions.removePhotoPost(indx);
    }
};

window.onload = () => {
    DOMActions.genLog();
    DOMActions.genNameList(photoActions.getNames());
    DOMActions.genHashTagList(photoActions.getHashTags());
    genPhotoPosts();
};


//- Tests
/*
addPhotoPost({
        id: '21',
        description: 'My new photo!!',
        createdAt: new Date('2018-03-12T06:25:41'),
        author: 'Kate145',
        photoLink: './img/10.jpg',
        likes: [],
        hashTags: [
            '#life_is_good',
            '#me'
        ]
    });
    addPhotoPost({
        id: '21',
        description: 'My new photo!!',
        createdAt: new Date('2018-01-12T06:25:41'),
        author: 'Kate145',
        photoLink: './img/10.jpg',
        likes: [],
        hashTags: [
            '#life_is_good',
            '#me'
        ]
    });

*/


