const correctPassword = "041918";
let heartsStarted = false;

/* ================= PASSWORD ================= */
document.getElementById("enterBtn").addEventListener("click", () => {
  const input = document.getElementById("passwordInput").value;

  if (input === correctPassword) {
    document.getElementById("passwordScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";

    if (!heartsStarted) {
      startHearts();
      heartsStarted = true;
    }
  } else {
    alert("Wrong date 😢 Try again!");
  }
});

/* ================= CARD CLICK ================= */
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const type = card.getAttribute("data-type");
    openPopup(type);
  });
});

/* ================= OPEN POPUP ================= */
function openPopup(type) {
  const popup = document.getElementById("popupBox");
  const content = document.getElementById("popupContent");

  let message = "";
  let media = "";

  if (type === "sad") {
    message = "Smile for me 😘";
    media = `
      <video autoplay controls playsinline>
        <source src="funny.mp4" type="video/mp4">
      </video>
    `;
  }

  if (type === "sleep") {
    message = "Sleep peacefully ❤️";
    media = `
      <audio autoplay controls>
        <source src="love.mp3" type="audio/mpeg">
      </audio>
    `;
  }

  if (type === "love") {
    message = "Forever yours 💞";
    media = `
      <video autoplay controls playsinline>
        <source src="humko.mp4" type="video/mp4">
      </video>
    `;
  }

  content.innerHTML = `
    <p style="margin-bottom:15px;">${message}</p>
    ${media}
  `;

  popup.style.display = "block";
}

/* ================= CLOSE POPUP ================= */
function closePopup() {
  const popup = document.getElementById("popupBox");

  popup.querySelectorAll("video").forEach(v => {
    v.pause();
    v.currentTime = 0;
  });

  popup.querySelectorAll("audio").forEach(a => {
    a.pause();
    a.currentTime = 0;
  });

  popup.style.display = "none";
  document.getElementById("popupContent").innerHTML = "";
}

/* ================= FLOATING HEARTS ================= */
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";
    heart.style.fontSize = (18 + Math.random() * 25) + "px";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }, 400);
}

/* ================= FINAL BUTTON ================= */
document.getElementById("finalBtn").addEventListener("click", () => {
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("valentineScreen").style.display = "flex";
});

/* ================= BACK BUTTON ================= */
document.getElementById("backBtn").addEventListener("click", () => {
  document.getElementById("valentineScreen").style.display = "none";
  document.getElementById("mainContent").style.display = "block";

  // Stop emoji rain
  clearInterval(emojiInterval);
  emojiInterval = null;
  document.getElementById("emojiRain").innerHTML = "";
});

/* ================= YES BUTTON ================= */
document.getElementById("yesBtn").addEventListener("click", () => {
  showHurrayPopup();
  startEmojiRain();
});

function showHurrayPopup() {
  const popup = document.createElement("div");
  popup.innerHTML = "HURRAYYY!!! 🎉❤️<br>You are mine forever 😌💍";
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.background = "#ff2e63";
  popup.style.color = "white";
  popup.style.padding = "30px";
  popup.style.borderRadius = "20px";
  popup.style.zIndex = "10000";
  popup.style.textAlign = "center";

  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 3000);
}

/* ================= NO BUTTON ================= */
const noBtn = document.getElementById("noBtn");

function moveNoButton() {
  const x = Math.random() * (window.innerWidth - 150);
  const y = Math.random() * (window.innerHeight - 100);

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  showAngryEmoji(x, y);
}

function showAngryEmoji(x, y) {
  const angry = document.createElement("div");
  angry.innerHTML = "😡";
  angry.style.position = "fixed";
  angry.style.left = x + "px";
  angry.style.top = y + "px";
  angry.style.fontSize = "30px";
  angry.style.zIndex = "9999";

  document.body.appendChild(angry);
  setTimeout(() => angry.remove(), 800);
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

/* ================= EMOJI RAIN ================= */
let emojiInterval = null;

function startEmojiRain() {
  const container = document.getElementById("emojiRain");

  // Prevent multiple intervals
  if (emojiInterval) return;

  emojiInterval = setInterval(() => {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerHTML = "💖";

    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = (3 + Math.random() * 2) + "s";

    container.appendChild(emoji);

    setTimeout(() => {
      emoji.remove();
    }, 5000);

  }, 400); // slower = smoother
}
