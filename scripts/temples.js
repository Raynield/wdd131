// set current year in footer
const currentYearSpan = document.querySelector("#currentyear");
const today = new Date();
currentYearSpan.textContent = today.getFullYear();

// set last modified date in footer
const lastModifiedParagraph = document.querySelector("#lastModified");
lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;

// hamburger menu toggle functionality
const hamburgerButton = document.querySelector("#menu");
const navigationMenu = document.querySelector(".navigation");

hamburgerButton.addEventListener("click", () => {
    navigationMenu.classList.toggle("open");
    hamburgerButton.classList.toggle("open");
});