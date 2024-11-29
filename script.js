// Select the header and create a placeholder element
const header = document.querySelector("header");
const headerPlaceholder = document.createElement("div");
headerPlaceholder.style.height = header.offsetHeight + "px";

// Flag to check if placeholder is added
let placeholderInserted = false;

// Add the sticky functionality
window.addEventListener("scroll", () => {
    if (window.scrollY > header.offsetTop && !placeholderInserted) {
        header.classList.add("sticky");
        header.parentNode.insertBefore(headerPlaceholder, header);
        placeholderInserted = true;
    } else if (window.scrollY <= header.offsetTop && placeholderInserted) {
        header.classList.remove("sticky");
        if (headerPlaceholder.parentNode) {
            headerPlaceholder.parentNode.removeChild(headerPlaceholder);
        }
        placeholderInserted = false;
    }
})