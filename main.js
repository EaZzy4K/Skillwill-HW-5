// #1
const button = document.querySelector('#mybtn')
const text = document.querySelector('#mytext')

button.addEventListener("click", () => {
    text.style.display = 'none'
})

// #2
const divEl = document.createElement('div')
divEl.setAttribute('id', 'Card')

const h2 = document.createElement('h2')
const h2Text = document.createTextNode('Gandalf')

const aTag = document.createElement('a')
aTag.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
// aTag.setAttribute('href', '#')
const aText = document.createTextNode('Go to profile')

h2.append(h2Text)
aTag.append(aText)
divEl.append(h2, aTag)
document.body.append(divEl)

// #3
const questions = [
    {
        question:'What does 10*2 equal to?',
        options: ['30', '20', '45'],
        correctAnswer: '20'
    }
    {
        question:'What does 70+30 equal to?',
        options: ['80', '15', '100'],
        correctAnswer: '100'
    }
    {
        question:'What does (400/20)+30 equal to?',
        options: ['10', '32', '50'],
        correctAnswer: '50'
    }
]
 let currentQuestion = 0;
  let selectedChoice = null;

  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const submitBtn = document.getElementById("submitBtn");
    const nextBtn = document.getElementById("nextBtn");
    const resultElement = document.getElementById("result");

    questionElement.textContent = questions[currentQuestion].question;
    choicesElement.innerHTML = "";

    questions[currentQuestion].choices.forEach(function (choice, index) {
      const input = document.createElement("input");
      input.type = "radio";
      input.className = "radio";
      input.name = "choice";
      input.value = choice;
      choicesElement.appendChild(input);

      const label = document.createElement("label");
      label.textContent = choice;
      choicesElement.appendChild(label);

      choicesElement.appendChild(document.createElement("br"));

      input.addEventListener("click", function() {
        selectedChoice = input;
        submitBtn.disabled = false;
      });
    });
    resultElement.textContent = "";
  }

  function checkAnswer() {
    const submitBtn = document.getElementById("submitBtn");
    const nextBtn = document.getElementById("nextBtn");
    const resultElement = document.getElementById("result");
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (selectedChoice.value === correctAnswer) {
      submitBtn.style.backgroundColor = "green";
      resultElement.textContent = "Correct!";
    } else {
      submitBtn.style.backgroundColor = "red";
      resultElement.textContent = "Incorrect!";
    }

    nextBtn.disabled = false;
  }

  function nextQuestion() {
    currentQuestion++;
    const nextBtn = document.getElementById("nextBtn");
    const submitBtn = document.getElementById("submitBtn");

    if (currentQuestion < questions.length) {
      nextBtn.disabled = true;
      submitBtn.disabled = false;
      displayQuestion();
      selectedChoice = null;
    } else {
      document.getElementById("question").textContent = "Quiz completed!";
      document.getElementById("choices").innerHTML = "";
      nextBtn.disabled = true;
      submitBtn.disabled = true;
    }
  }
  displayQuestion();
