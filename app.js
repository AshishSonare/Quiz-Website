const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "HyperText Markup Language", correct: true },
      { text: "Hyperlinks and Text Markup Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
      { text: "HyperTool Multi-Language", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Computer Style Sheets", correct: false },
      { text: "Creative Style Sheets", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Colorful Style Sheets", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which property is used to change the background color in CSS?",
    answers: [
      { text: "color", correct: false },
      { text: "background-color", correct: true },
      { text: "bgcolor", correct: false },
      { text: "background", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which JavaScript method is used to write on the console?",
    answers: [
      { text: "console.log()", correct: true },
      { text: "console.write()", correct: false },
      { text: "document.write()", correct: false },
      { text: "print.console()", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "What is the correct syntax for an arrow function?",
    answers: [
      { text: "function = () => {}", correct: false },
      { text: "() => {}", correct: true },
      { text: "=> function() {}", correct: false },
      { text: "arrow.function() => {}", correct: false },
    ],
    userAnswer: null,
  },
];

// Getting Section References
const welcomeSection = document.querySelector("#welcome");
const quizSection = document.querySelector("#Quiz");
const resultSection = document.querySelector("#Result");

//Welcome Section References
const startBtn = document.querySelector("#start-btn");
// Getting DialogBox References
const dialog = document.querySelector("#quiz-subject");
const topics = document.querySelectorAll("#topics div");

// Quiz section References
const sidebar = document.querySelector("#sidebar");
const sidebarList = document.getElementById("sidebar-list");

const backdrop = document.querySelector("#backdrop");
const questionEl = document.getElementById("question-element");
const optionsEl = document.getElementById("options");
const menuBtn = document.querySelector("#menu-btn");
// Getting Navigation Button References
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

// Result Section References
const anotherRound = document.getElementById("anotherRound");
const scoreEl = document.getElementById("score");

// Initializing Vaiables
let selectedTopic = "";
let currentQuestion = 0;
let questionCount = 0;

startBtn.addEventListener("click", () => {
  dialog.showModal();
});

topics.forEach((topic) => {
  topic.addEventListener("click", () => {
    // save the selected div's innerText
    selectedTopic = topic.innerText;
    console.log("selected topic : ", selectedTopic);

    dialog.close(); //closing the topic dialog

    welcomeSection.style.display = "none"; // hiding the Welcome section

    currentQuestion = 0;

    quizSection.classList.remove("hidden"); // displaying the quiz section
    quizSection.classList.add("block");
    resultSection.classList.contains("hidden")
      ? (scoreEl.textContent = "")
      : resultSection.classList.add("hidden");

    // showQuestion();
  });
});

// Sidebar toggle on mobiles and smaller screens
menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
  backdrop.classList.toggle("hidden");
});

backdrop.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
  backdrop.classList.add("hidden");
});

// Createing a media query for screens < 900px
// and changing the text of previousBtn and nextBtn to arrows

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

// Quiz section logic

// Showing sidebar elements
questions.forEach(() => {
  let li = document.createElement("li");
  li.textContent = `Question ${questionCount + 1}`;
  sidebarList.appendChild(li);
  questionCount++;
});

const sidebarItems = document.querySelectorAll("#sidebar-list li");

// displaying Questions
showQuestion();
function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  // Highlight current sidebar item
  sidebarItems.forEach((item, index) => {
    if (index === currentQuestion) {
      item.style.backgroundColor = "var(--accent)";
      item.style.transition = "all 0.5s ease-in-out 0.5s";
    } else {
      item.style.backgroundColor = "transparent";
      item.style.transition = "background-color 0.25s ease-in-out";
    }
  });

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.className =
      "bg-[var(--secondary)] p-4 rounded-lg text-xl hover:bg-[var(--l5)] transition-colors";

    // Highlight selected answer with darker background
    if (q.userAnswer === index) {
      btn.style.backgroundColor = "var(--accent)";
      btn.style.color = "black";
      btn.classList.add("border-4", "border-red-900");
    }

    btn.addEventListener("click", () => {
      questions[currentQuestion].userAnswer = index;
      showQuestion();
    });

    optionsEl.appendChild(btn);
  });
}

function showResult() {
  resultSection.classList.remove("hidden");

  const score = questions.reduce((acc, q) => {
    const selected = q.userAnswer; //userAnswer contains indexes

    return selected !== null && q.answers[selected].correct ? acc + 1 : acc;
  }, 0);

  scoreEl.textContent = `${score} / ${questions.length}`;
}

// adding functionality to next and previous buttons
nextBtn.addEventListener("click", () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    quizSection.classList.add("hidden");
    showResult();
  }
});

previousBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
});

// adding functionality for another round button
anotherRound.addEventListener("click", () => {
  dialog.showModal();
});
