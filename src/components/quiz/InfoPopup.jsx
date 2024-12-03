import React, { useState, useEffect } from 'react';

const InfoPopup = ({ questionId, onClose }) => {
    const [questionStats, setQuestionStats] = useState(null);

    useEffect(() => {
        // Fetch question stats from API
        fetch(`https://api.example.com/question-stats/${questionId}`)
            .then(response => response.json())
            .then(data => setQuestionStats(data))
            .catch(error => console.error('Error fetching question stats:', error));
    }, [questionId]);

    if (!questionStats) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-lg mb-4">Question Stats</h2>
                <ul className="mb-4">
                    <li>Total Attempts: {questionStats.totalAttempts}</li>
                    <li>Correct Answers: {questionStats.correctAnswers}</li>
                    <li>Average Time: {questionStats.avgTime}s</li>
                </ul>
                <a href={questionStats.referenceLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline mb-4 block">Learn more about this topic</a>
                <button onClick={onClose} className="bg-blue-600 text-white px-4 py-2 rounded-lg">Close</button>
            </div>
        </div>
    );
};

export default InfoPopup;
