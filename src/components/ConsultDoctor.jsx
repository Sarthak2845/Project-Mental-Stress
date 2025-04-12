const ConsultDoctor = () => {
    return (
      <div
        className="min-h-screen bg-cover bg-center flex flex-col items-center text-black"
        style={{ backgroundImage: "url('https://img.freepik.com/free-vector/national-doctor-s-day-hand-drawn-background_23-2149438164.jpg?t=st=1744440772~exp=1744444372~hmac=49d61aa966782c3b05b72bdd52636dba6dc17f0e58d535d59bd73d0f0503f8e1&w=1380')" }} // Replace with your image
      >
  
        {/* Main content */}
        <div className="relative z-10 w-full max-w-5xl px-6 py-16 text-center font-[SourGummy]">
          <h1 className="text-4xl font-bold mb-4">Consult a Doctor</h1>
          <p className="text-lg text-gray-900 max-w-2xl mx-auto">
            Get expert advice, mental health support, or physical guidance — all in one place.
          </p>
         <a href="https://www.practo.com/search/doctors?results_type=doctor&q=%5B%7B%22word%22%3A%22psychologist%22%2C%22autocompleted%22%3Atrue%2C%22category%22%3A%22subspeciality%22%7D%5D&city=pune" target="_blank" rel="noopener noreferrer">
         <button className="mt-6 bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full font-semibold text-white cursor-pointer transition duration-300 ease-in-out shadow-lg">
            Consult Now
          </button>
         </a>
        </div>
  
        {/* Benefits Section */}
        <div className="relative z-10 w-full max-w-5xl px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "24x7 Availability", icon: "🕒" },
            { title: "Certified Experts", icon: "🎓" },
            { title: "Confidential Support", icon: "🔒" },
          ].map((benefit, i) => (
            <div key={i} className="bg-black/10 backdrop-blur-md p-6 rounded-xl text-center shadow-lg">
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            </div>
          ))}
        </div>

      </div>
    );
  };
  
  export default ConsultDoctor;
  