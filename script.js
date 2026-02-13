const correctPassword = "041918";
let heartsStarted = false;

/* ================= PASSWORD ================= */
function checkPassword() {
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
}

/* ================= OPEN POPUP ================= */
function openPopup(type) {
  const popup = document.getElementById("popupBox");
  const content = document.getElementById("popupContent");

  let message = "";
  let video = "";
  let audio = "";

  if (type === "sad") {
    message = "When you need to smile 😂";
    video = "Funny.mp4";
  }

  if (type === "sleepMotivation") {
    message = "You are stronger than you think. I believe in you 🔥";
    audio = "love.mp3";
  }

  if (type === "love") {
    message = "There is not a single universe where I would choose anyone else but you ❤️";
    video = "humko tumse pyar hei.mp4";
  }

  content.innerHTML = `
    <p style="font-size:18px; margin-bottom:15px;">${message}</p>
    ${video ? `<video controls autoplay>
        <source src="${video}" type="video/mp4">
      </video>` : ""}
    ${audio ? `<audio controls autoplay>
        <source src="${audio}" type="audio/mpeg">
      </audio>` : ""}
  `;

  popup.classList.add("active");
  document.body.style.overflow = "hidden";
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

  popup.classList.remove("active");
  document.body.style.overflow = "auto";
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

/* ================= OPEN VALENTINE SCREEN ================= */
function openValentine() {
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("valentineScreen").style.display = "flex";
}

/* ================= YES BUTTON ================= */
function sayYes() {
  startCuteEmojis();
  showHurrayPopup();
}

function showHurrayPopup() {
  const popup = document.createElement("div");

  popup.innerHTML = "HURRAYYY!!! 🎉❤️<br>You are mine forever 😌💍";
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.background = "#ff2e63";
  popup.style.color = "white";
  popup.style.padding = "30px 40px";
  popup.style.borderRadius = "20px";
  popup.style.fontSize = "20px";
  popup.style.textAlign = "center";
  popup.style.zIndex = "10000";
  popup.style.boxShadow = "0 20px 50px rgba(0,0,0,0.4)";

  document.body.appendChild(popup);

  setTimeout(() => popup.remove(), 3000);
}

/* ================= NO BUTTON (DESKTOP + MOBILE) ================= */
document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");

  if (!noBtn) return;

  function triggerRun(e) {
    e.preventDefault();
    moveNoButton(noBtn);
    showAngryEmoji(noBtn);
  }

  noBtn.addEventListener("mouseenter", triggerRun);  // desktop
  noBtn.addEventListener("touchstart", triggerRun);  // mobile
  noBtn.addEventListener("click", triggerRun);       // extra safety
});

function moveNoButton(btn) {
  const x = Math.random() * (window.innerWidth - 150);
  const y = Math.random() * (window.innerHeight - 100);

  btn.style.position = "fixed";
  btn.style.left = x + "px";
  btn.style.top = y + "px";
}

function showAngryEmoji(btn) {
  const angry = document.createElement("div");
  angry.innerHTML = "😡";
  angry.style.position = "fixed";
  angry.style.left = btn.style.left;
  angry.style.top = btn.style.top;
  angry.style.fontSize = "30px";
  angry.style.zIndex = "9999";

  document.body.appendChild(angry);

  setTimeout(() => angry.remove(), 800);
}

/* ================= CUTE EMOJI RAIN ================= */
function startCuteEmojis() {
  const container = document.getElementById("emojiRain");
  if (!container) return;

  setInterval(() => {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerHTML = "💖";

    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = (2 + Math.random() * 2) + "s";

    container.appendChild(emoji);

    setTimeout(() => emoji.remove(), 3000);
  }, 200);
}
// FINAL BUTTON FIX (WORKS ON MOBILE)
document.addEventListener("click", function (e) {
  if (e.target && e.target.id === "finalBtn") {
    openValentine();
  }
});
