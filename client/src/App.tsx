import React from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import LandingPage from './pages/landingPage';
import HomePage from './pages/clients/homePage';
import RecordsList from './pages/records/recordsList';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* Landing */}
          <Route path="/" element={<LandingPage />} />

          {/* Clients */}
          <Route path="/homePage" element={<HomePage />}/>

          {/* Records */}
          <Route path="/recordsList" element={<RecordsList />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
