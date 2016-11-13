$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

$(document).ready(function(){

    var children = $('nav li').children();
    var anArray = [];

    for (var i = 0; i < children.length - 1; i++) {
        var aChild = children[i];
        var ahref = $(aChild).attr('href');

        anArray.push(ahref);
    }

    var canFadeElements = $(".canFade");
    var fadingArray = [];

    for (var i = 0; i < canFadeElements.length - 1; i++) {
        fadingArray.push(canFadeElements[i]);
    }

    $(window).scroll(function() {
        var windowPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var docHeight = $(document).height();

        for (var i = 0; i < anArray.length; i++) {
            var theId = anArray[i];

            var divPos = $(theId).offset().top;
            var divHeight = $(theId).height();

            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                $("a[href='" + theId + "']").addClass("nav-active");
            } else {
                $("a[href='" + theId + "']").removeClass("nav-active");
            }            
        }

        if (windowPos + windowHeight == docHeight) {
            if (!$("nav li:last-child a").hasClass("nav-active")) {
                var navActiveCurrent = $(".nav-active").attr("href");
                $("a[href= " + navActiveCurrent + "]").removeClass("nav-active");
                $("nav li:last-child a").addClass("nav-active");
            }
        }

        for (var i = 0; i < fadingArray.length; i++) {
            var element = fadingArray[i];

            var pos = $(element).offset().top;
            var height = $(element).height();

            if (windowPos >= pos && windowPos < (pos + height)) {
                $(element).addClass("fade-in");
            } else {
                $(element).removeClass("fade-in");
            }
        }
    });  
});