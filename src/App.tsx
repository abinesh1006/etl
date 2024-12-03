// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';

import SideNav from './components/sideNav/SideNav';
import ProcessPage from './components/process/ProcessPage'; // Importing ProcessPage
import ProcessList from './components/process/ProcessList'; // Import ProcessList
import CreateProcess from './components/process/CreateProcess'; // Importing ProcessPage
import OnboardingComponent from "./components/onboarding/OnboardingComponent";
import IngestorComponent from "./components/ingestor/IngestorComponent";

const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* Side Navigation */}
        <SideNav />
        {/* Main Content */}
        <div className="flex-grow">
          <Navbar />
          <main className="pt-16 pl-16">
            <Routes>
              <Route path="/" element={<div>Home Page</div>} />
              <Route path="/profile" element={<div>Profile Page</div>} />
              <Route path="/settings" element={<div>Settings Page</div>} />
               <Route path="/process" element={<ProcessList />} />
                          <Route path="/createprocess" element={<CreateProcess />} />
                <Route path="/ingestor/:fileCode" element={<IngestorComponent />} />
              <Route path="/onboarding/:processId" element={<OnboardingComponent />} />
                          <Route path="/process/:processId" element={<ProcessPage />} />
                          <Route path="/process/:processCode/:runId" element={<ProcessPage />} />

            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
