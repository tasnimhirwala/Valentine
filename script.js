const correctPassword = "041918"; // change if needed
let heartsStarted = false;

// PASSWORD
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

// POPUP
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
    ${video ? `
      <video controls autoplay>
        <source src="${video}" type="video/mp4">
      </video>
    ` : ""}
    ${audio ? `
      <audio controls autoplay>
        <source src="${audio}" type="audio/mpeg">
      </audio>
    ` : ""}
  `;

  popup.classList.add("active");
  document.body.style.overflow = "hidden";
}

// CLOSE POPUP + STOP MEDIA
function closePopup() {
  const popup = document.getElementById("popupBox");

  const videos = popup.querySelectorAll("video");
  videos.forEach(video => {
    video.pause();
    video.currentTime = 0;
  });

  const audios = popup.querySelectorAll("audio");
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });

  popup.classList.remove("active");
  document.body.style.overflow = "auto";
  document.getElementById("popupContent").innerHTML = "";
}

// HEARTS AFTER PASSWORD
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";
    heart.style.fontSize = (18 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 7000);

  }, 400);
}
