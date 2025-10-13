const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const target = document.getElementById("testimonials");
const dropButton = document.getElementById("dropdownButton");
const dropMenu = document.getElementById("dropdownMenu");

//Hamburger button listener
btn.addEventListener("click", navToggle);

//dropdownbutton listener
dropButton.addEventListener("click", toggleDropdown);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

function toggleDropdown() {
  dropMenu.classList.toggle("hidden");
}

//closging the dropdown when clicking outside
document.addEventListener("click", function (event) {
  const isClickInsideButton = dropButton.contains(event.target);
  const isClickInsideMenu = dropMenu.contains(event.target);

  if (!isClickInsideButton && !isClickInsideMenu) {
    dropMenu.classList.add("hidden");
  }
});

// Intersection Observer API
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // console.log(entry.target);
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    root: null, // null = viewport
    rootMargin: "0px", // margin around the viewport
    threshold: 0.4, // 0.4 = 40% of the target is visible
  }
);

observer.observe(target);
