import React, { useState, useEffect } from "react";
import "./App.css";

// Expanded set of mock questions
const allQuestions = [
  // Existing questions
  {
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "New York", isCorrect: false },
      { answerText: "London", isCorrect: false },
      { answerText: "Paris", isCorrect: true },
      { answerText: "Dublin", isCorrect: false },
    ],
  },
  {
    questionText: "Who is CEO of Tesla?",
    answerOptions: [
      { answerText: "Jeff Bezos", isCorrect: false },
      { answerText: "Elon Musk", isCorrect: true },
      { answerText: "Bill Gates", isCorrect: false },
      { answerText: "Tony Stark", isCorrect: false },
    ],
  },
  {
    questionText: "The iPhone was created by which company?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  // Additional example questions
  {
    questionText: "What is the largest planet in our Solar System?",
    answerOptions: [
      { answerText: "Earth", isCorrect: false },
      { answerText: "Jupiter", isCorrect: true },
      { answerText: "Mars", isCorrect: false },
      { answerText: "Saturn", isCorrect: false },
    ],
  },
  {
    questionText: "Which element has the chemical symbol 'O'?",
    answerOptions: [
      { answerText: "Gold", isCorrect: false },
      { answerText: "Oxygen", isCorrect: true },
      { answerText: "Hydrogen", isCorrect: false },
      { answerText: "Carbon", isCorrect: false },
    ],
  },
  {
    questionText: "What year did the Titanic sink?",
    answerOptions: [
      { answerText: "1912", isCorrect: true },
      { answerText: "1910", isCorrect: false },
      { answerText: "1914", isCorrect: false },
      { answerText: "1905", isCorrect: false },
    ],
  },
  {
    questionText: "Who wrote 'Romeo and Juliet'?",
    answerOptions: [
      { answerText: "Charles Dickens", isCorrect: false },
      { answerText: "William Shakespeare", isCorrect: true },
      { answerText: "Jane Austen", isCorrect: false },
      { answerText: "Leo Tolstoy", isCorrect: false },
    ],
  },
  {
    questionText: "What is the smallest prime number?",
    answerOptions: [
      { answerText: "1", isCorrect: false },
      { answerText: "2", isCorrect: true },
      { answerText: "3", isCorrect: false },
      { answerText: "5", isCorrect: false },
    ],
  },
  {
    questionText: "Which planet is known as the Red Planet?",
    answerOptions: [
      { answerText: "Mars", isCorrect: true },
      { answerText: "Jupiter", isCorrect: false },
      { answerText: "Saturn", isCorrect: false },
      { answerText: "Venus", isCorrect: false },
    ],
  },
  {
    questionText: "What is the capital city of Japan?",
    answerOptions: [
      { answerText: "Beijing", isCorrect: false },
      { answerText: "Seoul", isCorrect: false },
      { answerText: "Tokyo", isCorrect: true },
      { answerText: "Shanghai", isCorrect: false },
    ],
  },
  {
    questionText: "How many continents are there on Earth?",
    answerOptions: [
      { answerText: "Five", isCorrect: false },
      { answerText: "Six", isCorrect: false },
      { answerText: "Seven", isCorrect: true },
      { answerText: "Eight", isCorrect: false },
    ],
  },
];

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [showMainScreen, setShowMainScreen] = useState(true);

  const selectRandomQuestions = (allQuestions, num = 10) => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  useEffect(() => {
    setQuestions(selectRandomQuestions(allQuestions));
  }, []);

  const handleAnswerOptionClick = (isCorrect, index) => {
    setSelectedAnswer(index);
    setAnswered(true);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setAnswered(false);
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setAnswered(false);
    setQuestions(selectRandomQuestions(allQuestions)); // Reshuffle questions for a new quiz
  };

  const startQuiz = () => {
    setShowMainScreen(false);
  };
  return (
    <div className="app">
      <header>
        <div class="header-left">
          <img src="/assets/credit-card.png" alt="Logo" class="header-icon" />
          <div id="header-text">
            <span class="header-site-name">credit edu</span>
            <span class="header-site-subtitle">
              ...we make learning credit easy
            </span>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <a href="index.html">home</a>
            </li>
            <li>
              <a href="importance.html">importance</a>
            </li>
            <li>
              <a href="articles.html">articles</a>
            </li>
            <li>
              <a href="games.html">games</a>
            </li>
            <li>
              <a href="lessons.html">lessons</a>
            </li>
          </ul>
        </nav>
        <div class="header-right">
          <button class="sign-in-button">sign in</button>
          <button class="translate-button">
            <div id="tooltip">
              <div>English</div>
              <div>Español</div>
              <div>Français</div>
              <div>中国人</div>
              <div>日本語</div>
            </div>
            <img
              src="/assets/globe.png"
              alt="Globe"
              class="header-icon"
              id="translateButton"
            />
          </button>
        </div>
      </header>
      <div id="main-content">
        {showMainScreen ? (
          <div className="main-screen">
            <h1 className="main-heading">Credit Quiz</h1>
            <button onClick={startQuiz} className="common-button">
              Start
            </button>
            <button className="common-button">High Scores</button>
          </div>
        ) : showScore ? (
          <div className="score-section">
            <h1 className="main-heading">
              You scored {score} out of {questions.length}
            </h1>
            <div>
              <button onClick={resetQuiz} className="common-button">
                Try Again
              </button>
              <button className="common-button">High Scores</button>
            </div>
          </div>
        ) : (
          <div className="quiz-container">
            {questions.length > 0 && (
              <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestionIndex + 1}</span>/
                  {questions.length}
                </div>
                <div className="question-text">
                  {questions[currentQuestionIndex].questionText}
                </div>
                <div className="options-container">
                  {questions[currentQuestionIndex].answerOptions.map(
                    (answerOption, index) => (
                      <div
                        key={index}
                        className={`option ${
                          answered
                            ? answerOption.isCorrect
                              ? "correct"
                              : selectedAnswer === index
                              ? "incorrect"
                              : ""
                            : ""
                        }`}
                        onClick={() =>
                          !answered &&
                          handleAnswerOptionClick(answerOption.isCorrect, index)
                        }
                      >
                        {answerOption.answerText}
                      </div>
                    )
                  )}
                </div>
                {answered &&
                  (currentQuestionIndex < questions.length - 1 ? (
                    <button
                      onClick={handleNextQuestion}
                      className="next-question-btn"
                    >
                      Next Question
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowScore(true)}
                      className="next-question-btn"
                    >
                      Finish Quiz
                    </button>
                  ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
