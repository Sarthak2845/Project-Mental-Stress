import { useEffect, useState } from "react";
import axios from "axios";

const Footsteps = () => {
  const [steps, setSteps] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch Google Fit step data from backend
  useEffect(() => {
    axios
      .post("http://localhost:5000/api/fit-data", {}, { withCredentials: true })
      .then((res) => {
        const buckets = res.data.bucket || [];
        let totalSteps = 0;

        // Extract step count from response
        buckets.forEach((bucket) => {
          bucket.dataset.forEach((dataset) => {
            dataset.point.forEach((point) => {
              point.value.forEach((val) => {
                totalSteps += val.intVal || 0;
              });
            });
          });
        });

        setSteps(totalSteps);
      })
      .catch(() => {
        setError("Failed to fetch step data. Make sure you are logged in.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="text-center bg-white text-gray-900 p-6 rounded-lg shadow-md w-80">
      <h2 className="text-xl font-bold mb-4">Today's Steps</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <p className="text-3xl font-bold">{steps.toLocaleString()} 🚶</p>
      )}
    </div>
  );
};

export default Footsteps;
