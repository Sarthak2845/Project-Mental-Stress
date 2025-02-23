import { useState } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./index.css"
const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center text-center p-6">
      {loading ? (
        <Preloader onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Home />
          <div className="bg-blue-500 text-white text-center p-4">
      Tailwind is working! 🚀
    </div>

        </>

      )}
    </div>
  )}

export default App;
