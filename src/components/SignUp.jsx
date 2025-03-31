import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";       
import { FaGoogle } from "react-icons/fa6";

const SignUp = () => {
  const handleGoogleSignIn = () => {
    window.location.href = "https://mindmetrics-backend.vercel.app/auth/google";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 flex-col px-4">
      <motion.div
        className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent mb-6 sm:mb-8 font-[SourGummy] text-center"
        style={{
          background: "linear-gradient(to right, #40E0D0, #FF8C00, #FF0080)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BrainCircuit size={48} className="inline-block text-white m-2 text-center sm:size-30" />
        MindMetrics
      </motion.div>

      <div className="bg-[#061a12] p-5 sm:p-6 rounded-xl shadow-md w-full max-w-sm text-center border-2 border-[#0fdb80] font-[SourGummy] flex flex-col">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-100 mb-4">Sign Up</h2>
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full bg-[#180b0d] text-white py-2 rounded-md border-2 border-red-600 hover:border-red-400 transition duration-200"
        >
          <FaGoogle className="mr-2" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
