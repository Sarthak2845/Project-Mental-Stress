import { useEffect, useState } from 'react';

const HeartRate = () => {
  const [heartRate, setHeartRate] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchHeartRate = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/heart-rate', {
          credentials: 'include',
        });
        if (!response.ok) {
          throw new Error('Failed to fetch heart rate data');
        }
        const data = await response.json();
        const bpm = data?.bucket?.[0]?.dataset?.[0]?.point?.[0]?.value?.[0]?.fpVal;
        setHeartRate(bpm ?? 'No Data');
      } catch (err) {
        setError(err.message);
      }
    };
    fetchHeartRate();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-[#020e1d]">
      <h1 className="text-4xl text-amber-100 font-bold mb-4">Heart Rate Data</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <p className="text-gray-300 text-xl">Heart Rate: {heartRate} bpm</p>
      )}
    </div>
  );
};

export default HeartRate;