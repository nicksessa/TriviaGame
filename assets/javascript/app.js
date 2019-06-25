

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){


}

function showResults(){

}



// on submit, show results
submitButton.addEventListener('click', showResults);


// Build an object of objects (and data) to hold the questions and answers

const myQuestions = [
  {
    question: "Who shot first?",
    answers: {
      a: "Greedo",
      b: "Luke",
      c: "Han"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the name of Han Solo's Ship?",
    answers: {
      a: "Slave 1",
      b: "The Enterprise",
      c: "Millennium Falcon"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the name/type of Boba Fette's armor?",
    answers: {
      a: "Mithral",
      b: "Ithorian",
      c: "Brigandine",
      d: "Mandalorian"
    },
    correctAnswer: "d"
  }
];

// this function builds the quiz

function buildQuiz(){

    const output = [];
  
  // loop through all the questions (objects)
  myQuestions.forEach(myFunction);

function myFunction(item, index) {

  // this array stores all the answers in html format
  const answers = [];

  // Loop through all the answers in the current question
  for (x in item.answers) {

  	// add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${index}" value="${x}">
            ${x} :
            ${item.answers[x]}
          </label>`
        );
  }

// add this question and its answers to the output
      output.push(
        `<div class="question"> ${item.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );

quizContainer.innerHTML = output.join('');

  //document.getElementById("demo").innerHTML += index + ":" + item + "<br>"; 
}


}

// display quiz
buildQuiz();

