// NAVIGATION MENU
document.addEventListener('DOMContentLoaded', function() {
  const hamburgers = document.querySelectorAll('.hamburger')
  const mobileNavs = document.getElementsByClassName('nav-links')[0]  

  for (var i = 0; i < hamburgers.length; i++) {
    hamburgers[i].addEventListener('click', function() {
      this.classList.toggle('active')
      mobileNavs.classList.toggle('active')
    })
  }
})


// ANIMATE WHEN VIEWPORT COMES TO THE SCREEN - IT'S ADDING .ANIMATE CLASS WHEN THE VIEWPORT COCMES BASED ON THE .ANIMATED-ITEM CLASS
// Function to handle the intersection of elements
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      // Stop observing the element after it's animated
      observer.unobserve(entry.target);
    }
  });
}
// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // Customize the root margin as needed
  threshold: 0.5, // Adjust the threshold as needed (0.5 means at least 50% of the element must be in the viewport)
});
// Get all elements with the 'animated-element' class and observe them
const animatedElements = document.querySelectorAll('.animated-element');
animatedElements.forEach((element) => {
  observer.observe(element);
});

// ACCORDION
var accdr = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accdr.length; i++) {
  accdr[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}