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
$('.addItem').change(function(e) {
    e.preventDefault();
    $('#submitBtn').on('click', matchCategory);
});

//toggle + sign on h1
$('.fa-plus').click(function() {
    $('#shopForm').fadeToggle();
});

//loop ul to match the category
function matchCategory() {
    let shopText = $('input').val();
    $('input').val('');
    let $option = $('option').val();
    $('option').val('Pick 1 category');
    let uls = $('div').find('ul');
    $('uls').each(function() {
        if ($(this).attr('id') == $option) {
            $('matchedUl').append(`<li><span><i class='fa fa-trash'></i></span>${shopText}</li>`);
        }
    });
}
matchCategory();