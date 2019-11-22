(function ($) {
    let block = $('.block')
    $(document).on('input', '#slider1', function () {
        let rgb = $(this).val();
        $('#slider1_value').html(rgb);
        $(block).css('background-color', 'rgb(' + rgb + ',' + rgb + ',' + rgb + ')');
        $("#btn1").click(function () {
            $(block).css('background-color', '');
            $('#slider1').val('0');
            $('#slider1_value').html('0');
        });
    });
    $(document).on('input', '#slider2', function () {
        let padding = $(this).val();
        $('#slider2_value').html(padding);
        $(block).css('padding', padding);
        $("#btn2").click(function () {
            $(block).css('padding', '');
            $('#slider2').val('0');
            $('#slider2_value').html('0');
        });
    });
    $(document).on('input', '#slider3', function () {
        let height = $(this).val();
        $('#slider3_value').html(height);
        $(block).css('height', height);
        $("#btn3").click(function () {
            $(block).css('height', '');
            $('#slider3').val('0');
            $('#slider3_value').html('0');
        });
    });
    $(document).on('input', '#slider4', function () {
        let width = $(this).val();
        $('#slider4_value').html(width);
        $(block).css('width', width);
        $("#btn4").click(function () {
            $(block).css('width', '');
            $('#slider4').val('0');
            $('#slider4_value').html('0');
        });
    });
    $(document).on('input', '#slider5', function () {
        let arrounds = $(this).val();
        $('#slider5_value').html(arrounds);
        $(block).css('border-radius', arrounds + 'px');
        $("#btn5").click(function () {
            $(block).css('border-radius', '');
            $('#slider5').val('0');
            $('#slider5_value').html('0');
        });
    });
    $(document).on('input', '#slider6', function () {
        let rotation = $(this).val();
        $('#slider6_value').html(rotation);
        $(block).css('transform', 'rotate(' + rotation + 'deg)');
        $("#btn6").click(function () {
            $(block).css('transform', 'rotate(0deg)');
            $('#slider6').val('0');
            $('#slider6_value').html('0');
        });
    });
})(jQuery);

