if (!localStorage.getItem('user')) {
	localStorage.setItem('user', '');
}
var user = localStorage.getItem('user');

window.onload = () => {
	photoView.showPostPhoto();
};

document.getElementById('filt-input-name').onmousedown = () => {
	window.onmousedown = null;
	window.addEventListener('mousedown', () => {
	    return eventDelegation(event);
	});
};

document.getElementById('filt-input-hashtag').onmousedown = () => {
	window.onmousedown = null;
	window.addEventListener('mousedown', () => {
		return eventDelegation(event);
	});
};

window.addEventListener('mousedown', () => {
	return eventDelegation(event);
});

var eventDelegation = (e) => {
	let target = e.target;

	do {
		if (target.id === 'big-logo') {
			photoView.showPostPhoto();
			return false;
		}
		if (target.className === 'photo') {
			photoView.viewPhotoPosts(target);
			return false;
		}
		if (target.className === 'edit') {
			photoView.editPhotoPost(target);
			return false;
		}
		if (target.className === 'delete') {
			photoView.removePhotoPost(target);
			return false;
		}
		if (target.id === 'add-photo') {
			photoView.addPhotoPost();
			return false;
		}
		if (target.className === 'bClose') {
			photoView.bCloseHiddenContent();
			return false;
		}
		if (target.className === 'listHashtag') {
			photoView.filtHashtag(target);
			return false;
		}
		if (target.id === 'show-more-photo') {
			photoView.morePhoto();
			return false;
		}
		if (target.className === 'like' && user) {
			photoView.likePhotoPost(target);
			return false;
		}
		if (target.id === 'sign-out') {
			photoView.genLogOut();
			return false;
		}
		if (target.id === 'sign-in') {
			photoView.genLogIn();
			return false;
		}
		if (target.id === 'submit-input-login') {
			photoView.genLogForm();
			return false;
		}
		if (target.id === 'submit-input-login') {
			photoView.genLogForm();
			return false;
		}
		if (target.id === 'submitEditPost') {
			photoView.editPhotoPostSave();
			return false;
		}
		if (target.id === 'submitPhotoPost') {
			photoView.addPhotoPostSave();
			return false;
		}

		target = target.parentNode;
	} while (target);

	return false;
};

var filterEvents = () => {
	['filt-input-name', 'filt-input-date-from', 'filt-input-date-to', 'filt-input-hashtag'].forEach(
		(id) => {
			document.getElementById(id).addEventListener('input', () => {
				photoView.genPhotoPosts();
			});
		});
};
























