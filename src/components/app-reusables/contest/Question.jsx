
import React from 'react';

const Question = ({ question, answers, handleAnswer }) => {
    return (
        <div>
            <h2>{question}</h2>
            <ul>
                {answers.map((answer, index) => (
                    <li key={index}>
                        <button onClick={() => handleAnswer(answer)}>{answer}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Question;
