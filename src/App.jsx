import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';

// Layout
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

// Pages
import Hero from "./pages/Home/Hero.jsx";
import HowWeWork from "./pages/Home/HowWeWork.jsx";
import Statistics from "./pages/Home/Statistics.jsx";
import TeamPage from "./pages/Team/TeamPage.jsx";
import ClientsPage from "./pages/Clients/ClientsPage.jsx";
import ContactsPage from "./pages/Contacts/ContactsPage.jsx";
import FAQPage from "./pages/FAQ/FAQPage.jsx";

// Home Page Component
const HomePage = () => (
  <>
    <Hero />
    <HowWeWork />
    <Statistics />
    {/*<VisionMission />*/}
    {/*<Principles />*/}
  </>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;