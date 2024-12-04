import React from "react";
import BarChart from "./BarChart";

const InProgressWidget = ({ data }) => {
    const inProgressCount = data.filter((item) => item.status === "InProgress").length;

    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">InProgress Processes</h3>
            <BarChart
                data={[inProgressCount]}
                labels={["InProgress"]}
                colors={["#3B82F6"]} // Blue
            />
        </div>
    );
};

export default InProgressWidget;
