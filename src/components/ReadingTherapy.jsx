
const benefits = [
  {
    title: "Reduces Stress & Anxiety",
    description: "Reading can lower stress levels by 68%, helping you feel relaxed and calm.",
    image: "/images/stress-relief.jpg",
  },
  {
    title: "Enhances Focus & Memory",
    description: "Reading improves concentration, sharpens memory, and boosts cognitive functions.",
    image: "/images/focus.jpg",
  },
  {
    title: "Promotes Better Sleep",
    description: "A bedtime reading habit signals your brain to wind down, improving sleep quality.",
    image: "/images/sleep.jpg",
  },
  {
    title: "Expands Knowledge & Creativity",
    description: "Books open doors to new ideas, perspectives, and creative thinking.",
    image: "/images/creativity.jpg",
  },
];
const ReadingTherapy = () => {
    return (
        <>
  <div className="relative min-h-screen flex flex-col items-center text-center p-6 font-[SourGummy] mt-4 justify-center">

{/* Background Image */}
<img
    src="public\images\book.jpg"
    alt="Reading Therapy Background"
    className="absolute top-0 left-0 w-full h-full object-cover"
/>
<div className="relative z-10 ">
    <h1 className="text-4xl font-extrabold  shadow-lg mb-8 text-amber-600">Reading Therapy</h1>
    <div className="bg-orange-300 border-6 border-black p-4">
    <p className="text-black max-w-2xl ">
        Immerse yourself in the magic of words. Escape stress, explore new worlds, and find peace through stories.
    </p>
    <p className="text-black max-w-2xl">Reading has the power to transport you to different worlds, calm your mind, and reduce stress. Whether it’s a comforting novel, an inspiring self-help book, or poetry that soothes the soul, words can be a powerful remedy for a restless mind</p>
    </div>
</div>
</div>
  <div className="relative min-h-screen flex flex-col items-center text-center p-6 font-[SourGummy]  justify-center">

  </div>
        </>
    );
}

export default ReadingTherapy;
