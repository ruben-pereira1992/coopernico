$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        placement : 'bottom',
        trigger:'hover'
   });


   $("#menu-search-icon").click(openSearch);

});

function openSearch(){
    if( $("#search-input").hasClass("active")){
        $("#search-input").removeClass("active");

    }else{
        $("#search-input").addClass("active");
        $("#search-input").focus();
    }
}

function openMobile(){
    
}

