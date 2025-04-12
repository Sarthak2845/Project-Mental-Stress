const yogaBenefits = [
  {
    title: "Improves Flexibility",
    description: "Regular yoga stretches your body and enhances mobility, reducing stiffness.",
    icon: "🧘‍♂️",
  },
  {
    title: "Reduces Stress & Anxiety",
    description: "Breathwork and meditation lower cortisol levels, helping you stay centered.",
    icon: "🌿",
  },
  {
    title: "Boosts Mental Clarity",
    description: "Yoga quiets the mind, increases focus, and promotes emotional stability.",
    icon: "🧠",
  },
  {
    title: "Enhances Sleep Quality",
    description: "A calm mind and relaxed body make it easier to fall into deep, restful sleep.",
    icon: "😴",
  },
];

export default function YogaTherapy() {
  return (
    <div className="relative min-h-screen text-black flex flex-col items-center text-center p-6 font-[SourGummy] overflow-hidden">
      
      {/* 🌸 Background Image */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')" }}
      ></div>
      {/* 🌼 Content */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-5xl font-bold mb-4">Yoga Therapy</h1>
        <p className="text-gray-800 mb-8">Breathe. Stretch. Heal. Yoga is a journey to the self, through the self.</p>

        {/* 🌈 Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {yogaBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#0b0a0a79] border border-[#ffaa00] p-6 rounded-xl shadow-md backdrop-blur-md"
            >
              <div className="text-4xl mb-2">{benefit.icon}</div>
              <h2 className="text-2xl font-semibold mb-2">{benefit.title}</h2>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* 🧘 Poses */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-4">Try These Simple Yoga Poses</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/yqeirBfn2j4?si=F5SFy5m7SJt9quy9" title="YouTube video player" frameBorder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen className="rounded-lg"></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/8TuRYV71Rgo?si=TA9MEUPneQPDsTr4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen className="rounded-lg"></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/tA8E4l8Dj34?si=l3s7-FyeAAK-0VTS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen className="rounded-lg"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
