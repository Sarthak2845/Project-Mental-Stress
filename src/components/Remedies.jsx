import { FaBookOpenReader, FaMusic, FaSpa, FaUserDoctor } from "react-icons/fa6"
import { Link } from "react-router-dom";
const therapies = [
    { id: 1, icon: <FaMusic className="text-5xl text-yellow-400" />, title: "Audio Therapy", desc: "Relax with soothing melodies to unwind your mind. Soft instrumental music or nature sounds can help you feel at ease.",nav:"/audio" },
    { id: 2, icon: <FaBookOpenReader className="text-5xl text-blue-400" />, title: "Reading Therapy", desc: "Lose yourself in a book. Reading uplifting stories, self-help guides, or even poetry can provide comfort and a fresh perspective.",nav:"read" },
    { id: 3, icon: <FaSpa className="text-5xl text-green-400" />, title: "Yoga Therapy", desc: "Move, breathe, and let go. Practicing yoga can help reduce stress, improve focus, and enhance overall well-being.",nav:"yoga" },
    { id: 4, icon: <FaUserDoctor className="text-5xl text-red-400" />, title: "Consult a Doctor", desc: "If stress is overwhelming and persistent, seeking professional help is the best step. A doctor or therapist can provide tailored guidance to support your mental health.",nav:"doctor" },
  ];
  
  

const Remedies = () => {
  return (
    <div className="min-h-screen text-white flex flex-col items-center text-center p-6 mt-16 font-[SourGummy]"> 
    <h1 className="text-4xl font-extrabold mb-4">Find Your Calm</h1>
    <p className="text-gray-300">Therapy-Based Remedies for Stress</p>
    
    <div className="flex flex-wrap justify-center mt-8 gap-6">
        {therapies.map((therapy) => (
            <div key={therapy.id} className="p-6 w-72 bg-[#8f671779] border-2 border-[#ffaa00] rounded-lg shadow-lg flex flex-col items-center">
                <div className="mb-2">{therapy.icon}</div>
                <h2 className="text-2xl font-bold mb-2">{therapy.title}</h2>
                <p className="text-gray-300">{therapy.desc}</p>
                <Link to={therapy.nav} >
                <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:cursor-pointer hover:bg-green-600">Explore</button>
                </Link>
            </div>
        ))}
    </div>
</div>
  )
}

export default Remedies
