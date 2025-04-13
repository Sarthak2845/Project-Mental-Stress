import { useEffect, useState } from 'react';
const ThreeDotsWave = () => {
  return (
    <div className="flex space-x-2 items-center justify-center mt-4">
      <span className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
      <span className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
      <span className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></span>
    </div>
  );
};

const HeartRate = () => {
  const [heartRate, setHeartRate] = useState(null);
  const [error, setError] = useState('');
  const [stressLevel, setStressLevel] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeartRate = async () => {
      try {
        const response = await fetch('https://mindmetrics-backend.vercel.app/api/heart-rate', {
          credentials: 'include',
        });

        if (!response.ok) throw new Error('Failed to fetch heart rate data');

        const data = await response.json();
        const bpm = data?.bucket?.[0]?.dataset?.[0]?.point?.[0]?.value?.[0]?.fpVal;

        if (bpm) {
          setHeartRate(bpm);
          const predicted = predictStress(bpm);
          setStressLevel(predicted);
        }

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchHeartRate();
    const interval = setInterval(fetchHeartRate, 10000);
    return () => clearInterval(interval);
  }, []);
  console.log(heartRate, stressLevel, error);

  // ✨ Simple ML-style prediction logic
  const predictStress = (bpm) => {
    if (bpm < 60) return 'Relaxed 🧘‍♂️';
    if (bpm <= 90) return 'Moderate 😌';
    return 'High Stress 😰';
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center text-center p-6 mt-16 font-[SourGummy]" >
      <h1 className="text-4xl text-amber-100 font-bold mb-4">🧠 Real-Time Stress Detector</h1>

      {error && <p className="text-red-500">{error}</p>}

      {loading ? (
        <>
          <p className="text-gray-400 text-xl">Analyzing your vitals...</p>
          <ThreeDotsWave />
        </>
      ) : (
        <>
          <p className="text-gray-300 text-xl">
            Heart Rate: <span className="font-semibold">{heartRate} bpm</span>
          </p>
          <p className="text-xl mt-4">
            Stress Level:{' '}
            <span
              className={
                stressLevel.includes('High')
                  ? 'text-red-500'
                  : stressLevel.includes('Moderate')
                  ? 'text-yellow-400'
                  : 'text-green-400'
              }
            >
              {stressLevel}
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default HeartRate;


