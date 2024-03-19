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
// Function to animate the counting effect// Function to animate the counting effect
function animateCount(element, target, duration) {
  let start = 0;
  const step = Math.ceil(target / (duration / 30)); // Calculate step based on duration (30 frames per second)
  const timer = setInterval(function () {
    start += step;
    element.innerText = start + "+"; // Add plus sign
    if (start >= target) {
      element.innerText = target + "+"; // Add plus sign
      clearInterval(timer);
    }
  }, 30);
}

// Intersection Observer callback function
function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.getAttribute("data-count"));
      animateCount(entry.target, target, 1000); // Adjust duration as needed
      observer.unobserve(entry.target); // Unobserve the target once animation starts
    }
  });
}

// Create an Intersection Observer instance
const observer = new IntersectionObserver(handleIntersect, {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
});

// Observe each number element
const numberElements = document.querySelectorAll(".number");
numberElements.forEach(function (numberElement) {
  observer.observe(numberElement);
});
