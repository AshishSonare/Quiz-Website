const computerQuestions = [
  {
    question: "Which protocol is used to transfer web pages?",
    answers: [
      { text: "HTTP", correct: true },
      { text: "FTP", correct: false },
      { text: "SMTP", correct: false },
      { text: "POP3", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which of the following is an operating system?",
    answers: [
      { text: "Oracle", correct: false },
      { text: "Linux", correct: true },
      { text: "Python", correct: false },
      { text: "HTML", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "What does CPU stand for?",
    answers: [
      { text: "Central Processing Unit", correct: true },
      { text: "Computer Processing Utility", correct: false },
      { text: "Central Program Unit", correct: false },
      { text: "Control Processing Unit", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which language is primarily used for Android app development?",
    answers: [
      { text: "Java", correct: true },
      { text: "Swift", correct: false },
      { text: "C#", correct: false },
      { text: "PHP", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which device is used to connect computers to a network?",
    answers: [
      { text: "Router", correct: true },
      { text: "Scanner", correct: false },
      { text: "Printer", correct: false },
      { text: "Monitor", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which of the following is NOT a programming language?",
    answers: [
      { text: "Python", correct: false },
      { text: "C++", correct: false },
      { text: "MySQL", correct: true },
      { text: "JavaScript", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which company developed the Windows operating system?",
    answers: [
      { text: "Apple", correct: false },
      { text: "Microsoft", correct: true },
      { text: "Google", correct: false },
      { text: "IBM", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which of the following is a web browser?",
    answers: [
      { text: "Chrome", correct: true },
      { text: "Linux", correct: false },
      { text: "Windows", correct: false },
      { text: "Oracle", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which memory is volatile?",
    answers: [
      { text: "RAM", correct: true },
      { text: "ROM", correct: false },
      { text: "Hard Disk", correct: false },
      { text: "SSD", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which of the following is used to style web pages?",
    answers: [
      { text: "CSS", correct: true },
      { text: "HTML", correct: false },
      { text: "SQL", correct: false },
      { text: "C#", correct: false },
    ],
    userAnswer: null,
  },
];

const scienceQuestions = [
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "H2O", correct: true },
      { text: "O2", correct: false },
      { text: "HO2", correct: false },
      { text: "OH", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Mars", correct: true },
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "What is the speed of light?",
    answers: [
      { text: "3 × 10^8 m/s", correct: true },
      { text: "3 × 10^6 m/s", correct: false },
      { text: "3 × 10^5 m/s", correct: false },
      { text: "3 × 10^7 m/s", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which gas is most abundant in Earth's atmosphere?",
    answers: [
      { text: "Nitrogen", correct: true },
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: false },
      { text: "Hydrogen", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "What is the unit of electric current?",
    answers: [
      { text: "Ampere", correct: true },
      { text: "Volt", correct: false },
      { text: "Ohm", correct: false },
      { text: "Watt", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which organ in the human body purifies blood?",
    answers: [
      { text: "Kidney", correct: true },
      { text: "Liver", correct: false },
      { text: "Heart", correct: false },
      { text: "Lungs", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which vitamin is produced when skin is exposed to sunlight?",
    answers: [
      { text: "Vitamin D", correct: true },
      { text: "Vitamin C", correct: false },
      { text: "Vitamin A", correct: false },
      { text: "Vitamin B12", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which scientist proposed the theory of relativity?",
    answers: [
      { text: "Albert Einstein", correct: true },
      { text: "Isaac Newton", correct: false },
      { text: "Galileo Galilei", correct: false },
      { text: "Nikola Tesla", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which blood cells help in clotting?",
    answers: [
      { text: "Platelets", correct: true },
      { text: "Red Blood Cells", correct: false },
      { text: "White Blood Cells", correct: false },
      { text: "Plasma", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which part of the cell contains genetic material?",
    answers: [
      { text: "Nucleus", correct: true },
      { text: "Cytoplasm", correct: false },
      { text: "Mitochondria", correct: false },
      { text: "Ribosome", correct: false },
    ],
    userAnswer: null,
  },
];

const geographyQuestions = [
  {
    question: "Which is the largest continent by area?",
    answers: [
      { text: "Asia", correct: true },
      { text: "Africa", correct: false },
      { text: "North America", correct: false },
      { text: "Europe", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which is the longest river in the world?",
    answers: [
      { text: "Nile", correct: true },
      { text: "Amazon", correct: false },
      { text: "Yangtze", correct: false },
      { text: "Mississippi", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which country has the largest population?",
    answers: [
      { text: "India", correct: false },
      { text: "China", correct: true },
      { text: "USA", correct: false },
      { text: "Russia", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which ocean is the largest?",
    answers: [
      { text: "Pacific Ocean", correct: true },
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Mount Everest lies in which mountain range?",
    answers: [
      { text: "Himalayas", correct: true },
      { text: "Andes", correct: false },
      { text: "Rockies", correct: false },
      { text: "Alps", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which desert is the largest in the world?",
    answers: [
      { text: "Sahara", correct: false },
      { text: "Antarctic Desert", correct: true },
      { text: "Gobi", correct: false },
      { text: "Kalahari", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: [
      { text: "Japan", correct: true },
      { text: "China", correct: false },
      { text: "Thailand", correct: false },
      { text: "South Korea", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Monaco", correct: false },
      { text: "Malta", correct: false },
      { text: "San Marino", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which river flows through Paris?",
    answers: [
      { text: "Seine", correct: true },
      { text: "Thames", correct: false },
      { text: "Danube", correct: false },
      { text: "Rhine", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which country has the most time zones?",
    answers: [
      { text: "France", correct: true },
      { text: "USA", correct: false },
      { text: "Russia", correct: false },
      { text: "China", correct: false },
    ],
    userAnswer: null,
  },
];

const generalKnowledgeQuestions = [
  {
    question: "Who wrote the national anthem of India?",
    answers: [
      { text: "Rabindranath Tagore", correct: true },
      { text: "Bankim Chandra Chatterjee", correct: false },
      { text: "Sarojini Naidu", correct: false },
      { text: "Mahatma Gandhi", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which is the tallest animal in the world?",
    answers: [
      { text: "Giraffe", correct: true },
      { text: "Elephant", correct: false },
      { text: "Camel", correct: false },
      { text: "Horse", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Who was the first man to step on the Moon?",
    answers: [
      { text: "Neil Armstrong", correct: true },
      { text: "Buzz Aldrin", correct: false },
      { text: "Yuri Gagarin", correct: false },
      { text: "Michael Collins", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which sport is known as the 'king of sports'?",
    answers: [
      { text: "Football (Soccer)", correct: true },
      { text: "Cricket", correct: false },
      { text: "Tennis", correct: false },
      { text: "Basketball", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which festival is known as the festival of lights?",
    answers: [
      { text: "Diwali", correct: true },
      { text: "Holi", correct: false },
      { text: "Christmas", correct: false },
      { text: "Eid", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which is the largest mammal?",
    answers: [
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
      { text: "Hippopotamus", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which country invented paper?",
    answers: [
      { text: "China", correct: true },
      { text: "Egypt", correct: false },
      { text: "India", correct: false },
      { text: "Greece", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which is the fastest land animal?",
    answers: [
      { text: "Cheetah", correct: true },
      { text: "Lion", correct: false },
      { text: "Horse", correct: false },
      { text: "Tiger", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which instrument measures atmospheric pressure?",
    answers: [
      { text: "Barometer", correct: true },
      { text: "Thermometer", correct: false },
      { text: "Hygrometer", correct: false },
      { text: "Altimeter", correct: false },
    ],
    userAnswer: null,
  },
  {
    question: "Which is the largest planet in our solar system?",
    answers: [
      { text: "Jupiter", correct: true },
      { text: "Saturn", correct: false },
      { text: "Neptune", correct: false },
      { text: "Earth", correct: false },
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

// Map topics to arrays
const topicsMap = {
  computerQuestions,
  scienceQuestions,
  geographyQuestions,
  generalKnowledgeQuestions,
};

// GLOBAL VARIABLES
let currentQuizQuestions = []; // This will hold the specific topic questions
let currentQuestion = 0;
let questionCount = 0;
let sidebarItems = []; // Needs to be updated dynamically

startBtn.addEventListener("click", () => {
  dialog.showModal();
});

topics.forEach((topic) => {
  topic.addEventListener("click", () => {
    selectedTopic = topic.dataset.value;

    // Get the questions for the selected topic
    // We use JSON parse/stringify to create a "fresh copy" so previous answers are cleared
    currentQuizQuestions = JSON.parse(JSON.stringify(topicsMap[selectedTopic]));

    console.log("selected topic : ", selectedTopic);

    // Generate the Sidebar dynamically based on the chosen topic
    sidebarList.innerHTML = ""; // Clear existing sidebar
    currentQuizQuestions.forEach((_, index) => {
      let li = document.createElement("li");
      li.textContent = `Question ${index + 1}`;
      sidebarList.appendChild(li);
    });

    // Update the sidebarItems variable so highlighting works
    sidebarItems = document.querySelectorAll("#sidebar-list li");

    // UI Transitions
    dialog.close();
    welcomeSection.style.display = "none";
    currentQuestion = 0;
    quizSection.classList.remove("hidden");
    quizSection.classList.add("block");

    if (!resultSection.classList.contains("hidden")) {
      resultSection.classList.add("hidden");
      scoreEl.textContent = "";
    }

    // Start the quiz
    showQuestion();
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

//     **************        Quiz section logic         **********************

function showQuestion() {
  const q = currentQuizQuestions[currentQuestion]; // Use the dynamic array
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  // Sidebar highlighting
  sidebarItems.forEach((item, index) => {
    if (index === currentQuestion) {
      item.style.backgroundColor = "var(--accent)";
      // Add your transition styles here if needed
    } else {
      item.style.backgroundColor = "transparent";
    }
  });

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.className =
      "bg-[var(--secondary)] p-4 rounded-lg text-xl hover:bg-[var(--l5)] transition-colors";

    if (q.userAnswer === index) {
      btn.style.backgroundColor = "var(--accent)";
      btn.style.color = "black";
      btn.classList.add("border-4", "border-red-900");
    }

    btn.addEventListener("click", () => {
      currentQuizQuestions[currentQuestion].userAnswer = index; // Save answer to dynamic array
      showQuestion();
    });

    optionsEl.appendChild(btn);
  });
}

// Showing the result

function showResult() {
  resultSection.classList.remove("hidden");

  const score = currentQuizQuestions.reduce((acc, q) => {
    const selected = q.userAnswer;
    return selected !== null && q.answers[selected].correct ? acc + 1 : acc;
  }, 0);

  scoreEl.textContent = `${score} / ${currentQuizQuestions.length}`;
}

// adding functionality to next and previous buttons

nextBtn.addEventListener("click", () => {
  if (currentQuestion < currentQuizQuestions.length - 1) {
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
