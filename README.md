# 🧠 MindMetrics
[![Netlify Status](https://api.netlify.com/api/v1/badges/884d6de3-7fda-42db-8ff2-f0885c5761a6/deploy-status)](https://app.netlify.com/sites/mindmetricss/deploys)
![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![Google Fit API](https://img.shields.io/badge/API-Google%20Fit-red?logo=google)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Status](https://img.shields.io/badge/Status-Under%20Development-orange)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?logo=github)
![Made with ❤️ in India](https://img.shields.io/badge/Made%20with%20%E2%9D%A4%EF%B8%8F-in%20India-orange?style=flat&logo=github)
![GitHub last commit](https://img.shields.io/github/last-commit/Sarthak2845/mindmetrics?style=flat&color=blue)
![GitHub stars](https://img.shields.io/github/stars/Sarthak2845/mindmetrics?style=flat&color=magenta)


**MindMetrics** is a smart and interactive web application that detects stress levels using both user-submitted questionnaire responses and heart rate variability (HRV) data fetched from the Google Fit API. Based on the analysis, it offers personalized solutions such as breathing exercises, music playlists, and mindfulness tips to help users manage and reduce stress effectively.

---

## 🚀 Features

- 📋 **Stress Questionnaire**  
  A simple form-based survey to help you self-reflect and assess your current stress level.

- ❤️ **Google Fit Integration**  
  Connect your smartwatch and fetch real-time HRV (Heart Rate Variability) data via the Google Fit API for accurate stress detection.

- 🤖 **Machine Learning Stress Detection**  *(Coming Soon)*  
  Combines physiological and psychological data to predict stress levels with smart ML models.

- 🌬️ **Breathing Exercises**  *(Coming Soon)*  
  Guided "Breathe In, Breathe Out" sessions with customizable durations (5, 10, 15 mins) to help you instantly relax.

- 🎧 **Music Therapy**  
  Dive into soothing nature sounds, calming instrumental music, and meditative audio to ease your mind.

- 📖 **Reading Therapy**  
  Short, comforting reads and positive affirmations curated to uplift your mood and bring mental clarity.

- 🧘‍♀️ **Yoga Therapy**  
  A collection of beginner-friendly yoga poses and stretches that help release physical tension and balance your energy.

- 📅 **Daily Logs & History** *(Coming Soon)*  
  Track your stress trends, therapy sessions, and improvements over time.


---

## 🧩 Tech Stack

| Tech | Description |
|------|-------------|
| **Frontend** | React.js, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **API Integration** | Google Fit API |
| **ML Model** | Python + scikit-learn / TensorFlow |
| **Data Visualization** | Chart.js / Recharts |
| **Authentication** | Google OAuth2 |

---

## 🧠 How It Works

1. User logs in using Google.
2. MindMetrics fetches HR data from the Google Fit API.
3. User fills out a stress questionnaire.
4. A machine learning model processes the data and determines the stress level.
5. Personalized suggestions are shown based on the result.

---

## 🛠️ Installation & Run Locally

```bash
git clone https://github.com/yourusername/mindmetrics.git
cd mindmetrics
npm install
npm run dev

