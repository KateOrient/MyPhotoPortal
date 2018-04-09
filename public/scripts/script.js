var genPhotoPosts = (skip = 0, top = 10) => {

    let dateFrom = document.getElementById('filt-input-date-from').value;
    let dateTo = document.getElementById('filt-input-date-to').value;
    let filterConfig = {
        author: document.getElementById('filt-input-name').value,
        dateFrom: dateFrom.length > 0 ? new Date(dateFrom) : null,
        dateTo: dateTo.length > 0 ? new Date(dateTo) : null,
        hashtag: document.getElementById('filt-input-hashtag').value
    };

    let posts = photoActions.getPhotoPostsServer(skip, top, filterConfig);

    if (posts.length < 10) document.getElementById('show-more-photo').style.display = 'none';
    else document.getElementById('show-more-photo').style.display = 'inline';

    DOMActions.genPhotoPosts(posts);
};

let addPhotoPost = () => {

    let html = `	  
                <div id="divOuterAddPhoto" class = "divOuterLogin">
                     <div id="divInnerAddPhoto" class = "divInnerAddPhoto">
		                  <b class="bClose" onclick="document.getElementById('hidden-content').innerHTML = '';">X</b>                          
		             </div>
	             </div>`;
    document.getElementById('hidden-content').innerHTML = html;

    if (!user) {
        divInnerAddPhoto.innerHTML += 'Only authorized users can add photos';
        return false;
    }

    html = `
               <form>    
                   Select photo<br/><br/>					   
				   <input id="addPhotoLink" type = "file" /><br/><br/>					   
				   <textarea id="addPhotoHash" placeholder="#hashtag..." rows="2" style="width:100%;position: relative;resize: none;"></textarea><br/><br/>	
				   <textarea id="addPhotoDesc" placeholder="description" rows="4" style="width:100%;resize:none;"></textarea><br/><br/>	
	               <input type="reset" value="reset" style="width:40%;"  class="add-btn"/>
				   <input id="submitPhotoPost" type="submit" value="save"  style="width:40%;" class="add-btn"/>
             </form> `;
    divInnerAddPhoto.innerHTML += html;

    submitPhotoPost.onclick = () => {
        photoActions.addPhotoPostServer(addPhotoDesc.value, addPhotoLink.value, addPhotoHash.value, localStorage.getItem('user'));
    }
};

var editPhotoPost = (id) => {

    let html = `	  
                <div id="divOuterEditPhoto" class = "divOuterLogin">
                     <div id="divInnerEditPhoto" class = "divInnerAddPhoto">
		                  <b class="bClose" onclick="document.getElementById('hidden-content').innerHTML = '';">X</b>                          
		             </div>
	             </div>`;
    document.getElementById('hidden-content').innerHTML = html;

    let post = {};
    post = photoActions.getPhotoPostServer(id);
    html = `<form><img src ="` + post.photoLink + `" style = "width:20%;"/><br>     
                   Select photo :				   
				   <input id="addPhotoLink" type = "file" /><br/><br/>					   
				   <textarea id="addPhotoHash" placeholder="#hashtag..." rows="2" style="width:100%;position: relative;resize: none;">`
        + post.hashTags.join(" ") +
        `</textarea><br/><br/>	
				    <textarea id="addPhotoDesc" placeholder="description" rows="4" style="width:100%;resize:none;">`
        + post.description +
        `</textarea><br/><br/>
	               <input type="reset" value="reset" style="width:40%;"  class="add-btn"/>
				   <input id="submitEditPost" type="submit" value="save"  style="width:40%;" class="add-btn"/>
             </form> `;

    divInnerEditPhoto.innerHTML += html;
    window.scrollTo(0, 0);

    submitEditPost.onclick = () => {
        photoActions.editPhotoPostServer(id, addPhotoDesc.value, addPhotoLink.value, addPhotoHash.value, localStorage.getItem('user'));
    }

};

let viewPhotoPosts = (t) => {
    let html = `	  
                <div id="divOuterViewPhoto" class = "divOuter">
                     <div id="divInnerViewPhoto" class = "divInnerViewPhoto">
		                  <b class="bClose" onclick="document.getElementById('hidden-content').innerHTML = '';">X</b>                          
		             </div>
	             </div>`;
    document.getElementById('hidden-content').innerHTML = html;

    let post = {};
    post = photoActions.getPhotoPostServer(t.parentNode.dataset.id);

    html = '<img src ="' + post.photoLink + '" style = "width:50%;"/><br>';
    html += '<div>' + DOMActions.genDate(post.createdAt) + '</div><br>';
    html += '<div id="hashTags-view">' + DOMActions.genHashTags(post.hashTags) + '</div><br>';
    html += '<div><i>' + post.description + '</i></div><br>';
    html += '<div class="like-info"></div>';

    divInnerViewPhoto.innerHTML += html;

    if (user) {
        photoActions.likePhotoPostServer(post.id, user);
        photoActions.likePhotoPostServer(post.id, user);
    }
    window.scrollTo(0, 0);
};

window.onload = () => {
    DOMActions.showPostPhoto();
};













