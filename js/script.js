(function($){
    $(function(){

        /***** Scroll to sections *****/
        $(".jq--scroll-our-pizza").click(function (){
           $("html, body").animate({scrollTop: $(".jq--our-pizza").offset().top}, 1000);
        });

        $(".jq--scroll-about-us").click(function (){
            $("html, body").animate({scrollTop: $(".jq--about-us").offset().top}, 1500);
        });

        $(".jq--scroll-references").click(function (){
            $("html, body").animate({scrollTop: $(".jq--references").offset().top}, 1700);
        });

        $(".jq--scroll-photo-gallery").click(function (){
            $("html, body").animate({scrollTop: $(".jq--photo-gallery").offset().top}, 1800);
        });

        $(".jq--scroll-contact").click(function (){
            $("html, body").animate({scrollTop: $(".jq--contact").offset().top}, 1900);
        });

        /***** Scroll buttons to sections *****/
        $(".jq--scroll-button-our-pizza").click(function (){
            $("html, body").animate({scrollTop: $(".jq--our-pizza").offset().top}, 1000);
        });

        $(".jq--scroll-button-references").click(function (){
            $("html, body").animate({scrollTop: $(".jq--references").offset().top}, 1500);
        });
    });
})(jQuery);