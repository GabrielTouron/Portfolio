(function ($) {
    var milisec = 0,
        sec = 0,
        min = 0,
        hour = 0;
    $('.mili').text('00 ms');$('.sec').text('0 s');$('.min').text('0 m');$('.hour').text('0 h');
    $('#start').on('click', function () {;
        function count() {
            if (milisec > 100) {
                milisec = 0;
            } 
            $('.mili').text(milisec+" ms");
            milisec++
            if (milisec == 100) {
                sec++;
            $('.sec').text(sec+" sec");    
            }
            if (sec == 60) {
                sec = 0;
                min++;
            $('.min').text(min+" min");    
            }
        }
        var chrono = setInterval(count,10);
        $('#stop').on('click', function () {
            clearInterval(chrono);        
        })
        $('#reset').on('click', function () {
            console.log('ok');
            milisec = 0;
            sec = 0;
            min = 0;
            hour = 0;
            $('.mili').text('00 ms');$('.sec').text('0 s');$('.min').text('0 m');$('.hour').text('0 h');
        })  
    }) 
})(jQuery);

