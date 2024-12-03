import React from 'react';

const AnswerOption = ({ option, selectedAnswer, handleAnswerSelect }) => {
    const isSelected = selectedAnswer !== null && selectedAnswer.id === option.id;
    const isCorrect = isSelected && option.correct;

    return (
        <label
            className={`flex items-center p-4 rounded-lg cursor-pointer transition-colors duration-300 ${isSelected
                ? isCorrect
                    ? 'bg-green-500 text-white'
                    : 'bg-red-600 text-white'
                : 'bg-blue-200 text-black-800'
                }`}
            onClick={() => handleAnswerSelect(option)}
        >
            <input type="radio" className="hidden" />
            <span className="text-lg">{option.text}</span>
            {isSelected && (
                <span className="ml-auto">
                    {isCorrect ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-green-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-red-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )}
                </span>
            )}
        </label>
    );
};

export default AnswerOption;
