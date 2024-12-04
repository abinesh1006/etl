import React from "react";
import BarChart from "./BarChart";

const ValidationWidget = ({ data }) => {
    const validationCount = data.filter((item) => item.status === "Validation").length;

    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Validation Processes</h3>
            <BarChart
                data={[validationCount]}
                labels={["Validation"]}
                colors={["#10B981"]} // Green
            />
        </div>
    );
};

export default ValidationWidget;
