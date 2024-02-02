jQuery(function($) {

    // $(document).on('click', '.search-button', function(event) {
    //     event.preventDefault();
    //     $('body').addClass('searching');
    //     $('.search-model').fadeIn('fast');
    //     $('.search-clear').hide();
    // });

    // $(document).on('click', '.search-close', function(event) {
    //     event.preventDefault();
    //     $('body').removeClass('searching');
    //     $('.search-model').fadeOut('fast');
    //     $('.search-clear').trigger('click');
    // });

    // $(document).on('click', '.search-clear', function(event) {
    //     event.preventDefault();
    //     $('#search-query').val('');
    //     $('#search-pager').val(0);
    //     $('.search-results')
    //         .removeClass('processing')
    //         .html('<div class="search-empty"> Искать ... </div>');
    // });

    // $(document).on('keyup', '#search-query', function() {
    //     if ($(this).val() != "")
    //         $('.search-clear').show();
    //     else
    //         $('.search-clear').hide();
    // });

    // $(document).keyup(function(e) {
    //     if (e.keyCode == 27 && $('.search-model').is(':visible')) {
    //         event.preventDefault();
    //         $('.search-close').trigger('click');
    //     }
    // });

    $(document).on('submit', '#search-form', function(event) {
        event.preventDefault();
        var form = $(this);
        $.ajax({
            type: form.attr('method'),
            url: form.attr('action'),
            data: form.serialize(),
            beforeSend: function() {
                $('.search-results').addClass('processing');
            },
            success: function(result) {
                $('.search-results').removeClass('processing');
                $('.search-results').html($(result));

                $('.set-bg').each(function () {
                    var bg = $(this).data('setbg');
                    $(this).css('background-image', 'url(' + bg + ')');
                });

            }
        })
    })

    // $('.search-model').scroll(function() {
    //     var block = $(this);
    //     var form = $('#search-form');
    //     if(block.scrollTop() >= $('#search-results').height() - block.height()
    //         && !$('#search-results').hasClass('processing')
    //         && !$('#search-results').find('.search-end').is('div')) {
    //         $('input[name="page"]').val(parseInt($('input[name="page"]').val())+1);
    //         $.ajax({
    //             type: form.attr('method'),
    //             url: form.attr('action'),
    //             data: form.serialize(),
    //             beforeSend: function() {
    //                 $('#search-results').addClass('processing');
    //             },
    //             success: function(result) {
    //                 $('#search-results').removeClass('processing');
    //                 $('#search-results').append($(result));
    //             }
    //         })
    //     }
    // });

})
