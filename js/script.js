// our story
document.addEventListener =
  ("DOMContentLoaded",
  function () {
    let OruStory = document.querySelector(".our_story");
    let storyList = document.querySelector(".story_list");
    let menuTab = OruStory.querySelectorAll(".story_list > div");
    let storyBody = OruStory.querySelector(".story_body");
    let storyBodyElement = OruStory.querySelectorAll(".story_body > div");

    menuTab.forEach((tab, index) => {
      tab.addEventListener("click", function () {
        storyList.querySelector(".active").classList.remove("active");
        tab.classList.add("active");

        storyBody.querySelector(".active").classList.remove("active");
        storyBodyElement[index].classList.add("active");
      });
    });
  });

// our story end

// accordion start
const accordion = document.getElementsByClassName("accordion-list-container");
for (let index = 0; index < accordion.length; index++) {
  accordion[index].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

// navbar
const menu = document.querySelector(".menu");
const menulist = document.querySelector("nav .nav-bar");
menu.addEventListener("click", function () {
  menulist.classList.toggle("showmenu");
});
// nav scrol function
function nav(scroll) {}
window.onscroll = function () {
  myFunction();
};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

var stickyOffset = $(".nav-bar_nav").offset().top;

$(window).scroll(function () {
  var nav = $(".nav-bar_nav"),
    scroll = $(window).scrollTop();

  if (scroll >= stickyOffset) nav.addClass("sticky");
  else nav.removeClass("sticky");
});

$(window).scroll(function () {
  var sticky = $(".nav-bar_nav"),
    scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass("fixed");
  else sticky.removeClass("fixed");
});
