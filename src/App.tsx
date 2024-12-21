import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopPage from "./pages/TopPage";
import Record from "./pages/Record";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HealthyPage from "./pages/HealthyPage";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/record" element={<Record />} />
          <Route path="/healthy" element={<HealthyPage />} />
        </Routes>
        <ScrollToTopButton />

        <Footer />
      </div>
    </Router>
  );
};

export default App;
