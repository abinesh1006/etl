import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LeftSidebar from "./LeftSideBar";
import DataTable from "./DataTable";
import RightSidebar from "./RightSideBar";
import SettingsModal from "./SettingsModal";
import ProcessHeader from "./ProcessHeader";

const ProcessPage = () => {
    const { processCode, runId } = useParams();
    const [breaksData, setBreaksData] = useState({});
    const [matchingData, setMatchingData] = useState({});
    const [data, setData] = useState([]);
    const [stats, setStats] = useState({});
    const [files, setFiles] = useState([]);
    const [showSettings, setShowSettings] = useState(false);

    useEffect(() => {
        fetchData(processCode,runId);
    }, [processCode,runId]);

    const fetchData = async (processCode,runId) => {
        try {
            console.log(`Fetching data for runId: ${runId} ${processCode}`);
            const response = await fetch(`https://dummyjson.com/c/13c8-c689-486b-ba02?runId=${runId}`);
            if (!response.ok) throw new Error(`API call failed with status: ${response.status}`);
            const result = await response.json();
            setBreaksData(result.breaksData || {});
            setMatchingData(result.matchingData || {});
            setData(result.data || []);
            setStats(result.stats || {});
            setFiles(result.files || []);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div className="flex flex-col">
            <ProcessHeader
                processName={`Process Details for ${runId}`}
                onSettingsClick={() => setShowSettings(true)}
            />
            <div className="flex flex-1">
                <LeftSidebar breaksData={breaksData} matchingData={matchingData} />
                <div className="flex-1 p-4">
                    <DataTable data={data} />
                </div>
                <RightSidebar stats={stats} files={files} />
            </div>
            {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
        </div>
    );
};

export default ProcessPage;
