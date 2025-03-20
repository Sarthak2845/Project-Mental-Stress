import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";
import { FaGoogle } from "react-icons/fa6";

const SignUp = () => {
  const handleGoogleSignIn = () => {
    window.location.href = `${process.env.REACT_APP_BACKEND_URL}/auth/google`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 flex-col px-4">
      {/* Logo & Title */}
      <motion.div
        className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent mb-6 sm:mb-8 font-[SourGummy] text-center"
        style={{
          background: "linear-gradient(to right, #40E0D0, #FF8C00, #FF0080)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BrainCircuit size={50} className="inline-block text-white m-2" />
        MindMetrics
      </motion.div>

      {/* Sign Up Box */}
      <div className="bg-[#061a12] p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md text-center border-2 border-[#0fdb80] font-[SourGummy]">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-100 mb-4">Sign Up</h2>
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full bg-[#180b0d] text-white py-2 sm:py-3 rounded-md border-2 border-red-600 hover:border-red-400 hover:scale-105 transition duration-200 ease-in-out"
        >
          <FaGoogle className="mr-2 text-lg sm:text-xl" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
