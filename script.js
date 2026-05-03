// Data for the interaction 
const spaceFacts = [
    "The Milky Way contains over 100 billion stars!",
    "Light takes 100,000 years to cross our galaxy.",
    "Mercury is the smallest planet in our solar system.",
    "Earth is roughly 93 million miles from the Sun."
];
// this script.js file contains the JavaScript code for handling user interactions on the website.
//  It includes an array of space facts and event listeners for buttons that allow users to display random 
// facts and toggle between light and dark themes. The code also incorporates accessibility features to ensure 
// a better experience for all users, including those using screen readers.
const btn = document.getElementById('fact-btn');
const display = document.getElementById('fact-text');

// Event Listener for the button
// When the button is clicked, a random fact from the spaceFacts array is displayed in the fact-text element.
if (btn) {
    btn.addEventListener('click', () => {
        const randomFact = spaceFacts[Math.floor(Math.random() * spaceFacts.length)];
        display.textContent = randomFact;

        // Accessibility: Screen readers will announce the update 
        display.setAttribute('aria-live', 'polite');
    });
}

const themeBtn = document.getElementById('theme-btn');
const body = document.body;

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode'); // this toggles the 'light-mode' class on the body element, allowing for CSS to change the theme accordingly.

        // Update button text based on the current mode
        if (body.classList.contains('light-mode')) {
            themeBtn.textContent = "Switch to Dark Mode";
        } else {
            themeBtn.textContent = "Switch to Light Mode";
        }

        // Accessibility: Announce change to screen readers
        const mode = body.classList.contains('light-mode') ? "Light mode active" : "Dark mode active";
        themeBtn.setAttribute('aria-pressed', body.classList.contains('light-mode'));
    });
}