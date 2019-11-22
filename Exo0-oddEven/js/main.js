(function($){
    $(document).ready(()=> {
        $("#even").click(()=> {
            $( ".block" ).empty();
            var resultInput = $('#result').val();
            for (i=0 ; i<= resultInput ; i++){
                if (i%2 == 0){
                    $(".block").append('<div class = "view">'+ i +'</div>');
                };    
            }
        })
        $("#odd").click(()=> {
            var resultInput = $('#result').val();
            $( ".block" ).empty();
            for (i=0 ; i<= resultInput ; i++){
                if (i%2 !== 0){
                    $(".block").append('<div class = "view">'+ i +'</div>');
                    $(".view").css( "background-color", "lightgreen" ); 
                };    
            }
        })
    });    
})(jQuery);





