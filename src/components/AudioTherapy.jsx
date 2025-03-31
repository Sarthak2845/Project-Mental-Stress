import { useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa6";

const audioTracks = [
  { id: 1, title: "Relaxing Nature Sounds", src: "/audio/nature.mp3" },
  { id: 2, title: "Soft Piano Melody", src: "/audio/piano.mp3" },
  { id: 3, title: "Guided Meditation", src: "/audio/meditation.mp3" }
];

export default function AudioTherapy() {
  const [playingTrack, setPlayingTrack] = useState(null);

  const handlePlayPause = (id) => {
    const audio = document.getElementById(`audio-${id}`);

    if (playingTrack && playingTrack !== id) {
      // Pause the previously playing track
      document.getElementById(`audio-${playingTrack}`).pause();
    }

    if (audio.paused) {
      audio.play();
      setPlayingTrack(id);
    } else {
      audio.pause();
      setPlayingTrack(null);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center text-center p-6 font-[SourGummy]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://videos.pexels.com/video-files/25947958/11922774_2560_1440_60fps.mp4" type="video/mp4" />
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <h1 className="text-4xl font-extrabold mb-4">Audio Therapy</h1>
        <p className="text-gray-300 mb-6">Relax and rejuvenate with calming audio tracks.</p>

        <div className="flex flex-col gap-4">
          {audioTracks.map((track) => (
            <div key={track.id} className="p-4 w-72 bg-[#ffffff22] border-2 border-[#ffaa00] rounded-lg shadow-lg backdrop-blur-md flex flex-col items-center">
              <h2 className="text-xl font-bold mb-2">{track.title}</h2>
              <audio id={`audio-${track.id}`} src={track.src}></audio>
              <button 
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md flex items-center gap-2 hover:bg-blue-600 transition"
                onClick={() => handlePlayPause(track.id)}
              >
                {playingTrack === track.id ? <FaPause /> : <FaPlay />} {playingTrack === track.id ? "Pause" : "Play"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


