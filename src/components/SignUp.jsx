import { motion } from "framer-motion";
import { BrainCircuit} from "lucide-react";       
import { FaGoogle } from "react-icons/fa6";
const SignUp = () => {
  const handleGoogleSignIn = () => {
    window.location.href = "http://localhost:5000/auth/google"; // Backend OAuth route
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 flex-col">
              <motion.div
          className="text-6xl font-bold bg-clip-text text-transparent mb-8 font-[SourGummy]"
          style={{
            background: "linear-gradient(to right, #40E0D0, #FF8C00, #FF0080)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BrainCircuit size={62} className="inline-block text-white m-2 text-center" />
          MindMetrics
        </motion.div>
            <div className="bg-[#061a12] p-6 rounded-xl shadow-md w-96 text-center border-2 border-[#0fdb80] font-[SourGummy] ">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Sign Up</h2>
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full bg-[#180b0d] text-white py-2 rounded-md border-2 border-red-600 hover:border-red-400 transition duration-200"
        >
          <FaGoogle className="mr-2"/>
          <span></span>
           Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
