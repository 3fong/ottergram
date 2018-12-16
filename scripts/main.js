var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function setDetails(imgUrl,title) {
    'use strict';
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src',imgUrl);

    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = title;
}

function imageFromThumb(thumbnail){
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail){
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail){
    'use strict';
    setDetails(imageFromThumb(thumbnail),titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb){
    'use strict';
    thumb.addEventListener('click',function(event){
        event.preventDefault();
        setDetailsFromThumb(thumb);
    });
}

function initializeEvents() {
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArr = [].slice.call(thumbnails);
    thumbnailArr.forEach(addThumbClickHandler);
}

initializeEvents();
