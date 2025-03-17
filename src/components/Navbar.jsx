/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { IoPerson } from "react-icons/io5";

const Navbar = ({isAuth}) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 z-50 shadow-lg font-[SourGummy]">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <motion.div
          className="flex items-center text-2xl font-bold bg-clip-text text-transparent"
          style={{
            background: "linear-gradient(to right, #40E0D0, #FF8C00, #FF0080)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BrainCircuit size={32} className="inline-block text-white m-2" />
          MindMetrics
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              className={`cursor-pointer transition duration-300 ${
                location.pathname === item.path ? "text-orange-400" : ""
              } hover:text-orange-600`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={item.path}>{item.name}</Link>
            </motion.div>
          ))}

          {/* Profile Icon (Aligned Properly) */}
         {
          isAuth ?  (
          <div className="flex items-center">
              <Link to="/profile" className="flex items-center mr-2">
            <IoPerson size={24} className="text-white hover:text-orange-400 transition duration-300" />
          </Link>
          </div>
          ) : (<span></span>)
         }
          
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-gray-800 absolute w-full left-0 top-[60px] py-4 shadow-md"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                className="cursor-pointer hover:text-orange-400 transition duration-300"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
              >
                <Link to={item.path}>{item.name}</Link>
              </motion.li>
            ))}

            {/* Profile Icon in Mobile Menu */}
            <motion.li
              className="cursor-pointer hover:text-orange-400 transition duration-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => setIsOpen(false)}
            >
              <Link to="/profile" className="flex items-center space-x-2">
                <IoPerson size={24} className="text-white" />
                <span>Profile</span>
              </Link>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};
export default Navbar;

