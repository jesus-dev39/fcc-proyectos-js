const questions = [
  {
    category: "Videojuegos",
    question: "¿En qué año se lanzó oficialmente Minecraft?",
    choices: ["2009", "2011", "2015"],
    answer: "2011",
  },
  {
    category: "Historia",
    question: "¿En qué año Cristobal Colón descubrió América?",
    choices: ["1493", "1492", "1491"],
    answer: "1492",
  },
  {
    category: "Geografía",
    question: "¿Cuál es la segunda montaña más alta del mundo?",
    choices: ["Kachenjunga", "K2", "Lhotse"],
    answer: "K2",
  },
  {
    category: "Deportes",
    question: "¿Quién ganó el balón de oro de fútbol en el año 2020?",
    choices: ["Lewandowski", "Messi", "Nadie"],
    answer: "Nadie",
  },
  {
    category: "Matemáticas",
    question: "¿Cuánto es 2 + 2?",
    choices: ["3", "6", "4"],
    answer: "4",
  }
];

function getRandomQuestion(quest){
  let index =  Math.floor(Math.random() * quest.length);
  return quest[index];
}

function getRandomComputerChoice(opciones){
  let index = Math.floor(Math.random() * opciones.length);
  return opciones[index];
}

function getResults(question, computerChoice){
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!"; 
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}

const randomQ = getRandomQuestion(questions);

const computerChoice = getRandomComputerChoice(randomQ.choices);

console.log("Question:", randomQ.question);
console.log("Computer chose:", computerChoice);
console.log(getResults(randomQ, computerChoice));
