const $ = require('jquery');


$(document).ready(function() {
});

$(window).load(function() {
    // configure masonry
    $('.l-post-container').masonry({
            itemSelector: '.c-post',
            columnWidth: 400,
        },
        function() {
            $('.l-post-container').masonry({ appendedContent: $(this) });
        }
    );
});
