import { useEffect, useState } from 'react';
import { RefreshCcw } from 'lucide-react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import 'react-circular-progressbar/dist/styles.css';

// Register Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  TimeScale
);

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
  const [lastUpdated, setLastUpdated] = useState(null);
  const [error, setError] = useState('');
  const [stressLevel, setStressLevel] = useState('');
  const [stressScore, setStressScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [heartRateHistory, setHeartRateHistory] = useState([]);

  const fetchHeartRate = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch('https://mindmetrics-backend.vercel.app/api/heart-rate', {
        credentials: 'include',
      });

      if (!response.ok) throw new Error('Failed to fetch heart rate data');

      const data = await response.json();
      const heartRates = data?.heartRates;

      if (!Array.isArray(heartRates) || heartRates.length === 0) {
        throw new Error('No heart rate data found');
      }

      setHeartRateHistory(heartRates);

      // Get the most recent reading
      const mostRecent = heartRates.reduce((latest, entry) =>
        entry.time > latest.time ? entry : latest
      );

      const bpm = mostRecent?.bpm;

      if (typeof bpm === 'number') {
        setHeartRate(bpm);
        setLastUpdated(mostRecent.time);
        const { level, score } = predictStress(bpm);
        setStressLevel(level);
        setStressScore(score);
      } else {
        throw new Error('Invalid BPM value in latest data');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatTimeAgo = (timestamp) => {
    const now = Date.now();
    const diff = now - timestamp;

    if (diff < 60_000) return 'Just now';
    if (diff < 60 * 60_000) return `${Math.floor(diff / 60_000)} min ago`;

    const date = new Date(timestamp);
    const isToday = new Date().toDateString() === date.toDateString();

    return isToday
      ? `Today at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
      : `${date.toLocaleDateString()} at ${date.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}`;
  };

  const predictStress = (bpm) => {
    if (bpm < 60) return { level: 'Relaxed 🧘‍♂️', score: 25 };
    if (bpm <= 90) return { level: 'Moderate 😌', score: 60 };
    return { level: 'High Stress 😰', score: 90 };
  };

  const getColor = () => {
    if (stressScore > 80) return '#ef4444';
    if (stressScore > 40) return '#facc15';
    return '#10b981';
  };

  const getQuote = () => {
    if (stressScore > 80) return 'Take a deep breath and step away for a moment. 🧘‍♀️';
    if (stressScore > 40) return 'Keep calm and carry on! 🌿';
    return 'You’re doing great, stay relaxed. ✨';
  };

  const getChartData = () => {
    return {
      labels: heartRateHistory.map((entry) => new Date(entry.time)),
      datasets: [
        {
          label: 'Heart Rate (bpm)',
          data: heartRateHistory.map((entry) => entry.bpm),
          fill: false,
          borderColor: '#38bdf8',
          backgroundColor: '#38bdf8',
          tension: 0.4,
          pointRadius: 4,
          pointHoverRadius: 6,
        },
      ],
    };
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#fff',
        },
      },
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'minute',
        },
        ticks: {
          color: '#ccc',
        },
      },
      y: {
        title: {
          display: true,
          text: 'BPM',
          color: '#ccc',
        },
        ticks: {
          color: '#ccc',
        },
        beginAtZero: false,
      },
    },
  };

  useEffect(() => {
    fetchHeartRate();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center text-center px-6 font-[SourGummy] mt-12">
      <h1 className="text-4xl text-amber-100 font-bold mb-6">🧠 Real-Time Stress Detector</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {loading && !heartRate ? (
        <>
          <p className="text-gray-300 text-xl">Analyzing your vitals...</p>
          <ThreeDotsWave />
        </>
      ) : (
        <>
          {heartRate && (
            <div className="bg-[#28041a] p-6 rounded-lg shadow-lg w-full max-w-md border-4 border-pink-600">
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
                Heart Rate: <span className="font-semibold">{heartRate} bpm</span>
              </p>
              <p className="text-xl mb-1">
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
              {lastUpdated && (
                <p className="text-xs text-gray-400 mt-1">
                  Last updated: {formatTimeAgo(lastUpdated)}
                </p>
              )}
              <p className="italic text-sm text-gray-400 mt-2">{getQuote()}</p>
            </div>
          )}

          {/* 📈 Chart */}
          {heartRateHistory.length > 0 && (
            <div className="mt-8 bg-[#1f2937] p-4 rounded-lg w-full max-w-2xl shadow-md border border-gray-700">
              <h2 className="text-white text-xl mb-4">📊 Heart Rate Trend</h2>
              <Line data={getChartData()} options={chartOptions} />
            </div>
          )}

          {/* 🔄 Refresh Button */}
          <button
            onClick={fetchHeartRate}
            disabled={loading}
            className={`mt-6 px-6 py-2 rounded-md transition-colors font-medium flex items-center justify-center gap-2 ${
              loading
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-[#021d08] border-green-500 border-4 hover:bg-[#021d08] hover:border-green-400'
            }`}
          >
            {loading ? (
              <>
                <RefreshCcw className="animate-spin" />
                Refreshing...
              </>
            ) : (
              <>
                <RefreshCcw />
                Refresh
              </>
            )}
          </button>
        </>
      )}
    </div>
  );
};

export default CheckStress;


