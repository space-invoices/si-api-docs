//= require ./all_nosearch
//= require ./app/_search

$(document).ready(function() {
    /**
     * Functionality to toggle nested model definitions
     */
    var expand_btn = $('a[href="#expand"]');
    var empty_btn_parent = $('a[href="#"]').parent().parent()
        .addClass('empty');
    
    expand_btn.click(function(e) {
        e.preventDefault();

        $(this).parent().parent()
            .nextUntil(empty_btn_parent)
            .toggle();
    });

    expand_btn.parent().parent()
        .nextUntil(empty_btn_parent)
        .addClass('nested')
        .hide();
})
