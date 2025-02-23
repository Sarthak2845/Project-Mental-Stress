import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignUp from "./components/Signup";
import "./index.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on mount
  useEffect(() => {
    axios.get("http://localhost:5000/auth/session", { withCredentials: true })
      .then((res) => {
        setIsAuthenticated(res.data.authenticated);
      })
      .catch(() => {
        setIsAuthenticated(false);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Preloader onFinish={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center text-center p-6">
      <Router>
        <Navbar />
        <main>
          <Routes>
            {/* Redirect to home if authenticated */}
            <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <SignUp />} />
            <Route path="/sign" element={<SignUp />} />
            <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
