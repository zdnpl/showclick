let time = 5;
let score = 0;
let isPlaying;

// login system
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  //input profile data
  $("#name").text(profile.getName());
  $("#image").attr("src", profile.getImageUrl());
  //showing objects
  $(".nav-page").css("display", "block");
  $(".playing-spot").css("display", "block");
  $(".loginPage").css("display", "none");
}

//logout system
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    //alerting
    alert("You have been signed out!");
    //showing objects
    $(".nav-page").css("display", "none");
    $(".playing-spot").css("display", "none");
    $(".loginPage").css("display", "block");
  });
}

// when button @click zone on click
const clickZone = document.querySelectorAll(".click-zone");

clickZone.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement("span");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    ripples.style.animation = "clicked 0.25s linear infinite";
    ripples.style.position = "absolute";
    ripples.style.background = "#ccc";
    ripples.style.transform = "translate(-50%, -50%)";
    ripples.style.pointerEvents = "none";
    ripples.style.borderRadius = "50%";
    this.appendChild(ripples);

    score++;

    setTimeout(() => {
      ripples.remove();
    }, 250);
  });
});

// game
const timeDisplay = document.querySelector("#time");

// game object
const playingSpot = document.querySelector(".playing-spot");
const onPlayBtn = document.querySelector(".onPlay");
const beforePlay = document.querySelector(".beforePlay");
const showResultBtn = document.querySelector("#show-result");

//initialize game
function init() {
  score = 0;
  score++;
  beforePlay.style.display = "none";
  onPlayBtn.style.display = "block";

  //   gameSection.style.display = "block";
  //   startBtn.style.display = "none";
  //   openingText.classList.toggle("d-none");
  //console.log("init");
  // showWord(words);
  //start matching on input
  // wordInput.addEventListener("input", startMatch);
  // call countdown every sec
  setInterval(countdown, 1000);
  //check game status
  setInterval(checkStatus, 1000);
}

// countdown timer
function countdown() {
  //make sure time is not run out
  if (time > 0) {
    time--;
  } else if (time === 0) {
    //game over
    isPlaying = false;
  }
  //show time
  timeDisplay.innerHTML = time;
}

//checking status
function checkStatus() {
  if (!isPlaying && time === 0) {
    //score on console (remove it later)
    console.log("game over! your score is " + score / 5);
    console.log("total clicks : " + score);

    //show button to show score
    playingSpot.style.display = "none";
    showResultBtn.style.display = "block";
    console.log("button show");
    // formDataScore.style.display = "block";
    // logoutBtn.style.display = "none";

    //inputing value
    // document.getElementById("wpmScore").value = score;
  }
}
