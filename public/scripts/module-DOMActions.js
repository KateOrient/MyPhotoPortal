let DOMActions = (function () {

    let genDate = date => {
        let d = new Date(Date.parse(date));
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
        hashTags.forEach(tag =>
            res += '<u onclick="DOMActions.filtHashtag(this.innerHTML)">' + tag + '</u> &nbsp;'
        );
        return res;
    };

    let filtHashtag = (hashTags) => {
        document.getElementById('filt-input-hashtag').value = hashTags;
        window.genPhotoPosts();
        document.getElementById('filt-input-hashtag').value = '';
        document.getElementById('hidden-content').innerHTML = '';
        window.scrollTo(0, 0);
    };

    let genPhotoPost = post => {
        let item = document.getElementById('photocell_temp').content.querySelector('div');
        let postToGen = document.importNode(item, true);

        postToGen.dataset.id = post.id;

        postToGen.getElementsByClassName('photo-img')[0].src = post.photoLink;
        if (post.author === user) {
            postToGen.getElementsByClassName('edit')[0].style.visibility = 'visible';
            postToGen.getElementsByClassName('edit')[0].onclick = () => {
                window.editPhotoPost(postToGen.dataset.id);
            };
            postToGen.getElementsByClassName('delete')[0].style.visibility = 'visible';
            postToGen.getElementsByClassName('delete')[0].onclick = () => {
                photoActions.removePhotoPostServer(postToGen.dataset.id);
            }
        }

        postToGen.getElementsByClassName('author')[0].textContent = post.author;

        if (post.likes.indexOf(user) !== -1) {
            postToGen.getElementsByClassName('like')[0].src = './img/like/like.png';
            postToGen.getElementsByClassName('like')[0].title = post.likes.join(', ');
        }
        else {
            postToGen.getElementsByClassName('like')[0].src = './img/like/like-outline.png';
            postToGen.getElementsByClassName('like')[0].title = post.likes.join(', ');
        }
        postToGen.getElementsByClassName('like-num')[0].textContent = post.likes.length;

        postToGen.getElementsByClassName('like')[0].onclick = () => {
            if (user) photoActions.likePhotoPostServer(post.id, user);
        };

        postToGen.getElementsByClassName('hashtags')[0].innerHTML = genHashTags(post.hashTags);

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

        if (user) {
            logName.textContent = user;
            logInput.id = 'sign-out';
            logInput.textContent = 'Sign out';

            logInput.addEventListener('click', () => {
                localStorage.setItem('user', '');
                user = localStorage.getItem('user');

                DOMActions.showPostPhoto();
            });
        }
        else {
            logInput.id = 'sign-in';
            logInput.textContent = 'Sign in';

            logInput.addEventListener('click', () => {

                let html = `	  
                <div id="divOuterLogin" class = "divOuterLogin">
                     <div class = "divInner">
		                  <b class="bClose" onclick="document.getElementById('hidden-content').innerHTML = '';">X</b>	
		                  <input type="text" id="name-input-login" placeholder="login"><br>
                          <input type="password" id="pass-input-login" placeholder="password"><br>
			              <input id="submit-input-login" type="submit" value ="sing-in"><br>
						  <div>admin/1234<br>kate145/1234</div>
		             </div>
	             </div>`;
                document.getElementById('hidden-content').innerHTML = html;


                document.getElementById('submit-input-login').addEventListener('click', () => {

                    let enterUser = document.getElementById('name-input-login').value;
                    if (photoActions.getNames().indexOf(enterUser) === -1) enterUser = '';

                    divOuterLogin.remove();

                    localStorage.setItem('user', enterUser);
                    user = localStorage.getItem('user');

                    DOMActions.showPostPhoto();
                });
            });
        }
        logRoot.appendChild(logName);
        logRoot.appendChild(logInput);
    };

    let showPostPhoto = () => {
        DOMActions.genLog();
        DOMActions.genNameList(photoActions.getNames());
        DOMActions.genHashTagList(photoActions.getHashTags());
        window.genPhotoPosts();
        DOMActions.filterEvents();
        DOMActions.morePhoto();
    };

    let morePhoto = () => {
        document.getElementById('show-more-photo').onclick = () => {

            let dateFrom = document.getElementById('filt-input-date-from').value;
            let dateTo = document.getElementById('filt-input-date-to').value;
            let filterConfig = {
                author: document.getElementById('filt-input-name').value,
                dateFrom: dateFrom.length > 0 ? new Date(dateFrom) : null,
                dateTo: dateTo.length > 0 ? new Date(dateTo) : null,
                hashtag: document.getElementById('filt-input-hashtag').value
            };

            let last = document.getElementsByClassName('photo-cell').length;
            let last10 = last + 10;

            let posts = photoActions.getPhotoPostsServer(last, last10, filterConfig);
            console.log(posts);


            let table = document.getElementById('phototable');
            posts.forEach(post => {
                let postToGen = DOMActions.genPhotoPost(post);
                table.appendChild(postToGen);
            });

            if (last + 10 >= photoActions.photoPosts.length) document.getElementById('show-more-photo').style.display = 'none';
            else document.getElementById('show-more-photo').style.display = 'inline';
        };
    };

    let filterEvents = () => {
        ['filt-input-name', 'filt-input-date-from', 'filt-input-date-to', 'filt-input-hashtag'].forEach(
            (id) => {
                document.getElementById(id).addEventListener('input', () => {
                    window.genPhotoPosts();
                });
            });
    };

    let genNameList = (names) => {
        let root = document.getElementById('name-list');

        document.getElementById('name-list').innerHTML = '';

        names.forEach(name => {
            let option = document.createElement('option');
            option.textContent = name;
            root.appendChild(option);
        })
    };

    let genHashTagList = (hashTags) => {
        let root = document.getElementById('hashtag-list');

        document.getElementById('hashtag-list').innerHTML = '';

        hashTags.forEach(tag => {
            let option = document.createElement('option');
            option.textContent = tag;
            root.appendChild(option);
        })
    };

    return {
        genLog,
        genDate,
        genHashTags,
        genNameList,
        genHashTagList,
        genPhotoPost,
        genPhotoPosts,
        filterEvents,
        filtHashtag,
        morePhoto,
        showPostPhoto
    }
})();
