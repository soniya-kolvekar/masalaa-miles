"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import HighlightCard from "../components/HighlightCard";

function SmallHighlightCard({ title, image }) {
  return (
    <div className="bg-white dark:bg-neutral-900 border border-orange-200 dark:border-orange-700 rounded-lg overflow-hidden">
      <div className="aspect-square">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <p className="text-[9px] p-1 text-center font-semibold text-gray-800 dark:text-gray-200 leading-tight">
        {title}
      </p>
    </div>
  );
}

const MAIN_TRENDING = [
  {
    title: "Biryani – Hyderabad",
    image:
      "https://images.unsplash.com/photo-1631515243349-58603b6451df?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Pani Puri – Delhi",
    image:
      "https://images.unsplash.com/photo-1626082927389-6a7e6a2e5348?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Vada Pav – Mumbai",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Kathi Roll – Kolkata",
    image:
      "https://images.unsplash.com/photo-1601050690597-df8b7d08fbab?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Chole Bhature – Delhi",
    image:
      "https://images.unsplash.com/photo-1626082927389-6a7e6a2e5348?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Poha Jalebi – Indore",
    image:
      "https://images.unsplash.com/photo-1707343843437-1675a8be10d1?auto=format&fit=crop&w=600&q=60",
  },
];

const DESSERTS = [
  {
    title: "Gulab Jamun",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac6f8c80a29?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Rasmalai",
    image:
      "https://images.unsplash.com/photo-1622120609778-02aa5270b8d2?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Kulfi",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Jalebi",
    image:
      "https://images.unsplash.com/photo-1633525261787-d0f5fb50b62a?auto=format&fit=crop&w=600&q=60",
  },
];

const SPICY = [
  {
    title: "Andhra Chicken",
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Mirchi Bajji",
    image:
      "https://images.unsplash.com/photo-1605478415315-7306e52e05f4?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Spicy Momos",
    image:
      "https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Paneer Tikka",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=60",
  },
];

const SOUTH_INDIAN = [
  {
    title: "Masala Dosa",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Idli Sambar",
    image:
      "https://images.unsplash.com/photo-1614775168123-1f49f683e4c2?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Medu Vada",
    image:
      "https://images.unsplash.com/photo-1615485925609-487ba3deea7f?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Uttapam",
    image:
      "https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=600&q=60",
  },
];

const TRENDING_CITIES = [
  {
    city: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=60",
  },
  {
    city: "Delhi",
    image:
      "https://images.unsplash.com/photo-1583132889585-c2068f6f9b0c?auto=format&fit=crop&w=600&q=60",
  },
  {
    city: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1580674287550-dc03d78c219d?auto=format&fit=crop&w=600&q=60",
  },
  {
    city: "Kolkata",
    image:
      "https://images.unsplash.com/photo-1602833284120-9ba8f7980a1f?auto=format&fit=crop&w=600&q=60",
  },
  {
    city: "Pune",
    image:
      "https://images.unsplash.com/photo-1561971643-20e75f2cec8e?auto=format&fit=crop&w=600&q=60",
  },
];

export default function TrendingPage() {
  const [search, setSearch] = useState("");

  const filteredMain = MAIN_TRENDING.filter((i) =>
    i.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-5 pb-28 bg-white dark:bg-black min-h-screen">

      <h2 className="text-2xl font-bold text-orange-600 dark:text-orange-400 mt-6">
        Trending Dishes
      </h2>

      <div className="mt-5 relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search trending dishes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-full border border-orange-300 dark:border-orange-600 
                     bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-100"
        />
      </div>

      <h3 className="mt-10 flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-100">
        <span className="w-1.5 h-5 rounded-full bg-orange-500 dark:bg-orange-400"></span>
        <span className="text-lg tracking-wide">🔥 What’s Trending</span>
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 ml-1">
        Most popular dishes people are loving across India.
      </p>

      <div className="grid grid-cols-4 gap-2">
        {filteredMain.map((item, i) => (
          <HighlightCard key={i} {...item} />
        ))}
      </div>
      <h3 className="mt-10 flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-100">
        <span className="w-1.5 h-5 rounded-full bg-pink-500 dark:bg-pink-400"></span>
        <span className="text-lg tracking-wide">🍰 Wanna Have Some Dessert?</span>
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 ml-1">
        Sweet treats perfect for cravings, festivals, and celebrations.
      </p>

      <div className="grid grid-cols-4 gap-2">
        {DESSERTS.map((item, i) => (
          <SmallHighlightCard key={i} {...item} />
        ))}
      </div>

      <h3 className="mt-10 flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-100">
        <span className="w-1.5 h-5 rounded-full bg-red-500 dark:bg-red-400"></span>
        <span className="text-lg tracking-wide">🌶️ Spicy Treats for Today</span>
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 ml-1">
        Fiery dishes for spice lovers who enjoy bold flavors.
      </p>

      <div className="grid grid-cols-4 gap-2">
        {SPICY.map((item, i) => (
          <SmallHighlightCard key={i} {...item} />
        ))}
      </div>

      <h3 className="mt-10 flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-100">
        <span className="w-1.5 h-5 rounded-full bg-yellow-500 dark:bg-yellow-400"></span>
        <span className="text-lg tracking-wide">🍛 South Indian Delights</span>
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 ml-1">
        Light, healthy and flavorful South Indian favourites.
      </p>

      <div className="grid grid-cols-4 gap-2">
        {SOUTH_INDIAN.map((item, i) => (
          <SmallHighlightCard key={i} {...item} />
        ))}
      </div>

      <h3 className="mt-10 flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-100">
        <span className="w-1.5 h-5 rounded-full bg-blue-500 dark:bg-blue-400"></span>
        <span className="text-lg tracking-wide">🏙 Trending Cities</span>
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 ml-1">
        Explore top food cities across India.
      </p>

      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-5">
        {TRENDING_CITIES.map((city, i) => (
          <div key={i} className="min-w-[85px] flex flex-col items-center">
            <img
              src={city.image}
              className="w-16 h-16 rounded-full object-cover border-2 border-orange-500 dark:border-orange-400"
            />
            <p className="text-xs mt-2 text-gray-700 dark:text-gray-300 font-medium">
              {city.city}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
