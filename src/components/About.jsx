import React from 'react'
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center mt-24 text-white'>
      <h1 className="text-4xl text-cyan-500 text-center font-bold">About MindMetrics</h1>
      <p className="mt-4 text-lg max-w-3xl">
        Stress is an inevitable part of life, but managing it effectively can lead to a healthier and happier life. The
        <span className="text-amber-400"> Perceived Stress App </span>
        is designed to help individuals assess their stress levels using the scientifically-backed Perceived Stress Scale (PSS).
      </p>
      <section className="mt-12 max-w-3xl text-gray-300">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        <p className="mt-3">Understanding your stress levels can help you take control of your mental health. Here’s how the test works:</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "📝 Answer 10 Questions", text: "Quickly respond to simple questions about your stress levels in the past month." },
            { title: "📊 Get Your Score", text: "Your answers will generate a stress score from 0-40, categorized as low, moderate, or high stress." },
            { title: "💡 Get Solutions", text: "Based on your score, get solutions tips on how to manage and reduce stress effectively." },
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="p-4 bg-[#061a12] rounded-lg shadow-md border-2 border-[#0fdb80]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm mt-2">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="mt-12 max-w-3xl text-gray-300 ">
        <h2 className="text-2xl font-semibold">📡 Integrating Google Fit API</h2>
        <p className="mt-3">To enhance stress measurement accuracy, we use the <span className="text-blue-400">Google Fit API</span> to fetch your heart rate variability (HRV) data from a smartwatch. HRV is a strong indicator of stress levels.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "📥 Fetch Heart Rate Data", text: "Securely connect to Google Fit to fetch real-time heart rate data for better stress assessment." },
            { title: "📉 Analyze HRV", text: "Higher HRV generally indicates lower stress, while lower HRV suggests higher stress levels." },
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="p-4 bg-[#020e1d] rounded-lg shadow-md border-2 border-[#0f6bdb]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm mt-2">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="mt-12 max-w-3xl text-gray-300 p-6">
        <h2 className="text-2xl font-semibold">🚀 Our Mission</h2>
        <p className="mt-3">Our goal is to empower individuals by providing <span className="text-green-400">data-driven stress analysis</span> and <span className="text-green-400">personalized coping strategies</span>. By integrating psychological assessments with biometric tracking, we aim to help users take control of their mental well-being in a more holistic way.</p>
      </section>
    </div>
    
  )
}

export default About
