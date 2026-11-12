// 1. Footer: Current year and last modification date
const currentYearSpan = document.getElementById("currentyear");
const lastModifiedParagraph = document.getElementById("lastModified");

currentYearSpan.textContent = new Date().getFullYear();
lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;

// 2. Static weather variables (metric units: °C and km/h)
const temperature = 9; // Must be <= 10 °C to calculate wind chill
const windSpeed = 12;  // Must be > 4.8 km/h to calculate wind chill

// 3. One-line function to calculate wind chill (metric formula)
const calculateWindChill = (temp, speed) => (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);

// 4. Condition check before calling the wind chill function
const windChillElement = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windChillElement.textContent = "N/A";
}