
  const questions = [
  {
    question: "Who is Harry Potter's best friend?",
    options: ["Ron Weasley", "Draco Malfoy", "Voldemort"],
    answer: "Ron Weasley"
  },
  {
    question: "What house at Hogwarts does Harry belong to?",
    options: ["Slytherin", "Gryffindor", "Hufflepuff"],
    answer: "Gryffindor"
  },
  {
    question: "What position does Harry play in Quidditch?",
    options: ["Keeper", "Seeker", "Beater"],
    answer: "Seeker"
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = "";

  if (currentQuestion < questions.length) {
    const q = questions[currentQuestion];
    const questionElem = document.createElement("p");
    questionElem.textContent = q.question;
    quizDiv.appendChild(questionElem);

    q.options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(option);
      quizDiv.appendChild(button);
    });
  } else {
    showResult();
  }
}

function checkAnswer(answer) {
  if (answer === questions[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  showQuestion();
}

function showResult() {
  const quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = "";
  const result = document.getElementById("result");
  result.textContent = `You got ${score} out of ${questions.length} correct!`;

  if (score > questions.length / 2) {
    result.textContent += " 🎉 You are a good Weiser 🪄";
  }
}

// أول سؤال يظهر لما الصفحة تفتح
showQuestion();

