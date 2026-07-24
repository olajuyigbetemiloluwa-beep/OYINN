// ❤️ Open the website
function startWebsite() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("mainContent").style.display = "block";

    const music = document.getElementById("bgMusic");

    // Start music after the user clicks
    music.play().catch(() => {
        console.log("Autoplay was blocked.");
    });
}

// ❤️ Final surprise
function surprise() {
    alert(
`❤️ Happy Girlfriend's Day ❤️

My Beautiful Oyin,

Thank you for every smile.
Thank you for every laugh.
Thank you for every memory.

You make my life brighter every single day.

I love you more than words can explain.

Forever Yours,

❤️ Timothy ❤️`
    );
}

// 📸 Slideshow
const photos = [
    "images/photo1.jpg",
    "images/photo2.jpg"
];

let currentPhoto = 0;

setInterval(() => {
    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    document.getElementById("slideshow").src = photos[currentPhoto];

}, 4000);

// ❤️ Relationship Timer
const relationshipDate = new Date("2025-10-21T00:00:00");

function updateTimer() {

    const now = new Date();

    const difference = now - relationshipDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

    const minutes = Math.floor((difference / (1000 * 60)) % 60);

    document.getElementById("timer").innerHTML =
        `${days} Days ❤️ ${hours} Hours ❤️ ${minutes} Minutes`;
}

updateTimer();

setInterval(updateTimer, 60000);