'use strict';
(function ($) {

    jQuery(function ($) {
//        маска для ввода телефона
        $(".mask_phone").mask("8(999)999-99-99");
//        маска для ввода снилса
        $(".mask_snils").mask("999-999-999 99");
    });

    $(document).on('submit', '.ajax-submit', function(e) {
        e.preventDefault();
        $(this).customSubmitHandler(this)
    })


    // $('.datepicker-birthday').datepicker({
    //     format: 'dd.mm.yyyy',
    //     language: 'ru',
    //     startDate: '-200y',
    //     endDate: '0d',
    // });
    //
    // $('.datepicker').datepicker({
    //     format: 'dd.mm.yyyy',
    //     startDate: '-200y',
    //     language: 'ru',
    // });

    function showLoader(){
        $(".loader").fadeIn("slow");
        $("#preloder").delay(50).fadeIn("slow");
    }

    function hideLoader(){
        $(".loader").fadeOut("slow");
        $("#preloder").delay(50).fadeOut("slow");
    }

    $(document).on('click', '.button_add_cart', function(e) {
        e.preventDefault();
        var container = $('.catalog');
        if(container.length > 0){
            $.ajax({
                url: $(this).attr('href'),
                beforeSend: function () {
                    showLoader()
                },
                success: function (res) {
                    hideLoader()
                    window.location.reload()
                }
            });
        }

    });

    $(document).on('click', '.redirect_to', function(e) {
        e.preventDefault();
        var href = $(this).data('href-redirect')
        window.location = href
    });

    $(document).on('click', '.remove-cart-item', function(e) {
        e.preventDefault();
        $.ajax({
            url: $(this).attr('href'),
            beforeSend: function () {
                showLoader()
            },
            success: function (res) {
                hideLoader()
                if (res.status === true) {
                    window.location.reload()
                }else{
                    toastr.error(res.message);
                }
            }
        });
    });

    $(document).on('click', '.order-place', function(e) {
        e.preventDefault();
        $.ajax({
            url: $(this).attr('href'),
            beforeSend: function () {
                showLoader()
            },
            success: function (res) {
                hideLoader()
                // var href = $(this).data('href-redirect')
                var href = '/lk/orders'
                window.location = href
            }
        });
    });

    $(document).on('click', '.remove-filter', function(e) {
        e.preventDefault();
        var form = $(this).parents('form');
        form.find(':input').not('button').val('');
        form.trigger('submit')
    });


    $.fn.notify = function(options) {

        var defaults = {
            title: 'Ошибка!',
            text : '',
            buttons : null
        };

        options = $.extend(defaults, options);

        var modal = $('#alert');
        var trigger = $(this);
        modal.on('shown.bs.modal', function () {
            modal.find('.btn').focus();
        });
        modal.on('show.bs.modal', function () {
            if (options.buttons)
                modal.find('.modal-footer').html(options.buttons);
        });
        modal.on('hidden.bs.modal', function () {
            trigger.focus();
        });
        modal.find('.modal-body').html(options.text);
        modal.find('#alertLabel').html(options.title);


        modal.modal('show');
    };


    $(document).on('click', '[data-confirm]', function(e) {
        e.preventDefault();
        var that = $(this);
        var buttons = $('<div></div>');

        var reset = $('<button>', {
            text: 'Нет',
            class: 'btn btn-info'
        }).click(function(e) {
            e.preventDefault();
            $('#alert').modal('hide');
        }).appendTo(buttons);

        var confirm = $('<button>', {
            text: 'Да',
            class: 'btn btn-primary'
        }).click(function(e) {
            e.preventDefault();
            window.location.href = that.attr('href');
        }).appendTo(buttons);

        $(this).notify({title : 'Внимание!', text : $(this).data('confirm'), buttons : buttons});
    });

    $(document).on('click', '[data-editbox]', function(e) {
        e.preventDefault();
        var that = $(this);
        var buttons = $('<div></div>');

        var reset = $('<button>', {
            text: 'Отмена',
            class: 'btn btn-info'
        }).click(function(e) {
            e.preventDefault();
            $('#alert').modal('hide');
        }).appendTo(buttons);

        var confirm = $('<button>', {
            text: 'Продолжить',
            type: 'submit',
            class: 'btn btn-primary'
        }).click(function(e) {
            e.preventDefault();
            $('#modalEditboxForm').submit();
        }).appendTo(buttons);

        var editboxForm =
            '<form method="post" class="' + that.data('form-class') + ' " action="' + that.attr('href') + ' " id="modalEditboxForm" novalidate="1" enctype="multipart/form-data">\n' +
            '    <div class="form-group col-xs-12 ">\n' +
            '        <label class="control-label" for="modal-editbox">' + $(this).data('editbox') + '</label>\n' +
            '        <input class="form-control" type="text" id="modal-editbox" name="modal-editbox">\n' +
            '        <div class="alert alert-danger alert-error" style="display:none" id="div-register-errors"></div>\n' +
            '    </div>\n' +
            '</form>';

        $(this).notify({title : 'Внимание!', text : editboxForm, buttons : buttons});
    });




})(jQuery);


