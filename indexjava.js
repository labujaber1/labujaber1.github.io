// Notes - var pre 2015, let/const after 2015

// FUNCTIONS 
/* Changes nav bar background colour to different colour when sticky css implemented */
// action when nav scrolls towards top of screen using event listener
const navColour = document.querySelector(".nav");
window.addEventListener("scroll", () => {
    if (window.scrollY > 1800 && window.scrollY < 6000 ) {
      navColour.classList.remove("stickyColourChange1","stickyColourChange2","stickyColourChange3");
      navColour.classList.add("stickyColourChange1");
    }
    else if (window.scrollY >= 6000 && window.scrollY < 10000) {
      navColour.classList.remove("stickyColourChange1","stickyColourChange2","stickyColourChange3");
      navColour.classList.add("stickyColourChange2");
    }
    else if (window.scrollY >= 10000) {
      navColour.classList.remove("stickyColourChange1","stickyColourChange2","stickyColourChange3");
      navColour.classList.add("stickyColourChange3");
    } 
    else {
      navColour.classList.remove("sticky");
      navColour.classList.remove("stickyColourChange1","stickyColourChange2","stickyColourChange3");
    }
})

/* Enlarge document frame on click */
// Calls css class to scale up 
const docX = document.querySelector(".docFrame");
docX.addEventListener("click", () => {
    if (docX.classList.contains("docEnlarge")) { 
        docX.classList.remove("docEnlarge");
    } else {
        docX.classList.add("docEnlarge");
    }
})

/*courtesy of https://alvarotrigo.com/blog/css-animations-scroll/*/
/* fade in image effect from left, right and bottom */
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

/* insert pdf document cv */
window.onload = function() {
  PDFObject.embed("CV/LawrenceAbuJaberCV_singlepage.pdf","#PDFView1");
  PDFObject.embed("CV/LawrenceAbuJaberCV_employHistory.pdf","#PDFView2");
}

/* low priority data - hide/show employment history if required */
/* swapping if statements require 2 clicks!*/
var pdf2 = document.getElementById("PDFView2");
function expand() {
  if (pdf2.style.display === "flex" ){
    pdf2.style.display = "none";
  }
  else {
    pdf2.style.display = "flex";
  }
}

/* show more text */
/* event only for text-container as parent */
function toggleText(icon) {
  var text = icon.parentNode.nextElementSibling;
  var icons = icon.firstElementChild;
  if (text.classList.contains("hide-text")) {
    text.classList.remove("hide-text");
    /*icons.classList.add("rotateY180");*/
    icons.classList.remove("fa-arrow-down");
    icons.classList.add("fa-arrow-up");
  } else {
    text.classList.add("hide-text");
    /*icons.classList.remove("rotateY180");*/
    icons.classList.remove("fa-arrow-up");
    icons.classList.add("fa-arrow-down");
  }
}


/* Testing */
/* get scrollY value for nav colour change */
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
})