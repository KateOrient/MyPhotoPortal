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
        photoLink: './img/14.jpg',
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
        photoLink: './img/2.jpg',
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
        photoLink: './img/12.jpg',
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
        photoLink: './img/6.jpg',
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
        photoLink: './img/4.jpg',
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
        photoLink: './img/11.jpg',
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
        photoLink: './img/9.jpg',
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
        photoLink: './img/17.jpg',
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
        photoLink: './img/3.jpg',
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
        photoLink: './img/19.jpg',
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
        photoLink: './img/16.jpg',
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
        photoLink: './img/13.jpg',
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
        photoLink: './img/8.jpg',
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
        createdAt: new Date('2018-02-23T20:00:00'),
        author: 'SamiyKrytoi',
        photoLink: './img/7.jpg',
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
        createdAt: new Date('2018-02-23T20:00:00'),
        author: 'Egor1995',
        photoLink: './img/15.jpg',
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
        createdAt: new Date('2018-02-23T20:00:00'),
        author: 'Kate145',
        photoLink: './img/0.jpg',
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
        photoLink: './img/1.jpg',
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
        photoLink: './img/5.jpg',
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
        photoLink: './img/18.jpg',
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

//- Module
let photoActions = (function () {
    let getPhotoPosts = (skip, top, filterConfig = {}) => {
        skip = skip ? skip : 0;
        top = top ? top : 10;
        let resPhotoPosts = photoPosts;
        if (filterConfig.length !== 0) {
            if (Object.keys(filterConfig).includes("author")) {
                resPhotoPosts = resPhotoPosts.filter(post => {
                    return (post.author.startsWith(filterConfig.author))
                });
            }
            if (Object.keys(filterConfig).includes("dateFrom")) {
                resPhotoPosts = resPhotoPosts.filter(post => {
                    return (post.createdAt >= filterConfig.dateFrom)
                });
            }
            if (Object.keys(filterConfig).includes("dateTo")) {
                resPhotoPosts = resPhotoPosts.filter(post => {
                    return (post.createdAt <= filterConfig.dateTo)
                });
            }
            if (Object.keys(filterConfig).includes("hashtag")) {
                resPhotoPosts = resPhotoPosts.filter(post => {
                    let res = false;
                    post.hashTags.map(tag => {
                        if (tag.startsWith(filterConfig.hashtag)) {
                            res = true;
                        }
                    });
                    return res;
                });
            }
        }
        return resPhotoPosts.slice(skip, top + skip);
    };

    let getPhotoPost = id => {
        let res = null;
        photoPosts.forEach(post => {
            if (post.id === id) {
                res = post;
            }
        });
        return res;
    };

    let validateId = post => {
        if (Object.keys(post).includes('id')) {
            if (typeof post.id !== 'string' || post.id.length === 0 || getPhotoPost(post.id) !== null) {
                console.log('Field \'id\' has an invalid format');
                return false;
            }
        }
        else {
            console.log('Post doesn\'t have field \'id\'');
            return false;
        }
        return true;
    };

    let validateDesc = post => {
        if (Object.keys(post).includes('description')) {
            if (typeof post.description !== 'string' || post.description.length >= 200 || post.description.length === 0) {
                console.log('Field \'description\' has an invalid format');
                return false;
            }
        }
        else {
            console.log('Post doesn\'t have field \'description\'');
            return false;
        }
        return true;
    };

    let validateDate = post => {
        if (Object.keys(post).includes('createdAt')) {
            if (typeof post.createdAt !== 'object') {
                console.log('Field \'createdAt\' has an invalid format');
                return false;
            }
        }
        else {
            console.log('Post doesn\'t have field \'createdAt\'');
            return false;
        }
        return true;
    };

    let validateAuthor = post => {
        if (Object.keys(post).includes('author')) {
            if (typeof post.author !== 'string' || post.author.length === 0) {
                console.log('Field \'author\' has an invalid format');
                return false;
            }
        }
        else {
            console.log('Post doesn\'t have field \'author\'');
            return false;
        }
        return true;
    };

    let validateLink = post => {
        if (Object.keys(post).includes('photoLink')) {
            if (typeof post.photoLink !== 'string' || post.photoLink.length === 0) {
                console.log('Field \'photoLink\' has an invalid format');
                return false;
            }
        }
        else {
            console.log('Post doesn\'t have field \'photoLink\'');
            return false;
        }
        return true;
    };

    let validateHashTags = post => {
        if (Object.keys(post).includes('hashTags')) {
            if (typeof post.hashTags !== 'object') {
                console.log('Field \'hashTags\' has an invalid format');
                return false;
            }
            let regexp = new RegExp('#[A-Za-z_]+');
            let res = true;
            post.hashTags.forEach(hashtag => res = regexp.test(hashtag) ? res : false);
            if(!res){
                console.log('Field \'hashTags\' has an invalid format');
                return false;
            }
        }
        return true;
    };

    let validateLikes = post => {
        if (Object.keys(post).includes('likes')) {
            if (typeof post.likes !== 'object') {
                console.log('Field \'likes\' has an invalid format');
                return false;
            }
        }
        return true;
    };

    let validatePhotoPost = post => {
        let res = validateId(post);
        if (res) {
            res = validateDesc(post);
        }
        if (res) {
            res = validateDate(post);
        }
        if (res) {
            res = validateAuthor(post);
        }
        if (res) {
            res = validateLink(post);
        }
        if (res) {
            res = validateHashTags(post);
        }
        if (res) {
            res = validateLikes(post);
        }
        if (res) {
            console.log('Post passed validation!:)');
        }
        return res;
    };

    let addPhotoPost = post => {
        if (validatePhotoPost(post)) {
            photoPosts.push(post);
            return true;
        }
        return false;
    };

    let editPhotoPost = (id, editedPost) => {
        let post = getPhotoPost(id);
        if (post !== null) {
            photoPosts.splice(photoPosts.indexOf(post), 1);
            photoPosts.push({...post, ...editedPost});
            return true;
        }
        return false;
    };

    let removePhotoPost = id => {
        let post = getPhotoPost(id);
        if (post !== null) {
            photoPosts.splice(photoPosts.indexOf(post), 1);
            return true;
        }
        return false;
    };

    return {
        getPhotoPosts: getPhotoPosts,
        getPhotoPost: getPhotoPost,
        validatePhotoPost: validatePhotoPost,
        addPhotoPost: addPhotoPost,
        editPhotoPost: editPhotoPost,
        removePhotoPost: removePhotoPost
    }
})();

