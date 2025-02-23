import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col min-h-screen">
      {loading ? (
        <Preloader onFinish={() => setLoading(false)} />
      ) : (
        <Router>
          <Navbar />
          <div className="flex-grow pt-16 bg-gradient-to-br from-gray-900 to-black"> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      )}
    </div>
  );
};

export default App;
