import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const TotalCountsBarChart = ({ counts }) => {
    const data = {
        labels: ['Queued', 'In Progress', 'Validation', 'Completed', 'Failure'],
        datasets: [
            {
                label: 'Process Counts',
                data: [
                    counts.queued || 0,
                    counts.inprogress || 0,
                    counts.validation || 0,
                    counts.completed || 0,
                    counts.failure || 0,
                ],
                backgroundColor: [
                    '#FBBF24', // Queued - Yellow
                    '#3B82F6', // InProgress - Blue
                    '#10B981', // Validation - Green
                    '#16A34A', // Completed - Dark Green
                    '#EF4444', // Failure - Red
                ],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: true, position: 'top' },
        },
        scales: {
            y: { beginAtZero: true },
        },
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 h-full">
            <h3 className="text-lg font-semibold mb-4">Total Process Counts</h3>
            <Bar data={data} options={options} />
        </div>
    );
};

export default TotalCountsBarChart;
