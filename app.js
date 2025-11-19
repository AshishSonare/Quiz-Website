// Getting Element References
const welcomeSection = document.querySelector("#welcome");
const quizSection = document.querySelector("#Quiz");
const resultSection = document.querySelector("#Result");
const startBtn = document.querySelector("#start-btn");
const menuBtn = document.querySelector("#menu-btn");
// const closeDialog = document.querySelector("#close-dialog");
const dialog = document.querySelector("#quiz-subject");
const topics = document.querySelectorAll("#topic-container div");
const sidebar = document.querySelector("#sidebar");
const backdrop = document.querySelector("#backdrop");

const previousBtn = document.querySelector("#previous");
const nextBtn = document.querySelector("#next");

// Initializing Vaiables
let selectedTopic = "";

startBtn.addEventListener("click", () => {
  dialog.showModal();
});

topics.forEach((topic) => {
  topic.addEventListener("click", () => {
    // save the selected div's innerText
    selectedTopic = topic.innerText;
    console.log("selected topic : ", selectedTopic);

    dialog.close(); //closing the topic dialog
    welcomeSection.style.display = "none";

    // topics.forEach((t) => {
    //   t.style.backgroundColor = "";
    // });
    // topic.style.backgroundColor = "grey";
  });
});

// Sidebar toggle on mobile
menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
  backdrop.classList.toggle("hidden");
});

backdrop.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
  backdrop.classList.add("hidden");
});

// Create a media query for screens < 900px
const mediaQuery = window.matchMedia("(max-width: 900px)");

function handleScreenChange(e) {
  if (e.matches) {
    previousBtn.innerHTML = "&#8592;";
    nextBtn.innerHTML = "&#8594;";
  } else {
    previousBtn.innerText = "Previous";
    nextBtn.innerText = "Next";
  }
}

// Initial check
handleScreenChange(mediaQuery);

// Listen for changes
mediaQuery.addEventListener("change", handleScreenChange);
