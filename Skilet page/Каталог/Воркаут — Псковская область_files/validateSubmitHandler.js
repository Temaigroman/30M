$(document).ready(function() {

    function showLoader(){
        $(".loader").fadeIn("slow");
        $("#preloder").delay(50).fadeIn("slow");
    }

    function hideLoader(){
        $(".loader").fadeOut("slow");
        $("#preloder").delay(50).fadeOut("slow");
    }

    function toastrSend(mes){
        // toastr.options = {
        //     "closeButton": true,
        //     "debug": false,
        //     "newestOnTop": false,
        //     "progressBar": false,
        //     "positionClass": "toast-bottom-right",
        //     "preventDuplicates": false,
        //     "onclick": null,
        //     "showDuration": "300",
        //     "hideDuration": "1000",
        //     "timeOut": "2000",
        //     "extendedTimeOut": "1000",
        //     "showEasing": "swing",
        //     "hideEasing": "linear",
        //     "showMethod": "fadeIn",
        //     "hideMethod": "fadeOut"
        // };
        toastr.success(mes);
    }

    $.fn.customSubmitHandler = function customSubmitHandler(form_) {
        if(form_) {
            console.log('click');
            var form = $('#' + form_.id);
            var container = form.find('.alert-error');

            // var formData = new FormData(document.querySelector('form'));

            var params = form.serializeArray();
            var formData = new FormData();
            var filefields = form.find('input[type="file"]');
            if (filefields.length > 0) {
                $.each(filefields, function () {
                    var elem = $(this);
                    var files = elem[0].files;
                    for (var i = 0; i < files.length; i++) {
                        formData.append(elem.attr('name'), files[i]);
                    }
                });
            }
            $(params).each(function (index, element) {
                formData.append(element.name, element.value);
            });


            $.ajax({
                debug: true,
                type: form.attr('method'),
                url: form.attr('action'),
                data: formData,
                processData: false,
                contentType: false,
                beforeSend: function ( xhr ) {
                    // showLoader()
                    form.addClass('loading');
                    // $('.reception-form').addClass('white-mode');
                },
                success: function (res) {
                    form.removeClass('loading');
                    // hideLoader()
                    if (res.status === true) {
                        message = ''
                        res.message.forEach(function (mes) {
                            message += '<div>' + mes + '</div>';
                        });

                        if (form.hasClass('pjax'))
                            $.pjax.reload('#pjax-container', {fragment: '#table'});
                        else if (form.hasClass('reload'))
                            window.location.reload();
                        else if (form.hasClass('redirect'))
                            window.location.href = res.url;
                        else if (form.hasClass('in-modal')){
                            form[0].reset();
                            toastrSend(message)
                            setTimeout(function () {
                                form.parents('.modal').modal('hide');
                            }, 500);
                        }
                        else {

                            form[0].reset();
                            container.hide().empty();
                            container.removeClass('alert-danger');
                            container.addClass('alert-success');
                            container.append(message);
                            container.show();

                            $('.block_error').show();

                        }
                        // $('html, body').animate({
                        //     scrollTop: $('body')
                        // }, 2000);
                        // setTimeout(function () {
                        //     container.hide();
                        //     window.location.href = '/';
                        // }, 2500);


                        //отправка всплывающего текста
                        // var messageText = ''
                        // res.message.forEach(function (mes) {
                        //     messageText += " <div> "  + mes + " </div> "
                        // });
                        // toastrSend(messageText)
                    } else {
                        container.hide().empty();
                        container.addClass('alert-danger');
                        res.message.forEach(function (mes) {
                            container.append('<div>' + mes + '</div>');
                        });
                        container.show();
                        $('.block_error').show();
                    }
                }
            });
        }
    };
});