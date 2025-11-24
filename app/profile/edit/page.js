"use client";

import { Camera, Save } from "lucide-react";
import { useEffect, useState } from "react";

export default function EditProfile() {
  const [userData, setUserData] = useState({
    name: "Name",
    email: "Email",
    phone: "Number",
    city: "City",
    bio: "Bio",
    profilePic: "Pic URL",
  });

  useEffect(() => {
    const saved = localStorage.getItem("masalamiles_user");
    if (saved) setUserData(JSON.parse(saved));
  }, []);

  const handleSave = () => {
    localStorage.setItem("masalamiles_user", JSON.stringify(userData));
    alert("Profile updated!");
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-white dark:bg-black px-4 py-6">

      <div className="w-full max-w-sm bg-orange-50 dark:bg-neutral-900 p-5 rounded-xl border border-orange-300 dark:border-orange-700">

        <h2 className="text-xl font-bold text-orange-600 dark:text-orange-400 mb-5">
          Edit Profile
        </h2>

        <div className="flex justify-center mb-6">
          <div className="relative">
            <img
              src={userData.profilePic}
              className="w-28 h-28 rounded-full border-4 border-orange-500 object-cover"
            />
            <button className="absolute bottom-0 right-0 bg-orange-500 text-white p-2 rounded-full">
              <Camera size={16} />
            </button>
          </div>
        </div>

        <div className="space-y-4">

          <input
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            className="w-full p-3 rounded-lg border border-orange-300 dark:border-orange-700 bg-white dark:bg-neutral-800"
            placeholder="Full Name"
          />

          <input
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            className="w-full p-3 rounded-lg border border-orange-300 dark:border-orange-700 bg-white dark:bg-neutral-800"
            placeholder="Email"
          />

          <input
            value={userData.phone}
            onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
            className="w-full p-3 rounded-lg border border-orange-300 dark:border-orange-700 bg-white dark:bg-neutral-800"
            placeholder="Phone"
          />

          <input
            value={userData.city}
            onChange={(e) => setUserData({ ...userData, city: e.target.value })}
            className="w-full p-3 rounded-lg border border-orange-300 dark:border-orange-700 bg-white dark:bg-neutral-800"
            placeholder="City"
          />

          <textarea
            value={userData.bio}
            onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
            className="w-full p-3 rounded-lg border border-orange-300 dark:border-orange-700 bg-white dark:bg-neutral-800"
            placeholder="Short Bio"
            rows="3"
          />
        </div>

        <button
          onClick={handleSave}
          className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full flex items-center justify-center gap-2 font-semibold"
        >
          <Save size={18} /> Save Changes
        </button>

      </div>
    </div>
  );
}
