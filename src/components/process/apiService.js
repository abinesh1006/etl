export const fetchProcesses = async (query = "") => {
  try {
    const response = await fetch(`/api/processes?search=${query}`);
    if (!response.ok) {
   return [
      {
        process_code: "PROC001",
        last_run_date: "2024-11-19",
        last_run_status: "Success",
        time_taken: "5 minutes",
        triggered_by: "System",
      },
      {
        process_code: "PROC002",
        last_run_date: "2024-11-18",
        last_run_status: "Failure",
        time_taken: "10 minutes",
        triggered_by: "User",
      }
    ]; // Example dummy data
    }
    return await response.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getProcessStatus = async (processCode) => {
  try {
    const response = await fetch(`/api/get-status/${processCode}`);
    if (!response.ok) {
         return {
      config_status: "valid", // Example status
      runs: [
        {
          date: "2024-11-19",
          status: "Success",
        },
        {
          date: "2024-11-18",
          status: "Failure",
        },
      ], // Example run data
    };
     // throw new Error("Failed to fetch process status");
    }
    return await response.json();
  } catch (err) {
    console.error(err);
   return  {
      config_status: "valid", // Example status
      runs: [
        {
          date: "2024-11-19",
          status: "Success",
        },
        {
          date: "2024-11-18",
          status: "Failure",
        },
      ], // Example run data
    }
 //   throw err;
  }
};
