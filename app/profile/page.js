"use client";

import { User, Mail, Phone, MapPin, Edit, Star, Camera } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [userData, setUserData] = useState({
    name: "Soniya Kolvekar",
    email: "soniya@example.com",
    phone: "+91 9876543210",
    city: "Mangalore",
    bio: "",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    level: 3,
    xp: 180,
    nextLevelXp: 300,
  });

  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("masalamiles_user");
    if (saved) setUserData(JSON.parse(saved));
  }, []);

  const savedVendors = [
    { name: "Anand Vada Pav", img: "https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=600&q=60" },
    { name: "Blue Lassi Shop", img: "https://images.unsplash.com/photo-1707343843437-1675a8be10d1?auto=format&fit=crop&w=600&q=60" },
    { name: "Nizam’s Rolls", img: "https://images.unsplash.com/photo-1601050690597-df8b7d08fbab?auto=format&fit=crop&w=600&q=60" },
  ];

  const userReviews = [
    {
      title: "Sardar Pav Bhaji",
      rating: 5,
      text: "Amazing taste! Rich, buttery and perfect spice.",
      img: "https://images.unsplash.com/photo-1626082927389-6a7e6a2e5348?auto=format&fit=crop&w=600&q=60",
    },
    {
      title: "Joshi Dahi Vada",
      rating: 4,
      text: "Soft, flavorful, perfect sweetness.",
      img: "https://images.unsplash.com/photo-1603894584373-5ac6f8c80a29?auto=format&fit=crop&w=600&q=60",
    },
  ];

  const progress = (userData.xp / userData.nextLevelXp) * 100;

  return (
    <div className="px-5 pb-28 bg-white dark:bg-black min-h-screen">

      <div className="flex flex-col items-center mt-10">
        <div className="relative">
          <img
            src={userData.profilePic}
            className="w-24 h-24 rounded-full border-4 border-orange-400 shadow object-cover"
          />

          <button className="absolute bottom-0 right-0 bg-orange-500 text-white p-1 rounded-full">
            <Camera size={14} />
          </button>
        </div>

        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-3">
          {userData.name}
        </h2>

        <div className="mt-3 w-full max-w-xs text-center">
          <p className="text-sm font-semibold text-orange-500">
            Level {userData.level} — Food Explorer
          </p>

          <div className="w-full bg-orange-200 dark:bg-neutral-800 h-2 rounded-full mt-1">
            <div
              className="bg-orange-500 h-full rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
            {userData.xp} / {userData.nextLevelXp} XP
          </p>
        </div>

        <Link
          href="/profile/edit"
          className="mt-3 flex items-center gap-1 text-sm bg-orange-500 text-white px-4 py-1.5 rounded-full hover:bg-orange-600"
        >
          <Edit size={16} /> Edit Profile
        </Link>
      </div>

      <div className="mt-8 p-4 rounded-xl bg-orange-50 dark:bg-neutral-900 border border-orange-200 dark:border-orange-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          Personal Information
        </h3>

        <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">

          <div className="flex items-center gap-2">
            <User size={18} className="text-orange-500" />
            <span>{userData.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={18} className="text-orange-500" />
            <span>{userData.email}</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone size={18} className="text-orange-500" />
            <span>{userData.phone}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-orange-500" />
            <span>{userData.city}</span>
          </div>

          {userData.bio && (
            <p className="text-xs mt-2 text-gray-600 dark:text-gray-400 italic">
              "{userData.bio}"
            </p>
          )}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Write a Review
        </h3>

        <div className="flex items-center gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((n) => (
            <Star
              key={n}
              size={22}
              onClick={() => setRating(n)}
              className={`cursor-pointer ${
                rating >= n ? "fill-orange-500 text-orange-500" : "text-gray-300 dark:text-gray-600"
              }`}
            />
          ))}
        </div>

        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Share your experience..."
          className="w-full p-3 rounded-lg border border-orange-200 dark:border-orange-700 
                     bg-orange-50 dark:bg-neutral-900 text-gray-900 dark:text-gray-100"
          rows="4"
        />

        <button className="flex items-center gap-2 mt-3 bg-orange-100 dark:bg-neutral-800 
                           border border-orange-300 dark:border-orange-600 text-orange-700 
                           dark:text-orange-400 px-4 py-2 rounded-full text-sm">
          <Camera size={16} /> Upload Image
        </button>

        <button className="w-full mt-4 bg-orange-500 text-white px-4 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
          Submit Review
        </button>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          Your Reviews
        </h3>

        <div className="space-y-4">
          {userReviews.map((rev, i) => (
            <div
              key={i}
              className="p-3 border border-orange-200 dark:border-orange-700 rounded-xl bg-white dark:bg-neutral-900"
            >
              <div className="flex gap-3">
                <img src={rev.img} className="w-20 h-20 rounded-lg object-cover" />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">{rev.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">⭐ {rev.rating}</p>
                  <p className="text-xs mt-1 text-gray-700 dark:text-gray-300">{rev.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          Saved Vendors
        </h3>

        <div className="grid grid-cols-3 gap-3">
          {savedVendors.map((v, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-orange-200 dark:border-orange-700 bg-white dark:bg-neutral-900">
              <img src={v.img} className="h-24 w-full object-cover" />
              <p className="text-[11px] p-2 font-semibold text-gray-800 dark:text-gray-200">{v.name}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
