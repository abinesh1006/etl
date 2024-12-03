import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import ResultCard from './ResultCard';

const QuizContainer = ({ currentPoints, onPointsUpdate }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [quizProgress, setQuizProgress] = useState(0); // in percentage
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [quizResults, setQuizResults] = useState([]);
    const [timeoutModal, setTimeoutModal] = useState(false); // State for timeout modal
    const [infoVisible, setInfoVisible] = useState(false); // Info visibility state

    const quizData = [
        {
            id: 1,
            question: 'What is blockchain?',
            options: [
                { id: 1, text: 'A decentralized ledger' },
                { id: 2, text: 'A type of cryptocurrency' },
                { id: 3, text: 'A type of database' },
                { id: 4, text: 'All of the above', correct: true },
            ],
            timings: 10, // 30 seconds for this question
        },
        {
            id: 2,
            question: 'Who invented Bitcoin?',
            options: [
                { id: 5, text: 'Satoshi Nakamoto', correct: true },
                { id: 6, text: 'Vitalik Buterin' },
                { id: 7, text: 'Elon Musk' },
                { id: 8, text: 'Mark Zuckerberg' },
            ],
            timings: 10, // 30 seconds for this question
        },
        // Add more questions as needed
    ];

    const handleAnswerSelect = async (selectedOption) => {
        if (selectedAnswer !== null) return;

        setSelectedAnswer(selectedOption);

        const isCorrect = selectedOption.correct;
        const updatedResults = [...quizResults, { questionId: quizData[currentQuestionIndex].id, isCorrect }];
        setQuizResults(updatedResults);

        const progress = ((updatedResults.length / quizData.length) * 100).toFixed(0);
        setQuizProgress(progress);

        setTimeout(() => {
            handleNextQuestion(); // Move to the next question after 1 second
        }, 1000);
    };

    const handleNextQuestion = () => {
        setInfoVisible(false); // Hide info stats modal when moving to the next question
        setTimeoutModal(false); // Hide timeout modal
        setSelectedAnswer(null);

        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizCompleted(true);
        }
    };

    const handleTimeout = () => {
        setTimeoutModal(true); // Show timeout modal
    };

    const handleViewStats = () => {
        setTimeoutModal(false); // Hide timeout modal
        setInfoVisible(true); // Show info stats modal
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg">
            <div className="w-full max-w-4xl p-6 md:p-8 bg-white rounded-lg shadow-lg relative max-h-[80vh] overflow-hidden">
                {quizCompleted ? (
                    <ResultCard quizResults={quizResults} />
                ) : (
                    <>
                        <QuestionCard
                            currentPoints={currentPoints}
                            onPointsUpdate={onPointsUpdate}
                            question={quizData[currentQuestionIndex]}
                            selectedAnswer={selectedAnswer}
                            handleAnswerSelect={handleAnswerSelect}
                            setInfoVisible={setInfoVisible} // Pass setInfoVisible to QuestionCard
                            onTimeout={handleTimeout}
                            infoVisible={infoVisible} // Pass infoVisible to QuestionCard
                        />
                        {timeoutModal && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                <div className="bg-white p-4 rounded-lg shadow-lg">
                                    <h2 className="text-lg font-semibold mb-4">Time's Up!</h2>
                                    <p className="mb-4">You ran out of time for this question.</p>
                                    <button
                                        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                                        onClick={handleNextQuestion} // Go to next question when closing the modal
                                    >
                                        Next Question
                                    </button>
                                    <button
                                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mt-2"
                                        onClick={handleViewStats} // View stats instead of closing the modal
                                    >
                                        View Stats
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
      </div>
    );
};

export default QuizContainer;
