(function($) {
    $('.multilookup.selectpicker').on('change', function() {
        var keys = $(this).parents('.form-group').find('input[type="hidden"]').eq(0);
        var display = $(this).parents('.form-group').find('input[type="hidden"]').eq(1);
        keys.val($(this).find('option:selected').map(function(){ return $(this).val(); }).get().join(';'));
        display.val($(this).find('option:selected').map(function(){ return $(this).html().split('&nbsp;').join('').trim(); }).get().join(';'));
    });

})(jQuery);