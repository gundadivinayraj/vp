// Pages
const pages = document.querySelectorAll(".page");
let currentPage = 0;

function nextPage() {
    pages[currentPage].classList.remove("active");
    currentPage++;

    if (currentPage < pages.length) {
        pages[currentPage].classList.add("active");
    }
}

// Slideshow
const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg"
];

const slide = document.getElementById("slide");
let currentImage = 0;

setInterval(() => {
    if (slide) {
        currentImage = (currentImage + 1) % images.length;
        slide.src = images[currentImage];
    }
}, 3000);

// Music
const playBtn = document.getElementById("playBtn");
const music = document.getElementById("bgMusic");

if (playBtn) {
    playBtn.addEventListener("click", () => {
        music.play();
        playBtn.innerHTML = "❤️ Playing...";
    });
}

// Floating Hearts
const hearts = document.getElementById("hearts");

setInterval(() => {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);

}, 300);

 const noBtn = document.getElementById("noBtn");

 if (noBtn) {

     document.addEventListener("mousemove", (e) => {

         const rect = noBtn.getBoundingClientRect();

         const dx = e.clientX - (rect.left + rect.width / 2);
         const dy = e.clientY - (rect.top + rect.height / 2);

         const distance = Math.sqrt(dx * dx + dy * dy);

         if (distance < 120) {

             const maxX = window.innerWidth - rect.width;
             const maxY = window.innerHeight - rect.height;

             noBtn.style.position = "fixed";
             noBtn.style.left = Math.random() * maxX + "px";
             noBtn.style.top = Math.random() * maxY + "px";
         }

     });

 }

// Yes Button
const yesBtn = document.querySelector(".yes");

if (yesBtn) {

    yesBtn.addEventListener("click", () => {

        alert("❤️ YAYYYYY!! ❤️\n\nThank you Pragna ❤️\n\nI promise I'll make you happier than ever before. 🌹");

    });

}
// When the song finishes, go to the next page
music.addEventListener("ended", () => {
    nextPage();
});