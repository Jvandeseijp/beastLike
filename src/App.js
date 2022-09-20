import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />}></Route>{" "}
        <Route path="/whitelist" element={<HeroSection />}></Route>{" "}
        <Route path="/freemint" element={<HeroSection />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
