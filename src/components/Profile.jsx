import { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user-info', { withCredentials: true });
        setUser(response.data);
      } catch (err) {
        setError('Failed to fetch user information. Please try again.');
      }
    };

    fetchUserInfo();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!user) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-[#020e1d]">
      <h1 className="text-4xl text-amber-100 font-bold mb-2">User Profile</h1>
      <img src={user.picture} alt="Profile" className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-blue-500" />
      <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
    </div>
  );
};

export default Profile;
