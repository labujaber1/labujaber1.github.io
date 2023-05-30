// Notes - var pre 2015, let/const after 2015

// FUNCTIONS 
/* Changes nav bar background colour to different colour when sticky css implemented */
// action when nav scrolls towards top of screen using event listener
const navColour = document.querySelector(".nav");
window.addEventListener("scroll", () => {
    if (window.scrollY > 2100 && window.scrollY < 6000 ) {
      navColour.classList.add("stickyColourChange1");
    }
    else if (window.scrollY >= 6000 && window.scrollY < 10000) {
      navColour.classList.add("stickyColourChange2");
    }
    else if (window.scrollY >= 10000 && window.scrollY < 13900) {
      navColour.classList.add("stickyColourChange3");
    } 
    else if (window.scrollY >= 13900 && window.scrollY < 18000) {
      navColour.classList.add("stickyColourChange4");
    }
    else if (window.scrollY >= 18000 ) {
      navColour.classList.add("stickyColourChange5");
    }
    else {
      navColour.classList.remove("sticky");
      navColour.classList.remove("stickyColourChange1");
      navColour.classList.remove("stickyColourChange2");
      navColour.classList.remove("stickyColourChange3");
      navColour.classList.remove("stickyColourChange4");
      navColour.classList.remove("stickyColourChange5");
    }
})

/* Enlarge document on click */
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

