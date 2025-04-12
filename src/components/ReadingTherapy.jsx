import { useState } from "react";
import { motion } from "framer-motion";

const quotes = {
  selfLove: {
    title: "Love Yourself",
    content: "You are enough, as you are. Let no mirror or voice say otherwise.",
    prompt: "What do you love most about yourself today?"
  },
  anxiety: {
    title: "Breathe Easy",
    content: "This moment is not forever. Let it pass like clouds across your sky.",
    prompt: "What is one thing you can control right now?"
  },
  motivation: {
    title: "Keep Going",
    content: "Even flowers bloom after days of darkness.",
    prompt: "What small step can you take today?"
  },
  heartbreak: {
    title: "Healing Heart",
    content: "Your heart may be cracked, but light still gets in.",
    prompt: "What part of your heart needs the most gentleness today?"
  }
};

const benefits = [
  {
    title: "Reduces Stress & Anxiety",
    description: "Reading can lower stress levels by 68%, helping you feel relaxed and calm.",
    image: "/images/stress-relief.jpg"
  },
  {
    title: "Improves Focus & Memory",
    description: "Books boost cognitive function, memory, and concentration.",
    image: "/images/focus.jpg"
  },
  {
    title: "Enhances Sleep",
    description: "Reading before bed signals the brain it's time to rest, improving sleep quality.",
    image: "/images/sleep.jpg"
  },
  {
    title: "Expands Knowledge & Creativity",
    description: "Books expose you to new ideas, fostering imagination and problem-solving.",
    image: "/images/creativity.jpg"
  }
];

const books = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "/images/the-alchemist.jpg"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    image: "/images/atomic-habits.jpg"
  },
  {
    title: "Ikigai",
    author: "Héctor García & Francesc Miralles",
    image: "/images/ikigai.jpg"
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    image: "/images/subtle-art.jpg"
  }
];

export default function ReadingTherapy() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (key) => {
    setSelectedCategory(quotes[key]);
  };

  return (
    <div className="relative min-h-screen text-white font-[SourGummy]">
      {/* Background Image */}
      <img
        src="/images/book.jpg"
        alt="Reading Therapy Background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
      />

      {/* Content Overlay */}
      <div className="relative z-10 p-6 max-w-5xl mx-auto">
        {/* Hero */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mt-10 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Reading Therapy 📖✨
        </motion.h1>

        <motion.p
          className="text-center text-lg text-gray-200 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Escape into stories, heal through words, and rediscover yourself—one page at a time.
        </motion.p>

        {/* Quotes / Emotional Cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Object.keys(quotes).map((key, i) => (
            <motion.button
              key={key}
              onClick={() => handleCategoryClick(key)}
              className="bg-[#ffffff1e] px-6 py-3 rounded-lg backdrop-blur-md hover:bg-orange-400 hover:text-black transition shadow-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {quotes[key].title}
            </motion.button>
          ))}
        </div>

        {selectedCategory && (
          <motion.div
            className="bg-[#ffffff1e] p-6 rounded-lg backdrop-blur-md max-w-xl mx-auto mb-16"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold mb-4">{selectedCategory.title}</h2>
            <p className="text-lg italic mb-6">“{selectedCategory.content}”</p>
            <p className="text-sm text-orange-300">{selectedCategory.prompt}</p>
          </motion.div>
        )}

        {/* Benefits Section */}
        <h2 className="text-3xl text-orange-300 font-bold mb-6 text-center">
          Why Reading Heals 🌿
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-[#00000081] bg-opacity-20 backdrop-blur-md p-4 rounded-xl shadow-lg flex justify-center items-center flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={benefit.image} alt={benefit.title} className="h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl text-orange-200 font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-100">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Book Recommendations */}
        <h2 className="text-3xl text-orange-300 font-bold mb-6 text-center">
          Books to Start Your Journey 📚
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {books.map((book, i) => (
            <motion.div
              key={i}
              className="bg-[#514f4f81] bg-opacity-20 backdrop-blur-md rounded-lg overflow-hidden shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <img src={book.image} alt={book.title} className="w-full h-60 object-cover" />
              <div className="p-4">
                <h4 className="text-lg text-white font-semibold">{book.title}</h4>
                <p className="text-sm text-orange-200">{book.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
