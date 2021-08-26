export default function Scroll() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 400) {
            $(".header").addClass("active");
        } else {
           $(".header").removeClass("active");
        }
    });
}