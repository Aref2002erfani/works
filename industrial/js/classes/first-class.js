function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('open');
}

document.getElementById('videoThumbnail').addEventListener('click', function () {
    var videoPlayer = document.getElementById('videoPlayer');
    var videoOverlay = document.getElementById('videoOverlay');
    videoPlayer.classList.add('fullscreen');
    videoOverlay.style.display = 'block';
    videoPlayer.play();
});

document.getElementById('videoOverlay').addEventListener('click', function () {
    var videoPlayer = document.getElementById('videoPlayer');
    var videoOverlay = document.getElementById('videoOverlay');
    videoPlayer.classList.remove('fullscreen');
    videoOverlay.style.display = 'none';
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    videoPlayer.style.display = 'none';
});


document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".nav-item");
    const contents = document.querySelectorAll(".content");

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navItems.forEach(nav => nav.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active-content"));

            item.classList.add("active");
            const targetId = item.getAttribute("data-target");
            document.getElementById(targetId).classList.add("active-content");
        });
    });
});

let hrtop = document.getElementById("h1Top");
let activelLi = document.getElementById("active");

activelLi.addEventListener("click", (event) => {
    event.stopPropagation();

    if (hrtop.style.display === "none") {
        hrtop.style.display = "block";
    } else {
        hrtop.style.display = "none";
    }
});

document.addEventListener("click", (event) => {
    if (!activelLi.contains(event.target)) {
        hrtop.style.display = "none";
    }
});

document.getElementById('watchVideo').addEventListener('click', function () {
    var videoPlayer = document.getElementById('videoPlayer2');
    var videoOverlay = document.getElementById('videoOverlay2');
    videoPlayer.classList.add('fullscreen');
    videoOverlay.style.display = 'block';
    videoPlayer.play();
});

document.getElementById('videoOverlay2').addEventListener('click', function () {
    var videoPlayer = document.getElementById('videoPlayer2');
    var videoOverlay = document.getElementById('videoOverlay2');
    videoPlayer.classList.remove('fullscreen');
    videoOverlay.style.display = 'none';
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    videoPlayer.style.display = 'none';
});

document.getElementById('customWatchVideo').addEventListener('click', function () {
    var videoPlayer = document.getElementById('customVideoPlayer');
    var videoOverlay = document.getElementById('customVideoOverlay');
    videoPlayer.classList.add('fullscreen');
    videoOverlay.style.display = 'block';
    videoPlayer.style.display = 'block';
    videoPlayer.play();
});

document.getElementById('customVideoOverlay').addEventListener('click', function () {
    var videoPlayer = document.getElementById('customVideoPlayer');
    var videoOverlay = document.getElementById('customVideoOverlay');
    videoPlayer.classList.remove('fullscreen');
    videoOverlay.style.display = 'none';
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    videoPlayer.style.display = 'none';
});

document.getElementById('playButton').addEventListener('click', function () {
    var videoPlayer = document.getElementById('videoPlayer');
    var videoOverlay = document.getElementById('videoOverlay');
    videoPlayer.classList.add('fullscreen');
    videoOverlay.style.display = 'block';
    videoPlayer.style.display = 'block';
    videoPlayer.play();
});

document.getElementById('videoOverlay').addEventListener('click', function () {
    var videoPlayer = document.getElementById('videoPlayer');
    var videoOverlay = document.getElementById('videoOverlay');
    videoPlayer.classList.remove('fullscreen');
    videoOverlay.style.display = 'none';
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    videoPlayer.style.display = 'none';
});


document.getElementById('playButton2').addEventListener('click', function () {
    var videoPlayer2 = document.getElementById('videoPlayer2');
    var videoOverlay2 = document.getElementById('videoOverlay2');
    videoPlayer2.classList.add('fullscreen');
    videoOverlay2.style.display = 'block';
    videoPlayer2.style.display = 'block';
    videoPlayer2.play();
});

document.getElementById('videoOverlay2').addEventListener('click', function () {
    var videoPlayer2 = document.getElementById('videoPlayer2');
    var videoOverlay2 = document.getElementById('videoOverlay2');
    videoPlayer2.classList.remove('fullscreen');
    videoOverlay2.style.display = 'none';
    videoPlayer2.pause();
    videoPlayer2.currentTime = 0;
    videoPlayer2.style.display = 'none';
});


