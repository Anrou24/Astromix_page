
$(document).ready(function() {

    /**
     * Add classes (active) to one items by click
     */

    function addClassActive (f) {
        return function(e){
            e.preventDefault();
            $(f).removeClass("active");
            $(this).addClass("active");

            if($(f).hasClass("active")){
                e.stopPropagation();
            }
            $(document).click(function(){
                $(f).removeClass("active");
            });
        }
    }

    //add class  to item  sidebar nav
    $(".sidebar-nav-item").click(addClassActive(".sidebar-nav-item"));

    //add class (active) when need change view
    $(".btn__view-item").click(addClassActive(".btn__view-item"));


    /**
     * Add classes (active) to multiple items by click
     */

    function addClassActiveMore (f, s) {
        return function(e){
            $(f).toggleClass("active");
            $(s).toggleClass("active");

            if($(f).hasClass("active")){
                e.stopPropagation();
            }
            $(document).click(function(){
                $(f).removeClass("active");
                $(s).removeClass("active");
            });
        }
    }

    //add class mobile version - sidebar
    $(".btn-mobile-nav").click(addClassActiveMore(".btn-mobile-nav", ".sidebar-content"));


    /**
     * Add height sidebar-content
     */

    function addheightSidebarContent() {
        var sidebarContent = $('.sidebar-content');
        var pageWidth = $(window).innerWidth();
        var pageHeight = $(window).height()-50;
        if (pageWidth < 992) {
            console.log($(window).height());
            sidebarContent.css("height", pageHeight);
        }
    }

    addheightSidebarContent();
    $(window).resize(addheightSidebarContent);

});

