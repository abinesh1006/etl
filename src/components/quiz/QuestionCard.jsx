import React, { useState, useEffect } from 'react';
import AnswerOption from './AnswerOption';
import ProgressBar from './ProgressBar';
import QuestionInfoStats from './QuestionInfoStats'; // Import QuestionInfoStats component

const QuestionCard = ({ currentPoints, onPointsUpdate, question, selectedAnswer, handleAnswerSelect, setInfoVisible, infoVisible, onTimeout }) => {
    const [showOptions, setShowOptions] = useState([]);
    const [timeRemaining, setTimeRemaining] = useState(question.timings); // Timer state
    const [gradientColor, setGradientColor] = useState('bg-green-600'); // Initial gradient color
    const [timerIntervalId, setTimerIntervalId] = useState(null);

    useEffect(() => {
        // Reset timer and gradient color when question changes
        setTimeRemaining(question.timings);
        setGradientColor('bg-green-600');

        // Show options with delay
        const delay = 2000; // Delay between each option in milliseconds
        const timer = setTimeout(() => {
            setShowOptions(question.options.map(option => option.id));
        }, delay * question.options.length);

        return () => clearTimeout(timer); // Clean up timer on unmount
    }, [question]);

    useEffect(() => {
        if (timeRemaining <= 0) {
            setGradientColor('bg-red-600'); // Ensure the color is fully red when time is up
            onTimeout(); // Notify the parent about the timeout
            return;
        }

        // Interval to update timer and gradient color
        const intervalId = setInterval(() => {
            setTimeRemaining(prevTime => Math.max(prevTime - 0.1, 0)); // Update every 100 milliseconds
            if (Math.floor(timeRemaining) % 1 === 0) {
                updateGradientColor();
            }
        }, 100);

        // Save interval ID for cleanup
        setTimerIntervalId(intervalId);

        return () => clearInterval(intervalId); // Clean up interval on unmount
    }, [timeRemaining]);

    const updateGradientColor = () => {
        if (timeRemaining <= 0) {
            setGradientColor('bg-red-600'); // Ensure the color is fully red when time is up
            return;
        }

        const percentage = timeRemaining / question.timings;
        const redToGreen = `linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,165,0,1) ${(1 - percentage) * 100}%, rgba(0,255,0,1) 100%)`;
        setGradientColor(redToGreen);
    };

    const handleAnswerSelectAndUpdatePoints = (option) => {
        if (timeRemaining > 0) {
            onPointsUpdate((prevPoints) => prevPoints - 200);
            handleAnswerSelect(option);
        }
    };

    const handleCloseInfoStats = () => {
        setInfoVisible(false);
    };

    return (
        <div className="relative p-4 text-center bg-white rounded-lg shadow-lg">
            <div className="relative mb-4">
                <div
                    className="h-2 rounded-full"
                    style={{
                        width: `${(timeRemaining > 0 ? (timeRemaining / question.timings) * 100 : 0)}%`,
                        background: gradientColor
                    }}
                >
                </div>
                <span className="absolute top-0 right-0 text-black text-xs font-bold">{Math.ceil(timeRemaining)}</span>
            </div>
            <h2 className="text-2xl mb-4 flex items-center justify-center relative">
                {question.question}
                <button
                    className="ml-4 p-1 text-gray-600 hover:text-gray-800"
                    onClick={() => setInfoVisible(true)} // Show info stats
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1v-1h1V7h1v4h1v1h-1v5z" />
                    </svg>
                </button>
            </h2>
            <div className="flex justify-center">
                <div className="bg-blue-600 rounded-lg p-4 shadow-lg max-w-md w-full">
                    <div className="grid grid-cols-1 gap-4">
                        {question.options.map((option, index) => (
                            <AnswerOption
                                key={option.id}
                                option={option}
                                selectedAnswer={selectedAnswer}
                                handleAnswerSelect={handleAnswerSelectAndUpdatePoints}
                                className={`transition-opacity duration-500 ${showOptions.includes(option.id) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <ProgressBar currentPoints={currentPoints} />
            {infoVisible && (
                <QuestionInfoStats
                    questionId={question.id}
                    onClose={handleCloseInfoStats}
                    className="absolute inset-0 max-w-lg mx-auto my-4 p-4 bg-white rounded-lg shadow-xl opacity-95 z-50"
                />
            )}
        </div>
    );
};

export default QuestionCard;