var options = {
  strings: [
    "<strong>I'm</strong> a web developer.",
    "<strong>I</strong> love the outdoors.",
    "<strong>I</strong> have a Psychology Degree.",
    "<strong>I</strong> love learning.",
  ],
  typeSpeed: 100,
  loop: true,
};

var typed = new Typed(".typed", options);

var options = {
  strings: ["Software"],
  typeSpeed: 100,
  loop: false,
};

var typed1 = new Typed(".typed1", options);

$(() => {
  $(document).ready(function () {
    $("a.scrollLink").click(function (event) {
      event.preventDefault();
      $("html, body").animate(
        { scrollTop: $($(this).attr("href")).offset().top },
        500
      );
    });
  });
  $("img", ".gifSet1").hover(function (e) {
    $(".preset-file1").toggle();
    $(".gif-file1").toggle();
  });
  $("img", ".gifSet2").hover(function (e) {
    $(".preset-file2").toggle();
    $(".gif-file2").toggle();
  });
  $("img", ".gifSet3").hover(function (e) {
    $(".preset-file3").toggle();
    $(".gif-file3").toggle();
  });
  $("img", ".gifSet4").hover(function (e) {
    $(".preset-file4").toggle();
    $(".gif-file4").toggle();
  });
  $("img", ".gifSet5").hover(function (e) {
    $(".preset-file5").toggle();
    $(".gif-file5").toggle();
  });
  $("img", ".gifSet6").hover(function (e) {
    $(".preset-file6").toggle();
    $(".gif-file6").toggle();
  });
});
