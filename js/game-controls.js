/**
 * Pixel Shooter - Game Player Controls
 * Manages Fullscreen, Restart/Reload, Theater Mode, and Like Toggle
 */

function openFullScreen() {
    const game = document.getElementById("iframehtml5");
    if (!game) return;
    if (game.requestFullscreen) {
        game.requestFullscreen();
    } else if (game.mozRequestFullScreen) { /* Firefox */
        game.mozRequestFullScreen();
    } else if (game.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        game.webkitRequestFullscreen();
    } else if (game.msRequestFullscreen) { /* IE/Edge */
        game.msRequestFullscreen();
    }
}

function reloadGame() {
    const iframe = document.getElementById("iframehtml5");
    if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = "";
        setTimeout(function () {
            iframe.src = currentSrc;
        }, 100);
    }
}

function toggleTheater() {
    const arena = document.querySelector(".game_play");
    const btn = document.getElementById("btn-theater");
    if (arena) {
        arena.classList.toggle("theater-mode-active");
        if (btn) {
            const isTheater = arena.classList.contains("theater-mode-active");
            const label = btn.querySelector("span");
            if (label) {
                label.textContent = isTheater ? "Exit Theater" : "Theater";
            }
        }
    }
}

let isLiked = false;
let baseLikes = null;
let originalLikeText = "";

function toggleLike() {
    const btn = document.getElementById("btn-like");
    const countEl = document.getElementById("like-count");
    if (!btn || !countEl) return;

    if (baseLikes === null) {
        originalLikeText = countEl.textContent.trim();
        const match = originalLikeText.match(/^([0-9.]+)\s*([kKmM])?$/);
        if (match) {
            const num = parseFloat(match[1]);
            const mult = (match[2] && match[2].toUpperCase() === 'K') ? 1000 : 1;
            baseLikes = Math.round(num * mult);
        } else {
            baseLikes = parseInt(originalLikeText.replace(/[^0-9]/g, ""), 10) || 1000;
        }
    }

    isLiked = !isLiked;
    if (isLiked) {
        btn.style.color = "#ec4899";
        btn.style.borderColor = "#ec4899";
        countEl.textContent = (baseLikes + 1).toLocaleString();
    } else {
        btn.style.color = "";
        btn.style.borderColor = "";
        countEl.textContent = originalLikeText || baseLikes.toLocaleString();
    }
}
