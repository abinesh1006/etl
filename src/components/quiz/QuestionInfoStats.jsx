import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const QuestionInfoStats = ({ questionId, onClose }) => {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        const fetchQuestionStats = async () => {
            try {
                const response = await fetch(`/api/question-stats/${questionId}`);
                const data = await response.json();
                setStats(data);
            } catch (error) {
                setStats({
                    attempts: 120,
                    correct: 85,
                    averageTime: '20s',
                    difficulty: 'Medium',
                    referenceLink: 'https://example.com/learn-more',
                    attemptOverTime: [10, 20, 15, 30, 25]
                });
            }
        };

        fetchQuestionStats();
    }, [questionId]);

    if (!stats) {
        return <div>Loading...</div>;
    }

    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Attempts Over Time',
                data: stats.attemptOverTime,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                fill: true,
            }
        ]
    };

    return (
        <div className="absolute inset-0  bg-blue-200 flex justify-center items-center z-150">
            <div className="relative bg-white px-4 rounded-lg shadow-lg text-center max-w-md mx-auto overflow-y-auto ">
                <button
                    className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-800"
                    onClick={onClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className="text-xl font-semibold mb-4">Question Stats</h2>
                <div className="mb-4">
                    <p><strong>Number of Attempts:</strong> {stats.attempts}</p>
                    <p><strong>Number of Correct Answers:</strong> {stats.correct}</p>
                    <p><strong>Average Time Taken:</strong> {stats.averageTime}</p>
                    <p><strong>Difficulty Level:</strong> {stats.difficulty}</p>
                    <p><strong>Reference Link:</strong> <a href={stats.referenceLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">{stats.referenceLink}</a></p>
                </div>
                <div className="h-64">
                    <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
                </div>
            </div>
        </div>
    );
};

export default QuestionInfoStats;
