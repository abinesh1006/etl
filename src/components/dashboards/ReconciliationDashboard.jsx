import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProcessListWidget from './ProcessListWidget';
import TotalCountsBarChart from './TotalCountsBarChart';
import SuccessFailureWidget from './SuccessFailureWidget';

const ReconciliationDashboard = () => {
  const [queuedProcesses, setQueuedProcesses] = useState([]);
  const [inProgressProcesses, setInProgressProcesses] = useState([]);
  const [validationProcesses, setValidationProcesses] = useState([]);
  const [counts, setCounts] = useState({});
  const [successFailure, setSuccessFailure] = useState({ success: 0, failure: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const summaryResponse = await axios.get('/api/status/summary');
      const { data: summaryData } = summaryResponse;

      const queuedData = await axios.get('https://dummyjson.com/c/8fa3-a4ec-4695-815a');
      const completedData = await axios.get('https://dummyjson.com/c/e0a7-bb3e-4ae6-9ea5');

      setCounts({
        queued: summaryData.queued,
        inprogress: summaryData.inprogress,
        validation: summaryData.validation,
        completed: summaryData.completed,
        failure: summaryData.failure,
      });

      setSuccessFailure({
        success: summaryData.completed,
        failure: summaryData.failure,
      });

      setQueuedProcesses(queuedData.data);
      setInProgressProcesses(queuedData.data.filter((item) => item.status === 'InProgress'));
      setValidationProcesses(queuedData.data.filter((item) => item.status === 'Validation'));
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <ProcessListWidget data={queuedProcesses} title="Queued Processes" onChangeSize={(size) => console.log(size)} />
      <ProcessListWidget data={inProgressProcesses} title="In Progress Processes" onChangeSize={(size) => console.log(size)} />
      <ProcessListWidget data={validationProcesses} title="Validation Processes" onChangeSize={(size) => console.log(size)} />
      <TotalCountsBarChart counts={counts} />
      <SuccessFailureWidget success={successFailure.success} failure={successFailure.failure} />
    </div>
  );
};

export default ReconciliationDashboard;
