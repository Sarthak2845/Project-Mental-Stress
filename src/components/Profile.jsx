

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-[#020e1d]">
     <h1 className="text-4xl text-amber-100 font-bold mb-2">User Profile</h1>
     <img src="https://images.prismic.io/smi-blog/6c987520-81a6-4d03-acc3-2281bbb8b323_IMG_4795.jpg?auto=compress,format" alt="pfp"
     className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-blue-500"
     />
     <h2 className="text-2xl font-semibold text-gray-800">Sarthak</h2>
        <p className="text-gray-600">rsajnj</p>
        <p className="text-gray-500 text-sm">Steps Today: 1000</p>
        <p className="text-gray-500 text-sm">Heart Rate: 234 bpm</p>

    </div>
  );
};

export default Profile;
