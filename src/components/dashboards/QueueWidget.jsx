import React from "react";
import BarChart from "./BarChart";

const QueueWidget = ({ data }) => {
    const queueCount = data.filter((item) => item.status === "Queued").length;

    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Queued Processes</h3>
            <BarChart
                data={[queueCount]}
                labels={["Queued"]}
                colors={["#FBBF24"]} // Yellow
            />
        </div>
    );
};

export default QueueWidget;
