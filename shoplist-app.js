//check off specific toshop by clicking
$('ul').on('click', 'li', function() {
    $(this).toggleClass('completed');
});
//click to delete
$('ul').on('click', 'span', function(e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    e.stopPropagation();
});
//add text to input box
$('.addItem').change(function() {
    $('submitBtn').on(click, function(e) {
        let shopText = $(this).val();
        $(this).val('');
        $('ul').append(`<li><span><i class='fa fa-trash'></i></span>${shopText}</li>`);
    });
});

//toggle + sign on h1
$('.fa-plus').click(function() {
    $('#addText').fadeToggle();
});