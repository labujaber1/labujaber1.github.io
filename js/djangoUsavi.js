
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("btn")) {
        if (event.target.innerHTML === "Show More..") {
            event.target.innerHTML = "Show Less..";
        } else {
            event.target.innerHTML = "Show More..";
        }
    }
},{passive: false});
