import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StatsWidget = ({ stats }) => {
    const data = {
        labels: ['Matched', 'Unmatched', 'Duplicated', 'Filtered'],
        datasets: [
            {
                label: 'Stats',
                data: [stats.matched, stats.unmatched, stats.duplicated, stats.filtered],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderWidth: 1,
                borderColor: 'rgba(75, 192, 192, 1)'
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true }
        },
        scales: {
            y: { beginAtZero: true }
        }
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-full">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Statistics</h3>
            <div className="h-64">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default StatsWidget;
