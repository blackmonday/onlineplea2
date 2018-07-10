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
    var text_max = 140; // This the maximum character count
    var text_spread = 20; // This calculates when to change the text colour to red

    $('#guilty-character_count').html('');
    $('#not-guilty-character_count').html('');
    $('#benefits-character_count').html('');
    $('#other-expenses-character_count').html('');
    $('#prosecution-witness-character_count').html('');
    $('#defence-witness-character_count').html('');
    $('#dates-to-avoid-1-detail').html('');
    $('#other-employment-status-details').html('');
    
    /* GUILTY PLEA MITIGATION*/
    $('#guilty-more-detail').keyup(function() {
        var text_length = $('#guilty-more-detail').val().length;

        if (text_length > (text_max/2)) {
            $('#guilty-character_count').css('display','block');
            $('#guilty-character_count').html('You have ' + (text_max-text_length) + ' characters remaining');
        } else {
            $('#guilty-character_count').css('display','none');
        }

        if (text_length > (text_max-text_spread)) {
            $('#guilty-character_count').css('color','#B10E1E');
        } else {
            $('#guilty-character_count').css('color','#6F777B');
        }

        if (text_length > text_max) {
            $('#guilty-character_count').addClass('govuk-!-font-weight-bold');
            $('#guilty-character_count').html('You have ' + (text_max-text_length)*-1 + ' characters too many');
            $('#guilty-more-detail').addClass('character_count_highlight');
        } else {
            $('#guilty-character_count').removeClass('govuk-!-font-weight-bold');
            $('#guilty-more-detail').removeClass('character_count_highlight');
        }
    });        

    /* NOT GUILTY PLEA MITIGATION */
    $('#not-guilty-more-detail').keyup(function() {
        var text_length = $('#not-guilty-more-detail').val().length;

        if (text_length > (text_max/2)) {
            $('#not-guilty-character_count').css('display','block');
            $('#not-guilty-character_count').html('You have ' + (text_max-text_length) + ' characters remaining');
        } else {
            $('#not-guilty-character_count').css('display','none');
        }

        if (text_length > (text_max-text_spread)) {
            $('#not-guilty-character_count').css('color','#B10E1E');
        } else {
            $('#not-guilty-character_count').css('color','#6F777B');
        }

        if (text_length > text_max) {
            $('#not-guilty-character_count').addClass('govuk-!-font-weight-bold');
            $('#not-guilty-character_count').html('You have ' + (text_max-text_length)*-1 + ' characters too many');
            $('#not-guilty-more-detail').addClass('character_count_highlight');
        } else {
            $('#not-guilty-character_count').removeClass('govuk-!-font-weight-bold');
            $('#not-guilty-more-detail').removeClass('character_count_highlight');
        }
    });

    /* YOUR INCOME - OTHER EMPLOYMENT DETAILS */
    $('#other-employment-status-details').keyup(function() {
        var text_length = $('#other-employment-status-details').val().length;

        if (text_length > (text_max/2)) {
            $('#other-employment-status-character_count').css('display','block');
            $('#other-employment-status-character_count').html('You have ' + (text_max-text_length) + ' characters remaining');
        } else {
            $('#other-employment-status-character_count').css('display','none');
        }

        if (text_length > (text_max-text_spread)) {
            $('#other-employment-status-character_count').css('color','#B10E1E');
        } else if (text_length <= (text_max-text_spread)) {
            $('#other-employment-status-character_count').css('color','#6F777B');
        }

        if (text_length > text_max) {
            $('#other-employment-status-character_count').addClass('govuk-!-font-weight-bold');
            $('#other-employment-status-character_count').html('You have ' + (text_max-text_length)*-1 + ' characters too many');
            $('#other-employment-status-details').addClass('character_count_highlight');
        } else if (text_length <= text_max) {
            $('#other-employment-status-character_count').removeClass('govuk-!-font-weight-bold');
            $('#other-employment-status-details').removeClass('character_count_highlight');
        }
    });
    
    /* YOUR INCOME - BENEFITS */
    $('#claiming-benefits-details').keyup(function() {
        var text_length = $('#claiming-benefits-details').val().length;

        if (text_length > (text_max/2)) {
            $('#benefits-character_count').css('display','block');
            $('#benefits-character_count').html('You have ' + (text_max-text_length) + ' characters remaining');
        } else if (text_length <= (text_max/2)) {
            $('#benefits-character_count').css('display','none');
        }

        if (text_length > (text_max-text_spread)) {
            $('#benefits-character_count').css('color','#B10E1E');
        } else if (text_length <= (text_max-text_spread)) {
            $('#benefits-character_count').css('color','#6F777B');
        }

        if (text_length > text_max) {
            $('#benefits-character_count').addClass('govuk-!-font-weight-bold');
            $('#benefits-character_count').html('You have ' + (text_max-text_length)*-1 + ' characters too many');
            $('#claiming-benefits-details').addClass('character_count_highlight_2');
        } else if (text_length <= text_max) {
            $('#benefits-character_count').removeClass('govuk-!-font-weight-bold');
            $('#claiming-benefits-details').removeClass('character_count_highlight_2');
        }
    });
    
    
    
    
    
    
    
    
    
    
    
    /* OTHER EXPENSES DETAILS */
    $('#other-expenses-details').keyup(function() {
        var text_length = $('#other-expenses-details').val().length;

        if (text_length > (text_max/2)) {
            $('#other-expenses-character_count').css('display','block');
            $('#other-expenses-character_count').html('You have ' + (text_max-text_length) + ' characters remaining');
        } else {
            $('#other-expenses-character_count').css('display','none');
        }

        if (text_length > (text_max-text_spread)) {
            $('#other-expenses-character_count').css('color','#B10E1E');
        } else {
            $('#other-expenses-character_count').css('color','#6F777B');
        }

        if (text_length > text_max) {
            $('#other-expenses-character_count').addClass('govuk-!-font-weight-bold');
            $('#other-expenses-character_count').html('You have ' + (text_max-text_length)*-1 + ' characters too many');
            $('#other-expenses-details').addClass('character_count_highlight');
        } else {
            $('#other-expenses-character_count').removeClass('govuk-!-font-weight-bold');
            $('#other-expenses-details').removeClass('character_count_highlight');
        }
    });
    
    /* PROSECUTION WITNESS DETAILS */
    $('#prosecution-witness-attend-1-detail').keyup(function() {
        var text_length = $('#prosecution-witness-attend-1-detail').val().length;

        if (text_length > (text_max/2)) {
            $('#prosecution-witness-character_count').css('display','block');
            $('#prosecution-witness-character_count').html('You have ' + (text_max-text_length) + ' characters remaining');
        } else {
            $('#prosecution-witness-character_count').css('display','none');
        }

        if (text_length > (text_max-text_spread)) {
            $('#prosecution-witness-character_count').css('color','#B10E1E');
        } else {
            $('#prosecution-witness-character_count').css('color','#6F777B');
        }

        if (text_length > text_max) {
            $('#prosecution-witness-character_count').addClass('govuk-!-font-weight-bold');
            $('#prosecution-witness-character_count').html('You have ' + (text_max-text_length)*-1 + ' characters too many');
            $('#prosecution-witness-attend-1-detail').addClass('character_count_highlight');
        } else {
            $('#prosecution-witness-character_count').removeClass('govuk-!-font-weight-bold');
            $('#prosecution-witness-attend-1-detail').removeClass('character_count_highlight');
        }
    });
    
    /* DEFENCE WITNESS DETAILS */
    $('#defence-witness-attend-1-detail').keyup(function() {
        var text_length = $('#defence-witness-attend-1-detail').val().length;

        if (text_length > (text_max/2)) {
            $('#defence-witness-character_count').css('display','block');
            $('#defence-witness-character_count').html('You have ' + (text_max-text_length) + ' characters remaining');
        } else {
            $('#defence-witness-character_count').css('display','none');
        }

        if (text_length > (text_max-text_spread)) {
            $('#defence-witness-character_count').css('color','#B10E1E');
        } else {
            $('#defence-witness-character_count').css('color','#6F777B');
        }

        if (text_length > text_max) {
            $('#defence-witness-character_count').addClass('govuk-!-font-weight-bold');
            $('#defence-witness-character_count').html('You have ' + (text_max-text_length)*-1 + ' characters too many');
            $('#defence-witness-attend-1-detail').addClass('character_count_highlight');
        } else {
            $('#defence-witness-character_count').removeClass('govuk-!-font-weight-bold');
            $('#defence-witness-attend-1-detail').removeClass('character_count_highlight');
        }
    });
    
    /* DEFENCE WITNESS DETAILS */
    $('#dates-to-avoid-1-detail').keyup(function() {
        var text_length = $('#dates-to-avoid-1-detail').val().length;

        if (text_length > (text_max/2)) {
            $('#dates-to-avoid-1-character_count').css('display','block');
            $('#dates-to-avoid-1-character_count').html('You have ' + (text_max-text_length) + ' characters remaining');
        } else {
            $('#dates-to-avoid-1-character_count').css('display','none');
        }

        if (text_length > (text_max-text_spread)) {
            $('#dates-to-avoid-1-character_count').css('color','#B10E1E');
        } else {
            $('#dates-to-avoid-1-character_count').css('color','#6F777B');
        }

        if (text_length > text_max) {
            $('#dates-to-avoid-1-character_count').addClass('govuk-!-font-weight-bold');
            $('#dates-to-avoid-1-character_count').html('You have ' + (text_max-text_length)*-1 + ' characters too many');
            $('#dates-to-avoid-1-detail').addClass('character_count_highlight');
        } else {
            $('#dates-to-avoid-1-character_count').removeClass('govuk-!-font-weight-bold');
            $('#dates-to-avoid-1-detail').removeClass('character_count_highlight');
        }
    });

})
