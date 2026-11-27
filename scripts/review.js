const REVIEW_COUNT_KEY = "wdd131-review-count";

const productLookup = {
    "fc-1888": "Flux Capacitor",
    "fc-2050": "Power Laces",
    "fs-1987": "Time Circuits",
    "ac-2000": "Low Voltage Reactor",
    "jj-1969": "Warp Equalizer"
};

function updateReviewCounter() {
    const countElement = document.querySelector("#review-count");
    const currentCount = Number(localStorage.getItem(REVIEW_COUNT_KEY)) || 0;
    const updatedCount = currentCount + 1;

    localStorage.setItem(REVIEW_COUNT_KEY, String(updatedCount));

    if (countElement) {
        countElement.textContent = String(updatedCount);
    }
}

function renderReviewSummary() {
    const summaryContainer = document.querySelector("#review-summary");
    if (!summaryContainer) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const productId = params.get("productName") || "Not specified";
    const productTitle = productLookup[productId] || productId;
    const rating = params.get("rating") || "Not specified";
    const installDate = params.get("installDate") || "Not specified";
    const features = params.getAll("features");
    const writtenReview = params.get("writtenReview")?.trim() || "None provided";
    const userName = params.get("userName")?.trim() || "Anonymous";

    const featuresText = features.length > 0 ? features.join(", ") : "None selected";

    summaryContainer.innerHTML = `
        <p><strong>Product:</strong> ${escapeHtml(productTitle)}</p>
        <p><strong>Rating:</strong> ${escapeHtml(rating)} / 5</p>
        <p><strong>Date of Installation:</strong> ${escapeHtml(installDate)}</p>
        <p><strong>Useful Features:</strong> ${escapeHtml(featuresText)}</p>
        <p><strong>Written Review:</strong> ${escapeHtml(writtenReview)}</p>
        <p><strong>Reviewer:</strong> ${escapeHtml(userName)}</p>
    `;
}

function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
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
    updateReviewCounter();
    renderReviewSummary();
    setFooterDates();
});