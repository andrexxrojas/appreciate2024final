//For mobile menu
let burger = document.querySelector(".burger");
let header = document.querySelector("header");
let closeBtn = document.querySelector(".closeBtn");

burger.addEventListener("click", function(){
  header.classList.add("active")
  disableScroll()
})

closeBtn.addEventListener("click", function(){
  header.classList.remove("active")
  enableScroll()
})

function disableScroll() {
  // Get the current page scroll position
  scrollTop =
      window.scrollY ||
      document.documentElement.scrollTop;
  scrollLeft =
      window.scrollX ||
      document.documentElement.scrollLeft,

      // if any scroll is attempted,
      // set this to the previous value
      window.onscroll = function () {
          window.scrollTo(scrollLeft, scrollTop);
      };
}

function enableScroll() {
    window.onscroll = function () { };
}