//- Test
console.log('<------- getPhotoPosts ------->\n');
console.log('The result of photoActions.getPhotoPosts(null, 5, {author: \'Kate\', hashtag: \'#life\', dateTo: new Date(\'2018-02-22T00:00:00\')}) is\n\n',
    photoActions.getPhotoPosts(null, 5, {
        author: 'Kate',
        hashtag: '#life',
        dateTo: new Date('2018-02-22T00:00:00')
    }), '\n\n');

console.log('<------- getPhotoPost ------->\n');
console.log('The result of photoActions.getPhotoPost(\'3\') is\n\n', photoActions.getPhotoPost('3'), '\n\n');

console.log('The result of photoActions.getPhotoPost(\'27\') is\n\n', photoActions.getPhotoPost('27'), '\n\n');

console.log('<------- validatePhotoPost ------->\n');
console.log(photoActions.validatePhotoPost({
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
}) + '\n');

console.log(photoActions.validatePhotoPost({
    id: '28',
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
        'me',
        '#life'
    ]
}) + '\n');

console.log(photoActions.validatePhotoPost({
    id: '28',
    description: '',
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
}) + '\n');

console.log(photoActions.validatePhotoPost({
    id: '28',
    description: 'My best photo',
    createdAt: new Date('2018-02-13T06:25:41'),
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
}) + '\n');

console.log('<------- addPhotoPost ------->\n');
console.log('Before adding a post the result of photoActions.getPhotoPost(\'31\') is\n',
    photoActions.getPhotoPost('31'), '\n');

console.log('The result of adding: ', photoActions.addPhotoPost({
    id: '31',
    description: 'To love or To be loved? How you\'ve spent St. Valintine\'s day? Mine was great!',
    createdAt: new Date('2018-02-14T21:45:08'),
    author: 'AnyaKotik',
    photoLink: './img/14.jpg',
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
}), '\n');
console.log('After adding a post the result of photoActions.getPhotoPost(\'31\') is\n',
    photoActions.getPhotoPost('31'), '\n');

console.log('Tring to add existing post: ', photoActions.addPhotoPost({
    id: '15',
    description: 'To love or To be loved? How you\'ve spent St. Valintine\'s day? Mine was great!',
    createdAt: new Date('2018-02-14T21:45:08'),
    author: 'AnyaKotik',
    photoLink: './img/14.jpg',
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
}), '\n');

console.log('<------- editPhotoPosts ------->\n');

console.log('Before editing:\n', photoActions.getPhotoPost('13'), '\n');
console.log('The result of editing: ', photoActions.editPhotoPost('13', {
    description: 'Wow! I was edited!',
    hashTags: '#editing_is_cool'
}), '\n');
console.log('After editing:\n', photoActions.getPhotoPost('13'), '\n');

console.log('<------- removePhotoPosts ------->\n');
console.log('Before removing a post the result of photoActions.getPhotoPost(\'13\') is\n',
    photoActions.getPhotoPost('13'), '\n');

console.log('The result of removing: ', photoActions.removePhotoPost('13'), '\n');
console.log('After removing a post the result of photoActions.getPhotoPost(\'13\') is\n',
    photoActions.getPhotoPost('13'), '\n');

console.log('Tring to remove nonexistent post: ', photoActions.removePhotoPost('543'));
