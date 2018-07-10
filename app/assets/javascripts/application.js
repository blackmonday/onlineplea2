/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {

    /* *************** */
    /* *************** */
    /* *************** */
    /* *************** */
    /* CHARACTER COUNT */
    var text_max = 50; // This the maximum character count
    var text_spread = 10; // This calculates when to change the text colour to red

    $('#character_count').html('Character count: 0 /' + text_max);

    $('#guilty-more-detail').keyup(function() {
        var text_length = $('#guilty-more-detail').val().length;

        if (text_length > (text_max/2)) {
            $('#character_count').css('display','block');
            $('#character_count').html('You have ' + (text_max-text_length) + ' characters remaining');
        } else {
            $('#character_count').css('display','none');
        }

        if (text_length > (text_max-text_spread)) {
            $('#character_count').css('color','#B10E1E');
        } else {
            $('#character_count').css('color','#6F777B');
        }

        if (text_length > text_max) {
            $('#character_count').addClass('govuk-!-font-weight-bold');
            $('#character_count').html('You have ' + (text_max-text_length)*-1 + ' characters too many');
            $('#guilty-more-detail').addClass('character_count_highlight');
        } else {
            $('#character_count').removeClass('govuk-!-font-weight-bold');
            $('#guilty-more-detail').removeClass('character_count_highlight');
        }
    });        

})
