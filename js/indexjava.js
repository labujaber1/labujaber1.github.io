
// FUNCTIONS 
/* Changes nav bar background colour to different colour when sticky css implemented */
// action when nav scrolls towards top of screen using event listener
// use for Single Page Application
const navColour = document.querySelector(".nav");
window.addEventListener("scroll", () => {
    if (window.scrollY > 1500 && window.scrollY < 3000 ) {
      navColour.classList.remove("stickyColourChange1","stickyColourChange2","stickyColourChange3");
      navColour.classList.add("stickyColourChange1");
    }
    else if (window.scrollY >= 3000 && window.scrollY < 4500) {
      navColour.classList.remove("stickyColourChange1","stickyColourChange2","stickyColourChange3");
      navColour.classList.add("stickyColourChange2");
    }
    else if (window.scrollY >= 4500) {
      navColour.classList.remove("stickyColourChange1","stickyColourChange2","stickyColourChange3");
      navColour.classList.add("stickyColourChange3");
    } 
    else {
      navColour.classList.remove("sticky");
      navColour.classList.remove("stickyColourChange1","stickyColourChange2","stickyColourChange3");
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
/*window.onload = function() {
  PDFObject.embed("CV/LawrenceAbuJaberCV1.pdf","#PDFView1");
  PDFObject.embed("CV/LawrenceAbuJaberCV2.pdf","#PDFView2");
}*/

/* low priority data - hide/show employment history if required */
/*function expand(pdfNum) {
  var pdf = document.getElementById("PDFView"+pdfNum);
  if (pdf.style.display === "flex" ){
    pdf.style.display = "none";
  }
  else {
    pdf.style.display = "flex";
  }
}*/

/* toggle hide two section classes by the element id and move to an anchor*/
function showHideSection(section1,section2, scrollToId) {
  var sect1 = document.getElementById(section1);
  var sect2 = document.getElementById(section2);
  sect1.classList.toggle("hide-section");
  sect2.classList.toggle("hide-section");
  var element = document.getElementById(scrollToId);
  element.scrollIntoView({ behavior: "smooth" });
}

/* show more text */
/* event only for text-container as parent */
function toggleText(icon) {
  var text = icon.parentNode.nextElementSibling;
  var icons = icon.firstElementChild;
  if (text.classList.contains("hide-text")) {
    text.classList.remove("hide-text");
    /*icons.classList.add("rotate180");*/
    icons.classList.remove("fa-arrow-down");
    icons.classList.add("fa-arrow-up");
  } else {
    text.classList.add("hide-text");
    /*icons.classList.remove("rotate180");*/
    icons.classList.remove("fa-arrow-up");
    icons.classList.add("fa-arrow-down");
  }
}

/* Hide/show Django gallery intended for mobile as lightbox not so good*/ 
function toggleGallery(icon) {
  var gallery = document.querySelector(".gallery");
  var icons = icon.firstElementChild;
  if (gallery.style.display == "grid") {
    gallery.style.display = "none";
    icons.classList.remove("fa-arrow-up");
    icons.classList.add("fa-arrow-down");
  } else {
    gallery.style.display = "grid";
    icons.classList.remove("fa-arrow-down");
    icons.classList.add("fa-arrow-up");
    
  }
}
/* Testing */
/* get scrollY value for nav colour change */
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
})

/* click image in header for another animation */
const elem = document.getElementById('img-pos');
function imageFadeOut() {
  elem.classList.toggle('click-fade-out')
}
elem.addEventListener('click', imageFadeOut);


/* toggle header background each day */
/* defining background schemes */
const backgroundSchemes = [
  [
    {id: 'header-container', background: 'bg-header1'},
    {id: 'nav-bar', background: 'nav-bg-colour1'}
  ],
  [
    {id: 'header-container', background: 'bg-header2'},
    {id: 'nav-bar', background: 'nav-bg-colour2'}
  ],
  [
    {id: 'header-container', background: 'bg-header3'},
    {id: 'nav-bar', background: 'nav-bg-colour3'}
  ]
];

const removeBackgroundScheme = (elementId) => {
  const element = document.getElementById(elementId);
  console.log("Remove Element id = " + elementId.toString() 
  + " ,element = "+ element );
  if (element && element instanceof HTMLElement && element.classList) {
    const classesToRemove = [...element.classList].filter(className => className.includes('bg'));
    element.classList.remove(...classesToRemove);
  }
};

  // Function to change the color scheme of an element or other element
const addBackgroundScheme = (elementId, backgroundColor) => {
  const element = document.getElementById(elementId);
  console.log("Change Element id = " + elementId.toString()
  + " ,element = "+ element + " ,background colour = "+ backgroundColor);
  if (element) {
    element.classList.add(backgroundColor);
  }
};


// Function to change the color schemes every minute
const updateBackgroundSchemes = () => {
  // Get the current minute
  const currentTime = new Date().getMilliseconds(); //change to getMinutes or getHours

  // Get the current hour
  //const currentTime = new Date().getHours();
  console.log("currentTime = " + currentTime);

  // Calculate the index of the background scheme for 1 minute change
  const backgroundSchemeIndex = currentTime % backgroundSchemes.length;
  console.log("BackgroundScheme length = " + backgroundSchemes.length);
  console.log("BackgroundScheme index = " + backgroundSchemeIndex);

  // Get the background scheme array
  const schemeArr = backgroundSchemes[backgroundSchemeIndex];
  console.log("scheme = " + schemeArr.toString());


  // Iterate through a color scheme array
  schemeArr.forEach((scheme)=> {
      console.log("scheme id = "+ scheme.id);
      console.log("scheme backgroundColor = "+ scheme.background);
      console.log("scheme content = "+ scheme.content);
      // Remove color scheme classes from the current element
      removeBackgroundScheme(scheme.id);

      // Apply color scheme classes to the current element
      addBackgroundScheme(scheme.id, scheme.background);
    
  });
};
// Call the updateColorSchemes function initially
updateBackgroundSchemes();

// Call the updateColorSchemes function every minute
setInterval(updateBackgroundSchemes, 20 * 1000); //change to 60 * 1000

// Call the updateColorSchemes function every 24 hours
//setInterval(updateColorSchemes, 24 * 60 * 60 * 1000);

