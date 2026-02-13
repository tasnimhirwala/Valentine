const correctPassword = "041918";

/* PASSWORD */
document.getElementById("enterBtn").addEventListener("click",()=>{
  const input = document.getElementById("passwordInput").value;

  if(input === correctPassword){
    document.getElementById("passwordScreen").style.display="none";
    document.getElementById("mainContent").style.display="flex";
  }else{
    alert("Wrong date 😢");
  }
});

/* CARDS */
document.querySelectorAll(".card").forEach(card=>{
  card.addEventListener("click",()=>{
    openPopup(card.dataset.type);
  });
});

/* POPUP */
function openPopup(type){
  const popup = document.getElementById("popupBox");
  const content = document.getElementById("popupContent");

  let message="",video="",audio="";

  if(type==="sad"){ message="Smile please 😂"; video="Funny.mp4"; }
  if(type==="sleepMotivation"){ message="You are strong 🔥"; audio="love.mp3"; }
  if(type==="love"){ message="Forever yours ❤️"; video="humko tumse pyar hei.mp4"; }

  content.innerHTML=`
    <p>${message}</p>
    ${video?`<video controls autoplay src="${video}"></video>`:""}
    ${audio?`<audio controls autoplay src="${audio}"></audio>`:""}
  `;

  popup.style.display="block";
}

document.getElementById("closePopup").addEventListener("click",()=>{
  const popup=document.getElementById("popupBox");
  popup.style.display="none";
  popup.querySelectorAll("video,audio").forEach(m=>{m.pause();m.currentTime=0;});
});

/* FINAL BUTTON */
document.getElementById("finalBtn").addEventListener("click",()=>{
  document.getElementById("mainContent").style.display="none";
  document.getElementById("valentineScreen").style.display="flex";
});

/* BACK */
document.getElementById("backBtn").addEventListener("click",()=>{
  document.getElementById("valentineScreen").style.display="none";
  document.getElementById("mainContent").style.display="flex";
  document.getElementById("emojiRain").innerHTML="";
});

/* YES */
document.getElementById("yesBtn").addEventListener("click",()=>{
  alert("HURRAYYY!!! ❤️");
  setInterval(()=>{
    const e=document.createElement("div");
    e.className="emoji";
    e.innerHTML="💖";
    e.style.left=Math.random()*100+"vw";
    document.getElementById("emojiRain").appendChild(e);
    setTimeout(()=>e.remove(),4000);
  },300);
});

/* NO RUN */
const noBtn=document.getElementById("noBtn");
noBtn.addEventListener("touchstart",move);
noBtn.addEventListener("mouseenter",move);
function move(){
  const x=Math.random()*(window.innerWidth-120);
  const y=Math.random()*(window.innerHeight-60);
  noBtn.style.position="fixed";
  noBtn.style.left=x+"px";
  noBtn.style.top=y+"px";
}
