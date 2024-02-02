//ВАЛИДАЦИЯ ФОРМЫ Регистрации

$(document).ready(function() {
    var idform = 'registration-form';
    var idErrorsBlock = '#div-register-errors-' + idform
    var blockForm = $('#' + idform );

    //для того, чтобы не срабатывала валидация раньше времени(т.е. до того как пользователь нажмет кнопку отправить) из-за обработчиков событий onchange полей телефон и пол
    var invalidHandlerHappened = false;

    function CheckValid(e){
        var curForm = '#' + e.target.form.id;
        if(invalidHandlerHappened){
            $(curForm).valid();
        }

        var nameElem = e.currentTarget.name;//запускаем валидацию поля вручную
        // console.log($('#'+idElem));

        if(nameElem === "PASSWD"){//чтобы при изменении одного поля ошибка проверялась и для другого(иначе в массиве ошибок, останется лишняя ошибка)
            $(curForm).find('input[name=PASSWD2]').valid();
        }
        if(nameElem === "PASSWD2"){
            // $('#PASSWD').valid();
            $(curForm).find('input[name=PASSWD]').valid();
        }
        $(curForm).find('input[name=' + nameElem + ']').valid();
        // $('#'+nameElem).valid();
    }

    function initDatepickersAndMasks() {
        $("input[name='PASSWD']").on( "change", CheckValid);
        $("input[name='PASSWD2']").on( "change", CheckValid);
    }

    $.validator.addMethod(
        "confirmPasswd",
        function(value, element) {
            var cur_form = '#' + element.form.id;
            var password = $(cur_form).find('input[name=PASSWD]').val();
            var passwordConfirmation = $(cur_form).find('input[name=PASSWD2]').val();
            var isEqualPassw = (password === passwordConfirmation);
            if(element.name === 'PASSWD2'){//ошибка будет фиксироваться только для поля #PASSWD, чтобы не выводить ошибку дважды
                return true;
            }
            return isEqualPassw;
        },
        "Пароль и Подтверждение пароля не совпадают"
    );

    var validator = blockForm.validate({
        debug: true,
        rules: {
            LOGIN: {
                required: true,
            },
            PASSWD: {
                required: true,
                minlength: 6,
                confirmPasswd:true,
            },
            PASSWD2: {
                // required: true,
                // minlength: 6,
            },
            EMAIL: {
                required: true,
                email: true,
            },
            PHONE: {
                required: true,
            },
            SECONDNAME: {
                required: true,
            },
            FIRSTNAME: {
                required: true,
            },
            MIDDLENAME: {
                required: false,
            }
        },

        messages: {
            LOGIN: {
                required: 'Поле "Логин" должно быть заполнено',
            },
            PASSWD: {
                required: 'Поле "Пароль" должно быть заполнено',
                minlength: 'Длина пароля должна быть не менее 6 символов',
            },
            PASSWD2: {
                required: 'Поле "Пароль" должно быть заполнено',
                minlength: 'Длина пароля должна быть не менее 6 символов',
            },
            EMAIL: {
                required: 'Поле "Электронная почта" должно быть заполнено',
                email: 'Неверный формат адреса электронной почты',
            },
            PHONE: {
                required: 'Поле "Телефон" должно быть заполнено',
            },
            SECONDNAME: {
                required: 'Поле "Фамилия" должно быть заполнено',
            },
            FIRSTNAME: {
                required: 'Поле "Имя" должно быть заполнено',
            },
            MIDDLENAME: {
                required: 'Поле "Отчество" должно быть заполнено',
            }
        },
        errorLabelContainer: idErrorsBlock,
        wrapper: 'div',
        errorElement: "div",
        errorClass: "alert-danger",
        submitHandler: $(this).customSubmitHandler,
        invalidHandler: function(event, validator) {
            invalidHandlerHappened = true;
        },
    });

    initDatepickersAndMasks();
});