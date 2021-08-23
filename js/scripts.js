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
    $("header")[0].addClass("move-menu");    
    $("footer")[0].addClass("move-menu");    
    $("#main-content").addClass("move-menu");    
}



function openModal( name){
    $('#'+name).modal("show");
}

function closeModal( name){
    $('#'+name).modal("hide");
}