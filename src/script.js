const $ = require('jquery');
const Masonry = require('masonry-layout');

$(document).ready(function() {
	var masonry = new Masonry('.l-grid', {
        itemSelector: '.l-grid__item',
        columnWidth: '.l-grid__sizer',
        gutter: '.l-grid__gutter',
        percentPosition: true,
    });
});