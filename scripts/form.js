const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

function populateProducts(productList) {
    const selectElement = document.querySelector("#product-select");
    if (!selectElement) {
        return;
    }

    productList.forEach((product) => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = formatProductName(product.name);
        selectElement.appendChild(option);
    });
}

function formatProductName(name) {
    return name
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

function setFooterDates() {
    const yearSpan = document.querySelector("#copyright-year");
    const lastModifiedPara = document.querySelector("#last-modified");

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    if (lastModifiedPara) {
        lastModifiedPara.textContent = `Last Modification: ${document.lastModified}`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    populateProducts(products);
    setFooterDates();
});