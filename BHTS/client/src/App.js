import React, { useState, useEffect } from "react";
import "./App.css";

// Expanded set of mock questions

function App() {
  const allQuestions = [
    // ... (your previous questions)

    // New questions
    {
      questionText: "Credit is:",
      answerOptions: [
        { answerText: "A sequel to the Rocky movies", isCorrect: false },
        { answerText: "Your reputation as a borrower", isCorrect: true },
        { answerText: "Your criminal record", isCorrect: false },
        {
          answerText: "The name of the person who invented the credit card",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "The three credit bureaus include all the following except:",
      answerOptions: [
        { answerText: "Experian", isCorrect: true },
        { answerText: "TransUnion", isCorrect: false },
        { answerText: "Equifax", isCorrect: false },
        { answerText: "Transamerica", isCorrect: false },
      ],
    },
    {
      questionText:
        "Things you can do to improve your credit include all of the following except:",
      answerOptions: [
        {
          answerText:
            "Opening a new credit card every time a store clerk offers you one",
          isCorrect: false,
        },
        {
          answerText: "Checking your credit report for errors periodically",
          isCorrect: false,
        },
        { answerText: "Paying your bills", isCorrect: true },
        {
          answerText: "Paying your credit card balance in full each month",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "Things you shouldn’t do because they’ll hurt your credit score include all of the following except:",
      answerOptions: [
        {
          answerText:
            "Opening a new credit card every time a store clerk offers you one",
          isCorrect: false,
        },
        {
          answerText:
            "Freezing your credit card in a block of ice so you can't use it",
          isCorrect: true,
        },
        { answerText: "Maxing out your cards", isCorrect: false },
        { answerText: "Missing payments", isCorrect: false },
      ],
    },
    {
      questionText: "Your credit history and credit score may be used when:",
      answerOptions: [
        {
          answerText: "Your teacher offers you extra credit on a test",
          isCorrect: false,
        },
        { answerText: "You're applying for a job", isCorrect: true },
        { answerText: "You're buying a new car with cash", isCorrect: false },
        { answerText: "You're writing your marriage vows", isCorrect: false },
      ],
    },
    {
      questionText: "When you pay with a credit card you are:",
      answerOptions: [
        {
          answerText: "Showing off how wealthy, fabulous, and carefree you are",
          isCorrect: false,
        },
        {
          answerText: "Having a great time waiting for the chip reader to work",
          isCorrect: false,
        },
        {
          answerText:
            "Borrowing money from the credit card issuer that you'll have to repay",
          isCorrect: true,
        },
        {
          answerText: "Spending Monopoly money. It's not even real!",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "Missing a credit card payment is:",
      answerOptions: [
        {
          answerText:
            "A big deal, and something you should avoid, but something your life can recover from",
          isCorrect: true,
        },
        { answerText: "Playing hard to get", isCorrect: false },
        {
          answerText: "Not a big deal if you don't do it more than once a year",
          isCorrect: false,
        },
        { answerText: "Literal death", isCorrect: false },
      ],
    },
    {
      questionText: "Your FICO® score is:",
      answerOptions: [
        {
          answerText:
            "The single determinant of whether you'll be a successful and happy person in life",
          isCorrect: false,
        },
        {
          answerText: "The most well-known type of credit score",
          isCorrect: true,
        },
        { answerText: "An index of your salary", isCorrect: false },
        {
          answerText: "The highest score you can earn on Fortnite",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "A great FICO score range is:",
      answerOptions: [
        { answerText: "0–100", isCorrect: false },
        {
          answerText: "867–5309 ('Jenny, I Got Your FICO Score')",
          isCorrect: false,
        },
        { answerText: "900–1,000", isCorrect: false },
        { answerText: "800–850", isCorrect: true },
      ],
    },
    {
      questionText: "FICO stands for:",
      answerOptions: [
        { answerText: "Falling Into Cave Openings", isCorrect: false },
        { answerText: "The Fair Isaac Corporation", isCorrect: true },
        {
          answerText: "The Finally, I Can Open a credit card Act",
          isCorrect: false,
        },
        {
          answerText: "The Federal Insurance Contributions Organization",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "When was the first U.S. credit score, the FICO® score, introduced?",
      answerOptions: [
        { answerText: "1989", isCorrect: true },
        {
          answerText: "1970, around the time credit cards became popular",
          isCorrect: false,
        },
        { answerText: "During the Stone Age", isCorrect: false },
        { answerText: "2001, as a part of the Y2K bug fix", isCorrect: false },
      ],
    },
    {
      questionText:
        "What are the five key factors your credit score is based on?",
      answerOptions: [
        {
          answerText:
            "Payment history, amounts owed, length of credit history, new credit, types of credit used",
          isCorrect: true,
        },
        {
          answerText:
            "Annual income, employment status, age, marital status, and residence type",
          isCorrect: false,
        },
        {
          answerText:
            "The make of your car, your hairstyle, the brand of your phone, your shoe size, and your Netflix watch history",
          isCorrect: false,
        },
        {
          answerText:
            "Your high school GPA, your favorite TV show, the last book you read, your culinary skills, and your ability to sing in the shower",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "What is the range of FICO credit scores?",
      answerOptions: [
        { answerText: "300 to 850", isCorrect: true },
        {
          answerText:
            "500 to 1000, to account for exceptional creditworthiness",
          isCorrect: false,
        },
        { answerText: "Over 9000, in Dragon Ball Z style", isCorrect: false },
        {
          answerText: "It's a mystery, like the depths of the ocean",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "Does checking your own credit hurt your score?",
      answerOptions: [
        { answerText: "No, it doesn’t hurt your score", isCorrect: true },
        {
          answerText: "Yes, but only if it's done more than once a month",
          isCorrect: false,
        },
        {
          answerText: "Yes, and it also angers the Credit Score Elves",
          isCorrect: false,
        },
        {
          answerText: "Only if you check it more than twice a day",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "What happens when you cancel old credit cards?",
      answerOptions: [
        { answerText: "It can lower your score", isCorrect: true },
        {
          answerText:
            "It can improve your score by reducing your available credit",
          isCorrect: false,
        },
        { answerText: "A unicorn loses its wings", isCorrect: false },
        { answerText: "It increases your charisma stat", isCorrect: false },
      ],
    },
    {
      questionText: "Is it possible to get a loan with bad credit?",
      answerOptions: [
        { answerText: "Yes, you can still get a loan", isCorrect: true },
        {
          answerText: "Only with a substantial down payment",
          isCorrect: false,
        },
        {
          answerText: "No, and you’ll also be banned from all board games",
          isCorrect: false,
        },
        {
          answerText:
            "Only if you can beat the banker in an arm-wrestling match",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "Are credit scores the sole deciding factor for lending decisions?",
      answerOptions: [
        { answerText: "No, they aren’t the only factor", isCorrect: true },
        {
          answerText:
            "Yes, but other factors like income and employment history are also considered",
          isCorrect: false,
        },
        { answerText: "Only on alternate Thursdays", isCorrect: false },
        {
          answerText:
            "Yes, and they determine your eligibility for Martian citizenship",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "How do joint accounts affect your credit scores?",
      answerOptions: [
        {
          answerText:
            "They affect your scores, but you don’t have joint scores",
          isCorrect: true,
        },
        {
          answerText:
            "They blend both individuals' scores to form a new joint score",
          isCorrect: false,
        },
        {
          answerText:
            "They automatically enroll you in a couples' dance competition",
          isCorrect: false,
        },
        {
          answerText: "They double your score on Valentine's Day",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "When do late payments start impacting your credit score?",
      answerOptions: [
        { answerText: "Only after you're 30 days late", isCorrect: true },
        { answerText: "After 15 days of the due date", isCorrect: false },
        {
          answerText: "When the moon is in the seventh house",
          isCorrect: false,
        },
        {
          answerText: "Only if the late payment is more than a million dollars",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "Can paying down credit card balances early help your scores?",
      answerOptions: [
        { answerText: "Yes, it might help your scores", isCorrect: true },
        {
          answerText:
            "No, it has no effect as long as minimum payments are made",
          isCorrect: false,
        },
        {
          answerText: "Only if done while hopping on one foot",
          isCorrect: false,
        },
        {
          answerText: "Yes, and it also makes you invisible to cameras",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "Are some people not scoreable in terms of credit?",
      answerOptions: [
        { answerText: "Yes, some people aren't scoreable", isCorrect: true },
        {
          answerText: "Only people with no credit history are non-scoreable",
          isCorrect: false,
        },
        {
          answerText:
            "Only superheroes and mythical creatures are non-scoreable",
          isCorrect: false,
        },
        {
          answerText:
            "Only people who have never seen a movie are non-scoreable",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "What is a credit report?",
      answerOptions: [
        { answerText: "A list of your debts and assets", isCorrect: false },
        {
          answerText: "A detailed record of your credit history",
          isCorrect: true,
        },
        { answerText: "A record of your employment history", isCorrect: false },
        {
          answerText: "A summary of your bank account transactions",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "Which of these entities can check your credit score?",
      answerOptions: [
        { answerText: "Employers (with your permission)", isCorrect: false },
        { answerText: "Landlords", isCorrect: false },
        { answerText: "Banks and credit card companies", isCorrect: false },
        { answerText: "All of the above", isCorrect: true },
      ],
    },
    {
      questionText: "How often is it recommended to check your credit report?",
      answerOptions: [
        { answerText: "Once a week", isCorrect: false },
        { answerText: "Once a month", isCorrect: false },
        { answerText: "Once a year", isCorrect: true },
        { answerText: "Only when applying for a loan", isCorrect: false },
      ],
    },
    {
      questionText: "What is a 'secured credit card'?",
      answerOptions: [
        {
          answerText: "A card that requires a security deposit",
          isCorrect: true,
        },
        {
          answerText: "A credit card with insurance coverage",
          isCorrect: false,
        },
        {
          answerText: "A credit card with no spending limit",
          isCorrect: false,
        },
        {
          answerText: "A credit card that is locked for security",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "What can cause a 'hard inquiry' on your credit report?",
      answerOptions: [
        { answerText: "Checking your own credit score", isCorrect: false },
        {
          answerText: "Applying for a new credit card or loan",
          isCorrect: true,
        },
        { answerText: "Regularly paying your utility bills", isCorrect: false },
        {
          answerText: "Subscribing to a credit monitoring service",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "What is 'credit counseling'?",
      answerOptions: [
        {
          answerText: "A mandatory course for all credit card holders",
          isCorrect: false,
        },
        {
          answerText:
            "A service that helps individuals manage their credit and debts effectively",
          isCorrect: true,
        },
        {
          answerText: "Counseling for banks on credit risk management",
          isCorrect: false,
        },
        {
          answerText: "A government program for erasing bad credit",
          isCorrect: false,
        },
      ],
    },

    // Add any additional questions in the same format
  ];

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          </div>
        ) : showScore ? (
          <div className="score-section">
            <h1 className="main-heading">
              You scored {score} out of {questions.length}!
            </h1>
            <div>
              <button onClick={resetQuiz} className="common-button">
                Try Again
              </button>
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
