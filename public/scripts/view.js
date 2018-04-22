let photoView = (function () {
    let showPostPhoto = () => {
        photoView.bCloseHiddenContent();
        photoView.genLog();
        photoView.genNameList(photoModel.getNames());
        photoView.genHashTagList(photoModel.getHashTags());
        photoView.genPhotoPosts();
        window.filterEvents();
    };

    let viewPhotoPosts = (t) => {

        let html = `	  
                <div id="divOuterViewPhoto" class = "divOuter">
                     <div id="divInnerViewPhoto" class = "divInnerViewPhoto">
		                  <b class="bClose">X</b>                          
		             </div>
	             </div>`;
        document.getElementById('hidden-content').innerHTML = html;

        let post = {};
        post = photoModel.getPhotoPostServer(t.parentNode.dataset.id);

        html = '<img src ="' + post.photoLink + '" style = "width:50%;"/><br>';
        html += '<div>' + photoModel.genDate(post.createdAt) + '</div><br>';
        html += '<div id="hashTags-view">' + photoModel.genHashTags(post.hashTags) + '</div><br>';
        html += '<div><i>' + post.description + '</i></div><br>';

        photoModel.likePhotoPostServer(t.parentNode.dataset.id);
        html += '<div id="likeView" class="like-info" data-id="' + t.parentNode.dataset.id + '">' + photoModel.likePhotoPostServer(t.parentNode.dataset.id) + '</div>';

        divInnerViewPhoto.innerHTML += html;

        window.scrollTo(0, 0);
    };

    let addPhotoPost = () => {
        let html = `	  
                <div id="divOuterAddPhoto" class = "divOuterLogin">
                     <div id="divInnerAddPhoto" class = "divInnerAddPhoto">
		                  <b class="bClose">X</b>                          
		             </div>
	             </div>`;
        document.getElementById('hidden-content').innerHTML = html;

        if (!user) {
            divInnerAddPhoto.innerHTML += 'Only authorized users can add photos';
            return false;
        }

        html = `
               <form id="formAdd" name="formAdd" method = "POST"  enctype="multipart/form-data">    
                   Select photo<br/><br/>	
                   <input id="idUserAdd" name="namePhotoUser" type="hidden" value="` + localStorage.getItem('user') + `"/><br/><br/>					   
				   <input id="addPhotoLink" name="namePhotoLink" type = "file" /><br/><br/>					   
				   <textarea id="addPhotoHash"  name="namePhotoHash"  placeholder="#hashtag..." rows="2" style="width:100%;position: relative;resize: none;"></textarea><br/><br/>	
				   <textarea id="addPhotoDesc" name="namePhotoDesc"  placeholder="description" rows="4" style="width:100%;resize:none;"></textarea><br/><br/>	
	               <input id="resetPhotoPost" type="reset" value="reset" style="width:40%;"  class="add-btn"/>
				   <input id="submitPhotoPost" type="submit" value="save"  style="width:40%;" class="add-btn"/>
             </form> `;
        divInnerAddPhoto.innerHTML += html;

    };

    let addPhotoPostSave = () => {
        photoModel.addPhotoPostServer();
        bCloseHiddenContent();
        return false;
    };

    var editPhotoPost = (t) => {

        let id = t.parentNode.dataset.id;

        let html = ` <div id="divOuterEditPhoto" class = "divOuterLogin">
                     <div id="divInnerEditPhoto" class = "divInnerAddPhoto">
		                  <b class="bClose">X</b>                          
		             </div>
	             </div>`;
        document.getElementById('hidden-content').innerHTML = html;

        let post = {};
        post = photoModel.getPhotoPostServer(id);
        html = `<form  id="formEdit" name="formEdit" method = "PUT"  enctype="multipart/form-data">
                   <input id="editPhotoUser" name="namePhotoUserEdit" type="hidden" value="` + localStorage.getItem('user') + `"/>
	               <input id="editId" name="editId" type="hidden"  value="` + id + `"> 
	               <img src ="` + post.photoLink + `" style = "width:20%;"/><br>     
                   Select photo :				   
				   <input id="editPhotoLink" name="editPhotoLink" type = "file"  value="` /* + post.photoLink */ + `"/><br/><br/>					   
				   <textarea id="addPhotoHash"  name="editPhotoHash" placeholder="#hashtag..." rows="2" style="width:100%;position: relative;resize: none;">`
            + post.hashTags.join(" ") +
            `</textarea><br/><br/>	
				    <textarea id="addPhotoDesc" name="editPhotoDesc" placeholder="description" rows="4" style="width:100%;resize:none;">`
            + post.description +
            `</textarea><br/><br/>
	               <input id="resetPhotoPost" type="reset" value="reset" style="width:40%;"  class="add-btn"/>
				   <input id="submitEditPost" type="submit" value="save"  style="width:40%;" class="add-btn"/>
             </form> `;

        divInnerEditPhoto.innerHTML += html;
        window.scrollTo(0, 0);
    };


    let editPhotoPostSave = () => {
        photoModel.editPhotoPostServer();
        bCloseHiddenContent();
        return false;
    };

    let removePhotoPost = (t) => {
        let id = t.parentNode.dataset.id;
        photoModel.removePhotoPostServer(id);
        photoView.showPostPhoto();
        return false;
    };

    let likePhotoPost = (t) => {
        let id = t.parentNode.dataset.id;
        let html = photoModel.likePhotoPostServer(id);
        let likeInfo = document.querySelectorAll('div[data-id=\'' + id + '\'][class=like-info]');

        likeInfo[0].innerHTML = html;
        if (likeInfo [1]) {
            likeInfo [1].innerHTML = html;
        }
    };

    let bCloseHiddenContent = () => {
        document.getElementById('hidden-content').innerHTML = '';
    };

    let filtHashtag = (t) => {
        let hashTags = t.innerHTML;
        document.getElementById('filt-input-hashtag').value = hashTags;
        photoView.genPhotoPosts();
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
            postToGen.getElementsByClassName('delete')[0].style.visibility = 'visible';
        }

        postToGen.getElementsByClassName('author')[0].textContent = post.author;

        postToGen.getElementsByClassName('like-info')[0].dataset.id = post.id;
        photoModel.likePhotoPostServer(post.id);
        postToGen.getElementsByClassName('like-info')[0].innerHTML = photoModel.likePhotoPostServer(post.id);

        postToGen.getElementsByClassName('hashtags')[0].innerHTML = photoModel.genHashTags(post.hashTags);

        postToGen.getElementsByClassName('post-date')[0].textContent = photoModel.genDate(post.createdAt);
        postToGen.getElementsByClassName('description')[0].textContent = photoModel.genDesc(post.description);

        return postToGen;
    };

    let genPhotoPostsView = (postsToGen) => {
        let table = document.getElementById('phototable');
        table.innerHTML = '';

        postsToGen.forEach(post => {
            let postToGen = genPhotoPost(post);
            table.appendChild(postToGen);
        });
    };

    var genPhotoPosts = (skip = 0, top = 10) => {

        let dateFrom = document.getElementById('filt-input-date-from').value;
        let dateTo = document.getElementById('filt-input-date-to').value;
        let filterConfig = {
            'author': document.getElementById('filt-input-name').value,
            'dateFrom': dateFrom.length > 0 ? new Date(dateFrom) : null,
            'dateTo': dateTo.length > 0 ? new Date(dateTo) : null,
            'hashtag': document.getElementById('filt-input-hashtag').value
        };

        let posts = photoModel.getPhotoPostsServer(skip, top, filterConfig);

        if (posts && posts.length < 10) document.getElementById('show-more-photo').style.display = 'none';
        else document.getElementById('show-more-photo').style.display = 'inline';

    };

    let morePhoto = () => {

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

        let posts = photoModel.getPhotoPostsServer(last, last10, filterConfig);

        if (posts && last + 10 >= photoModel.photoPosts.length) document.getElementById('show-more-photo').style.display = 'none';
        else document.getElementById('show-more-photo').style.display = 'inline';

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
        }
        else {
            logInput.id = 'sign-in';
            logInput.textContent = 'Sign in';
        }
        logRoot.appendChild(logName);
        logRoot.appendChild(logInput);
    };

    let genLogOut = () => {
        localStorage.setItem('user', '');
        user = localStorage.getItem('user');
        document.location.reload();
    };

    let genLogIn = () => {
        let html = `	  
                <div id="divOuterLogin" class = "divOuterLogin">
                     <div class = "divInner">
		                  <b class="bClose">X</b>	
		                  <input type="text" id="name-input-login" placeholder="login"><br>
                          <input type="password" id="pass-input-login" placeholder="password"><br>
			              <input id="submit-input-login" type="submit" value ="sing-in"><br>
						  <div>admin/1234<br>kate145/1234</div>
		             </div>
	             </div>`;
        document.getElementById('hidden-content').innerHTML = html;
    };

    let genLogForm = () => {
        let enterUser = document.getElementById('name-input-login').value;
        if (photoModel.getNames().indexOf(enterUser) === -1) enterUser = '';

        divOuterLogin.remove();

        localStorage.setItem('user', enterUser);
        user = localStorage.getItem('user');
        document.location.reload();
    };

    return {
        genLog, genLogIn, genLogOut, genLogForm, genNameList, genHashTagList,
        genPhotoPost, genPhotoPosts, genPhotoPostsView,
        filtHashtag, morePhoto, bCloseHiddenContent,
        viewPhotoPosts, editPhotoPost, addPhotoPost, removePhotoPost, likePhotoPost,
        addPhotoPostSave, editPhotoPostSave,
        showPostPhoto
    }
})();
