import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const Chart = ({ processes }) => {
    // Example: Status trend line
    const processStatusCount = processes.reduce(
        (acc, process) => {
            acc[process.status] = (acc[process.status] || 0) + 1;
            return acc;
        },
        {}
    );

    // Chart data
    const data = {
        labels: ['Queued', 'InProgress', 'Completed', 'Failure'],
        datasets: [
            {
                label: 'Process Status',
                data: [
                    processStatusCount['Queued'] || 0,
                    processStatusCount['InProgress'] || 0,
                    processStatusCount['Completed'] || 0,
                    processStatusCount['Failure'] || 0,
                ],
                borderColor: '#3490dc',
                backgroundColor: 'rgba(52, 144, 220, 0.2)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <Line data={data} />
        </div>
    );
};

export default Chart;
