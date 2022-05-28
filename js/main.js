(function () {
  " strict";

  var fullHeight = function () {
    if (!isMobile.any()) {
      $(".js-fullheight").css("height", $(window).height());
      $(window).resize(function () {
        $(".js-fullheight").css("height", $(window).height());
      });
    }
  };

  var contentWayPoint = function () {
    var i = 0;
    $(".animate-box").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("animated-fast")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .animate-box.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass(" animated-fast");
                  } else if (effect === "fadeInLeft") {
                    el.addClass(" animated-fast");
                  } else if (effect === "fadeInRight") {
                    el.addClass(" animated-fast");
                  } else {
                    el.addClass(" animated-fast");
                  }

                  el.removeClass("item-animate");
                },
                k * 100,
                ""
              );
            });
          }, 50);
        }
      },
      { offset: "85%" }
    );
  };

  var goToTop = function () {
    $(".js-gotop").on("click", function (event) {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $("html").offset().top,
        },
        500,
        "easeInOutExpo"
      );

      return false;
    });

    $(window).scroll(function () {
      var $win = $(window);
      if ($win.scrollTop() > 300) {
        $(".js-top").addClass("active");
      } else {
        $(".js-top").removeClass("active");
      }
    });
  };

  $(function () {
    contentWayPoint();
    goToTop();
    loaderPage();
    fullHeight();
    parallax();
    skillsWayPoint();
  });
})();
