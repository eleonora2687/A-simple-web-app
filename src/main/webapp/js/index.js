$(document).click(function(event) {
    if (
        $('.toggle > input').is(':checked') &&
        !$(event.target).closest('.toggle').length
    ) {
        $('.toggle > input').prop('checked', false);
    }
});
