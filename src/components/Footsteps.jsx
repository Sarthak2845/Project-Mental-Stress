import { useEffect, useState } from "react";
import axios from "axios";

const Footsteps = () => {
  const [steps, setSteps] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSteps = async () => {
      try {
        setLoading(true);
        setError(""); 
        const res = await axios.get("https://mindmetrics-backend.vercel.app/api/steps", { withCredentials: true });
        if (!res.data?.steps) {
          throw new Error("No step data found");
        }
        setSteps(res.data.steps);
      } catch (err) {
        setError("Failed to fetch step data. Make sure you are logged in.");
        setSteps(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSteps();

    // Optional: Auto-refresh every 1 minute
    const interval = setInterval(fetchSteps, 60000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="text-center bg-white text-gray-900 p-6 rounded-lg shadow-md w-80">
      <h2 className="text-xl font-bold mb-4">Today's Steps</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <p className="text-3xl font-bold">{steps?.toLocaleString() || 0} 🚶</p>
      )}
    </div>
  );
};

export default Footsteps;
