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
$('#shopForm').submit(function(e) {
    e.preventDefault();
    matchCategory();
    option.val('Pick 1 category');
    shopText.val('');
});

//toggle + sign on h1
$('.fa-plus').click(function() {
    $('#shopForm').fadeToggle();
});

//loop ul to match the category
const option = $('#category');
const shopText = $('#addText');

function matchCategory() {
    let uls = $('div').find('ul');
    uls.each(function() {
        if ($(this).attr('id') == option.val()) {
            $(this).append(`<li><span><i class='fa fa-trash'></i></span>${shopText.val()}</li>`);
        }
    });
}

matchCategory();