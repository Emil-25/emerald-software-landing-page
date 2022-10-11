//navbar-movement
let scrollHeight = scrollY;
$(window).on("scroll", function() {
    if (scrollY > scrollHeight) {
        $("#navbar")[0].style.top = "-100px";
    }
    else {
        $("#navbar")[0].style.top = "0px";
    }
    scrollHeight = scrollY;
})
