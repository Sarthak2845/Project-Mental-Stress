import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ThreeDotsWave = () => {
  return (
    <div className="flex space-x-2 items-center justify-center mt-4">
      <span className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
      <span className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
      <span className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></span>
    </div>
  );
};

const CheckStress = () => {
  const [heartRate, setHeartRate] = useState(null);
  const [error, setError] = useState('');
  const [stressLevel, setStressLevel] = useState('');
  const [stressScore, setStressScore] = useState(0);
  const [loading, setLoading] = useState(true);

// Reusable fetch function
const fetchHeartRate = async () => {
  try {
    setLoading(true);
    const response = await fetch('https://mindmetrics-backend.vercel.app/api/heart-rate', {
      credentials: 'include',
    });

    if (!response.ok) throw new Error('Failed to fetch heart rate data');

    const data = await response.json();
    const points = data?.bucket?.[0]?.dataset?.[0]?.point?.[0]?.value;

    const bpmValues = points?.map(p => p.fpVal);
    const avgBpm = bpmValues && bpmValues.length > 0
      ? bpmValues.reduce((sum, val) => sum + val, 0) / bpmValues.length
      : null;

    if (avgBpm) {
      setHeartRate(avgBpm.toFixed(1));
      const { level, score } = predictStress(avgBpm);
      setStressLevel(level);
      setStressScore(score);
    } else {
      throw new Error('No valid heart rate values found');
    }
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};
  useEffect(() => {
    fetchHeartRate(); // initial fetch on mount

    const interval = setInterval(() => {
      fetchHeartRate();
    }, 15000); // fetch every 15 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const predictStress = (bpm) => {
    if (bpm < 60) return { level: 'Relaxed 🧘‍♂️', score: 25 };
    if (bpm <= 90) return { level: 'Moderate 😌', score: 60 };
    return { level: 'High Stress 😰', score: 90 };
  };

  const getColor = () => {
    if (stressScore > 80) return '#ef4444'; // red
    if (stressScore > 40) return '#facc15'; // yellow
    return '#10b981'; // green
  };

  const getQuote = () => {
    if (stressScore > 80) return 'Take a deep breath and step away for a moment. 🧘‍♀️';
    if (stressScore > 40) return 'Keep calm and carry on! 🌿';
    return 'You’re doing great, stay relaxed. ✨';
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center text-center px-6 font-[SourGummy]">
      <h1 className="text-4xl text-amber-100 font-bold mb-6">🧠 Real-Time Stress Detector</h1>
  
      {error && <p className="text-red-500">{error}</p>}
  
      {loading ? (
        <>
          <p className="text-gray-300 text-xl">Analyzing your vitals...</p>
          <ThreeDotsWave />
        </>
      ) : (
        <>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="w-40 h-40 mx-auto mb-6">
              <CircularProgressbar
                value={stressScore}
                text={`${stressScore}%`}
                styles={buildStyles({
                  textColor: '#fff',
                  pathColor: getColor(),
                  trailColor: '#374151',
                })}
              />
            </div>
            <p className="text-white text-lg mb-2">
              Heart Rate: <span className="font-semibold">{parseInt(heartRate)} bpm</span>
            </p>
            <p className="text-xl mb-4">
              Stress Level:{' '}
              <span className={
                stressLevel.includes('High') ? 'text-red-500'
                : stressLevel.includes('Moderate') ? 'text-yellow-400'
                : 'text-green-400'}>
                {stressLevel}
              </span>
            </p>
            <p className="italic text-sm text-gray-400">{getQuote()}</p>
          </div>
  
          {/* 🔄 Refresh Button */}
          <button
            onClick={fetchHeartRate}
            disabled={loading}
            className={`mt-6 px-6 py-2 rounded-md transition-colors font-medium ${
              loading
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-cyan-500 hover:bg-cyan-600'
            }`}
          >
            {loading ? 'Refreshing...' : '🔄 Refresh'}
          </button>
        </>
      )}
    </div>
  );
};

export default CheckStress;

