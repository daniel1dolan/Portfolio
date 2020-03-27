let element = document.querySelector(".typed");

var options = {
  strings: [
    "<strong>I'm</strong> a web developer.",
    "<strong>I</strong> love the outdoors.",
    "<strong>I</strong> have a Psychology Degree.",
    "<strong>I</strong> love learning."
  ],
  typeSpeed: 100,
  loop: true
};

var typed = new Typed(".typed", options);
