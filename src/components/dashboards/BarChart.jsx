import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data, labels, colors }) => {
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: "Processes",
                data: data,
                backgroundColor: colors,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
            },
        },
    };

    return <Bar data={chartData} options={options} height={200} />;
};

export default BarChart;
