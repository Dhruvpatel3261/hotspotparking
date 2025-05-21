function updateDateTime() {
    const now = new Date();

    const dateOptions = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "2-digit",
    };

    const timeOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    };

    const dateString = now
        .toLocaleDateString("en-US", dateOptions)
        .replace(/, /g, " ");
    const timeString = now.toLocaleTimeString("en-US", timeOptions);

    document.getElementById("date").textContent = dateString;
    document.getElementById("time").textContent = timeString;
}

setInterval(updateDateTime, 1000); // Update the time every second
updateDateTime(); // Initial call to set the time immediately

// Function to generate a random number between min and max (inclusive)
function getRandomExpiryTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Set the random expiration time
function setRandomExpiryTime() {
    const expiryTime = getRandomExpiryTime(2, 50);
    const expiryElement = document.querySelector(".expiry-info strong");
    expiryElement.textContent = `This pass expires after ${expiryTime} minutes`;
}

// Call the function to set the random expiration time on page load
window.onload = setRandomExpiryTime;

// Function to generate a random number between min and max (inclusive)
function getRandomExpiryTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Set the random expiration time
function setRandomExpiryTime() {
    const expiryTime = getRandomExpiryTime(2, 50);
    const expiryElement = document.querySelector(".expiry-info strong");
    expiryElement.textContent = `This pass expires after ${expiryTime} minutes`;
}

// Call the function to set the random expiration time on page load
window.onload = setRandomExpiryTime;