import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

import HeroSection from "./components/HeroSection/HeroSection";
import HeroSectionFreemint from "./components/HeroSectionFreemint/HeroSectionFreemint";
import HeroSectionWhitelist from "./components/HeroSectionWhitelist/HeroSectionWhitelist";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />}></Route>{" "}
        <Route path="/whitelist" element={<HeroSectionWhitelist />}></Route>{" "}
        <Route path="/freemint" element={<HeroSectionFreemint />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
