const FullQuestionsArray = [
  {
    question: "What does HTML stand for?",
    answer: "Hypertext Markup Language",
    options: [
      "Hyperlink and Text Markup Language",
      "Hypertext Markup Language",
      "Home Tool Markup Language",
      "Hypertext Management Language",
    ],
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    answer: "color",
    options: ["text-color", "font-color", "color", "text-style"],
  },
  {
    question: "What is the purpose of JavaScript in web development?",
    answer: "To add interactivity and dynamic behavior to web pages",
    options: [
      "To style web pages",
      "To add interactivity and dynamic behavior to web pages",
      "To define page structure",
      "To create databases",
    ],
  },
  {
    question: "What does the acronym 'URL' stand for?",
    answer: "Uniform Resource Locator",
    options: [
      "Universal Reference Locator",
      "Uniform Resource Locator",
      "Universal Resource Locator",
      "Uniform Reference Locator",
    ],
  },
  {
    question: "What is the role of a web browser in the context of web design?",
    answer: "To render and display web pages",
    options: [
      "To send emails",
      "To create web pages",
      "To render and display web pages",
      "To design graphics",
    ],
  },
];
const LoginSection = document.querySelector(".login-section");
const Username = document.querySelector(".username");
const LoginButton = document.querySelector(".login-button");
const QuestionBox = document.querySelector(".question-box");
const AnswerBox = document.querySelector(".answer-box");

let count = 1;
let selectedOption;
let userScore = 0;

function login() {
  //check if user added value
  if (Username.value == "") {
    alert("Please Add username");
    return;
  }
  //store in local storage
  localStorage.setItem("username", Username.value);
  //inform users they have logged in
  alert("logged in successfully");
  //remove Login section from dom
  LoginSection.remove();
  //populate the quiz
  populateQuiz();
}

const populateQuiz = () => {
  //populate question box
  QuestionBox.innerHTML = FullQuestionsArray[count - 1].question;
  AnswerBox.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    AnswerBox.innerHTML += `<p class='options'>${
      FullQuestionsArray[count - 1].options[i]
    }</p>`;
  }

  const options = document.querySelectorAll(".options");

  const QuizButton = document.querySelector(".quiz-button");
  const InfoSection = document.querySelector(".info-section");

  InfoSection.innerHTML = `Welcome ${localStorage.getItem(
    "username"
  )}. You have answered ${count - 1} questions out of ${
    FullQuestionsArray.length
  }`;

  options.forEach((option) =>
    option.addEventListener("click", () => (selectedOption = option))
  );
  QuizButton.addEventListener("click", submit);
};

const submit = () => {
  if (!selectedOption) {
    alert("NO Option selected");
    return;
  }
  console.log(selectedOption);
  if (count == FullQuestionsArray.length) {
    alert(
      "The Quiz has ended, Your total score is " +
        userScore +
        " out of " +
        FullQuestionsArray.length
    );
    return;
  }
  if (selectedOption.innerHTML == FullQuestionsArray[count - 1].answer) {
    userScore += 1;
  }
  count += 1;
  populateQuiz();
};

LoginButton.addEventListener("click", login);
