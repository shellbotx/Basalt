const $ = require('jquery');


$(document).ready(function() {
});

$(window).load(function() {
    // configure masonry
    $('#post-container').masonry({
            itemSelector: '.post',
            columnWidth: 400,
        },
        function() {
            $('#post-container').masonry({ appendedContent: $(this) });
        }
    );
});
