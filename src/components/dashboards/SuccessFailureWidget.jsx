import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const SuccessFailureWidget = ({ success, failure }) => {
    const data = {
        labels: ['Success', 'Failure'],
        datasets: [
            {
                label: 'Count',
                data: [success || 0, failure || 0],
                backgroundColor: ['#16A34A', '#EF4444'], // Success - Green, Failure - Red
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
            <h3 className="text-lg font-semibold mb-4">Success and Failure Counts</h3>
            <Bar data={data} options={options} />
        </div>
    );
};

export default SuccessFailureWidget;
