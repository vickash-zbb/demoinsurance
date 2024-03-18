//
document.addEventListener("DOMContentLoaded", function () {
  const OruStory = document.querySelector(".our_story");
  const storyList = document.querySelector(".story_list");
  const menuTabs = OruStory.querySelectorAll(".story_list > div");
  const storyBody = OruStory.querySelector(".story_body");
  const storyBodyElements = OruStory.querySelectorAll(".story_body > div");

  menuTabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
      const activeTab = storyList.querySelector(".active");
      if (activeTab) {
        activeTab.classList.remove("active");
      }
      tab.classList.add("active");

      const activeBodyElement = storyBody.querySelector(".active");
      if (activeBodyElement) {
        activeBodyElement.classList.remove("active");
      }
      storyBodyElements[index].classList.add("active");
    });
  });
});

// our story end

// accordion start

// //
const accordions = document.getElementsByClassName("accordion-list-container");

for (let index = 0; index < accordions.length; index++) {
  accordions[index].addEventListener("click", function () {
    // Toggle the "active" class for the clicked accordion item
    this.classList.toggle("active");

    // Close other accordion items if they are open
  });
}

// Select the navigation bar element
const navBar = document.querySelector(".nav-bar_nav");

// Get the initial position of the navigation bar
const navBarPosition = navBar.offsetTop;

// Function to handle scroll event
function handleScroll() {
  // Check if the page has scrolled past the initial position of the navigation bar
  if (window.pageYOffset >= navBarPosition) {
    // Add a class to fix the navigation bar
    navBar.classList.add("fixed");
  } else {
    // Remove the class to unfix the navigation bar
    navBar.classList.remove("fixed");
  }
}

// Add event listener for scroll event
window.addEventListener("scroll", handleScroll);

// navbar menu
const menu = document.querySelector(".menu");
const menulist = document.querySelector("nav .nav-bar");
menu.addEventListener("click", function () {
  menulist.classList.toggle("showmenu");
});
