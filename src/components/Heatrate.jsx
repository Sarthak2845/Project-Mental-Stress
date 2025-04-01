import { useEffect, useState } from 'react';

const HeartRate = () => {
  const [heartRate, setHeartRate] = useState(null);
  const [error, setError] = useState('');
  const [stressLevel, setStressLevel] = useState('');

  useEffect(() => {
    const fetchHeartRate = async () => {
      try {
        const response = await fetch('https://mindmetrics-backend.vercel.app/api/heart-rate', {
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch heart rate data');
        }

        const data = await response.json();
        const bpm = data?.bucket?.[0]?.dataset?.[0]?.point?.[0]?.value?.[0]?.fpVal;

        if (bpm) {
          setHeartRate(bpm);
          calculateStress(bpm);
        }
      } catch (err) {
        setError(err.message);
      }
    };

    // Fetch HR every 10 seconds
    const interval = setInterval(fetchHeartRate, 10000);
    return () => clearInterval(interval);
  }, []);

  const calculateStress = (bpm) => {
    if (bpm < 60) {
      setStressLevel('Relaxed 😌');
    } else if (bpm >= 60 && bpm <= 100) {
      setStressLevel('Neutral 😐');
    } else {
      setStressLevel('High Stress 😰');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-[#020e1d]">
      <h1 className="text-4xl text-amber-100 font-bold mb-4">Heart Rate Data</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <p className="text-gray-300 text-xl">Heart Rate: {heartRate ?? 'Loading...'} bpm</p>
          <p className="text-xl mt-4">
            Stress Level: <span className={stressLevel.includes('High') ? 'text-red-500' : stressLevel.includes('Neutral') ? 'text-yellow-500' : 'text-green-500'}>{stressLevel}</span>
          </p>
        </>
      )}
    </div>
  );
};

export default HeartRate;

