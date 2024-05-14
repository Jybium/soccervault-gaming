"use client"

import React, { useState, useEffect } from 'react';
import shuffle from 'lodash/shuffle'; 
import Question from './Question';
import Timer from './Timer';

const Quiz = ({ data }) => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isQuizOver, setIsQuizOver] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [progress, setProgress] = useState(0);

    // Shuffle questions and initialize state when component mounts
    useEffect(() => {
        setQuestions(shuffle(data));
        setCurrentQuestionIndex(0);
        setScore(0);
        setIsQuizOver(false);
        setShowFeedback(false);
        setAnsweredQuestions([]);
        setProgress(0);
    }, [data]);

    const handleAnswer = (answer) => {
        if (answer === questions[currentQuestionIndex].answer) {
            setScore((prevScore) => prevScore + 1);
            setFeedback('Correct!');
        } else {
            setFeedback('Incorrect.');
        }
        setShowFeedback(true);
        setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex === questions.length - 1) {
            setIsQuizOver(true);
        } else {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setShowFeedback(false);
            setProgress((prevProgress) => prevProgress + 1);
        }
    };

    const handleSkipQuestion = () => {
        setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);
        handleNextQuestion();
    };

    const handleTimeUp = () => {
        setIsQuizOver(true);
    };

    return (
        <div>
            {isQuizOver ? (
                <div>
                    <h1>Quiz Over!</h1>
                    <p>Your score: {score}</p>
                </div>
            ) : (
                <div>
                    <Timer timeLimit={180} handleTimeUp={handleTimeUp} />
                    <div className="bg-gray-200 h-4 mb-4">
                        <div
                            className="bg-green-500 h-full"
                            style={{ width: `${(progress / questions.length) * 100}%` }}
                        ></div>
                    </div>
                    <Question
                        question={questions[currentQuestionIndex].question}
                        answers={[
                            questions[currentQuestionIndex].answer,
                            ...questions[currentQuestionIndex].wrong_answers,
                        ]}
                        handleAnswer={handleAnswer}
                    />
                    {showFeedback && <p>{feedback}</p>}
                    <button
                        onClick={handleNextQuestion}
                        disabled={answeredQuestions.includes(currentQuestionIndex)}
                        className="mr-2"
                    >
                        Next
                    </button>
                    <button onClick={handleSkipQuestion} className="mr-2">
                        Skip
                    </button>
                </div>
            )}
        </div>
    );
};

export default Quiz;
