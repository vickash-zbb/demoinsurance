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
