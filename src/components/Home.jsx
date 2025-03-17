import { Link } from "react-router-dom";
import Footsteps from "./Footsteps";
const Home = () => {
    return (
      <div className="min-h-screen text-white flex flex-col items-center text-center p-6 mt-16 font-[SourGummy]">
        {/* Hero Section */}
        <div className="w-full bg-gradient-to-r from-amber-500 to-pink-500 py-16 px-6 rounded-bl-4xl shadow-lg">
          <h1 className="text-4xl font-extrabold text-white">Measure Your Stress, Manage Your Well-Being</h1>
          <p className="mt-4 text-lg">Take a scientifically-backed stress test and receive personalized insights to help you manage stress effectively.</p>
        </div>
        
        {/* CTA Button */}
        <Link to="/instructions" >
        <button className="mt-8 bg-gradient-to-r from-amber-500 to-pink-500 px-6 py-3 rounded shadow-lg hover:from-amber-600 hover:to-pink-600">Take the test</button>
        </Link>
        
        {/* How It Works Section */}
        <section className="mt-12 max-w-3xl text-gray-300">
          <h2 className="text-2xl font-semibold">How It Works</h2>
          <p className="mt-3">Understanding your stress levels can help you take control of your mental health. Here’s how the test works:</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-[#061a12] rounded-lg shadow-md border-2 border-[#0fdb80]">
              <h3 className="font-bold text-lg">📝 Answer 10 Questions</h3>
              <p className="text-sm mt-2">Quickly respond to simple questions about your stress levels in the past month.</p>
            </div>
            <div className="p-4 bg-[#061a12] rounded-lg shadow-md border-2 border-[#0fdb80]">
              <h3 className="font-bold text-lg">📊 Get Your Score</h3>
              <p className="text-sm mt-2">Your answers will generate a stress score from 0-40, categorized as low, moderate, or high stress.</p>
            </div>
            <div className="p-4 bg-[#061a12] rounded-lg shadow-md border-2 border-[#0fdb80]">
              <h3 className="font-bold text-lg">💡 Receive Guidance</h3>
              <p className="text-sm mt-2">Based on your score, get expert-backed tips on how to manage and reduce stress effectively.</p>
            </div>
          </div>
        </section>
  
        {/* Google Fit API Section */}
        <section className="mt-12 max-w-3xl text-gray-300">
          <h2 className="text-2xl font-semibold">📡 Integrating Google Fit API</h2>
          <p className="mt-3">
            To enhance stress measurement accuracy, we use the 
            <span className="text-blue-400"> Google Fit API</span> to fetch your heart rate variability (HRV) data from a smartwatch. 
            HRV is a strong indicator of stress levels.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-[#020e1d] rounded-lg shadow-md border-2 border-[#0f6bdb]">
              <h3 className="font-bold text-lg">📥 Fetch Heart Rate Data</h3>
              <p className="text-sm mt-2">Securely connect to Google Fit to fetch real-time heart rate data for better stress assessment.</p>
            </div>
            <div className="p-4 bg-[#020e1d] rounded-lg shadow-md border-2 border-[#0f6bdb]">
              <h3 className="font-bold text-lg">📉 Analyze HRV</h3>
              <p className="text-sm mt-2">Higher HRV generally indicates lower stress, while lower HRV suggests higher stress levels.</p>
            </div>
            <Footsteps/>
          </div>
        </section>
      </div>
    );
  };
  
  export default Home;
  