$(document).ready(function(){
    $(".clickable").click(function(){
        $("#walrus-showing").toggle();
        $("#walrus-hidden").toggle();
    });

    $(".show-big-walrus").click(function() {
        $("#walrus-info").fadeToggle();
        $("#big-walrus").slideToggle();
    });
});
            