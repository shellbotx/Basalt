const $ = require('jquery');


$(document).ready(function() {
    var $grid = $('.l-grid').masonry({
        itemSelector: '.l-grid__item',
        columnWidth: '.l-grid__sizer',
        gutter: '.l-grid__gutter',
        percentPosition: true,
    });

    $grid.imagesLoaded().progress( function() {
	  $grid.masonry('layout');
	});
});