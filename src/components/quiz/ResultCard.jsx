import React from 'react';

const ResultCard = ({ quizResults }) => {
    const correctAnswers = quizResults.filter((result) => result.isCorrect).length;
    const totalQuestions = quizResults.length;

    return (
        <div className="p-4 text-center">
            <h2 className="text-3xl mb-6">Quiz Results</h2>
            <p className="text-lg">
                You scored {correctAnswers}/{totalQuestions}
            </p>
            <button
                className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-800"
                onClick={() => window.location.reload()} // Example of resetting quiz
            >
                Retry Quiz
            </button>
        </div>
    );
};

export default ResultCard;
