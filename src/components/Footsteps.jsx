
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
        const res = await axios.post("https://your-backend-url.com/api/fit-data", {}, { withCredentials: true });
        if (!res.data?.bucket) {
          throw new Error("Invalid response format");
        }
        let totalSteps = 0;
        res.data.bucket.forEach((bucket) => {
          bucket.dataset?.forEach((dataset) => {
            dataset.point?.forEach((point) => {
              point.value?.forEach((val) => {
                totalSteps += val.intVal || 0;
              });
            });
          });
        });

        setSteps(totalSteps);
      } catch (err) {
        setError("Failed to fetch step data. Make sure you are logged in.");
        setSteps(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSteps();

    const interval = setInterval(fetchSteps, 60000);
    return () => clearInterval(interval);
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