"use client";

import { Search, Map, X, Heart } from "lucide-react";
import { useState } from "react";

function TrailCard({
  title,
  image,
  stops,
  desc,
  difficulty,
  saved,
  toggleSave,
  onClick,
}) {
  return (
    <div
      className="rounded-xl overflow-hidden border border-orange-200 dark:border-orange-700 
                 bg-white dark:bg-neutral-900 shadow-sm relative cursor-pointer"
      onClick={onClick}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleSave();
        }}
        className="absolute top-1 right-1 bg-black/40 rounded-full p-1 z-10"
      >
        <Heart
          className={`w-4 h-4 ${
            saved ? "fill-red-500 text-red-500" : "text-white"
          }`}
        />
      </button>

      <div className="h-48 relative">
        <img src={image} className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        <span className="absolute bottom-1 left-1 text-[10px] bg-orange-500 text-white px-2 py-0.5 rounded-full">
          {stops.length} Stops
        </span>

        <span className="absolute bottom-1 right-1 text-[10px] bg-black/40 text-white px-2 py-0.5 rounded-full">
          {difficulty}
        </span>
      </div>

      <div className="p-3">
        <p className="text-[12px] font-bold text-gray-900 dark:text-gray-100 leading-tight">
          {title}
        </p>
        <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
          {desc}
        </p>
      </div>
    </div>
  );
}

const TRAILS = [
  {
    title: "Best Chaat in Delhi",
    image: "https://images.unsplash.com/photo-1626082927389-6a7e6a2e5348?auto=format&fit=crop&w=600&q=60",
    desc: "A spicy, tangy adventure through Delhi’s finest chaat spots.",
    rating: 4.7,
    distance: "4.2 km",
    time: "45 mins",
    cost: "₹150–250",
    difficulty: "Easy",
    category: "Spicy",
    stops: ["Ashok Chaat", "Prince Chaat", "Bengali Sweet House", "Natraj Dahi Bhalle", "Bittoo Tikki"],
  },

  {
    title: "Mumbai Street Classics",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=60",
    desc: "Vada pav, pav bhaji & sev puri — Mumbai’s soul.",
    rating: 4.8,
    distance: "5.1 km",
    time: "1 hour",
    cost: "₹200–300",
    difficulty: "Moderate",
    category: "City",
    stops: ["Anand Stall", "Sardar Pav Bhaji", "Elco Pani Puri", "Juhu Frankie"],
  },

  {
    title: "Hyderabadi Spice Trail",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=60",
    desc: "Fiery biryani, kebabs & Irani chai circuit.",
    rating: 4.9,
    distance: "7.3 km",
    time: "1 hr 20 mins",
    cost: "₹250–400",
    difficulty: "Long Trail",
    category: "Spicy",
    stops: ["Paradise Biryani", "Shah Ghouse", "Alpha Hotel", "Nimrah Café"],
  },

  {
    title: "Indore Sweet Walk",
    image: "https://images.unsplash.com/photo-1603894584373-5ac6f8c80a29?auto=format&fit=crop&w=600&q=60",
    desc: "From jalebi to rabdi — Indore's sugary heaven.",
    rating: 4.6,
    distance: "3.5 km",
    time: "30 mins",
    cost: "₹120–180",
    difficulty: "Easy",
    category: "Dessert",
    stops: ["Joshi Dahi Vada", "Apna Sweets", "Chappan Dukan"],
  },

  {
    title: "South Indian Breakfast Tour",
    image: "https://images.unsplash.com/photo-1614775168123-1f49f683e4c2?auto=format&fit=crop&w=600&q=60",
    desc: "Idli, dosa & filter coffee across classic tiffin joints.",
    rating: 4.5,
    distance: "4.0 km",
    time: "50 mins",
    cost: "₹150–250",
    difficulty: "Easy",
    category: "Breakfast",
    stops: ["MTR", "A2B", "Vidyaranya", "Filter Coffee House"],
  },

  {
    title: "Kolkata Rolls & Tea Trail",
    image: "https://images.unsplash.com/photo-1601050690597-df8b7d08fbab?auto=format&fit=crop&w=600&q=60",
    desc: "Follow the famous rolls and chai addas around Kolkata.",
    rating: 4.7,
    distance: "6.4 km",
    time: "55 mins",
    cost: "₹180–260",
    difficulty: "Moderate",
    category: "Tea & Coffee",
    stops: ["Hot Kathi Roll", "Nizam’s", "Cha Bar", "Balwant Singh Dhaba"],
  },

  {
    title: "Amritsar Kulcha & Lassi Trail",
    image: "https://images.unsplash.com/photo-1626079906493-9cfb16ad7b3c?auto=format&fit=crop&w=600&q=60",
    desc: "Buttery kulchas paired with iconic Punjabi lassis.",
    rating: 4.8,
    distance: "5.5 km",
    time: "1 hour",
    cost: "₹200–300",
    difficulty: "Moderate",
    category: "Breakfast",
    stops: ["Bharawan Da Dhaba", "All India Famous", "Giani Lassi", "Kanha Sweets"],
  },

  {
    title: "Jaipur Rajasthani Flavours Walk",
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=600&q=60",
    desc: "Dal baati, pyaaz kachori & ghevar — royal treats.",
    rating: 4.6,
    distance: "6.1 km",
    time: "1 hr 10 mins",
    cost: "₹250–350",
    difficulty: "Long Trail",
    category: "City",
    stops: ["Rawat Kachori", "LMB", "Geharwala", "Thali Palace"],
  },

  {
    title: "Chennai Filter Coffee & Dosa Trail",
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=600&q=60",
    desc: "Strong filter coffee + crispy dosas = Chennai heaven.",
    rating: 4.7,
    distance: "4.8 km",
    time: "45 mins",
    cost: "₹160–240",
    difficulty: "Easy",
    category: "Tea & Coffee",
    stops: ["Sangeetha", "Saravana Bhavan", "Murugan Idli", "Mathsya"],
  },

  {
    title: "Ahmedabad Street Snacks Trail",
    image: "https://images.unsplash.com/photo-1603894584373-5ac6f8c80a29?auto=format&fit=crop&w=600&q=60",
    desc: "Sev puri, fafda, jalebi & khaman dhokla paradise.",
    rating: 4.5,
    distance: "5.9 km",
    time: "50 mins",
    cost: "₹140–220",
    difficulty: "Moderate",
    category: "Snacks",
    stops: ["Das Khaman", "Manek Chowk", "Shree Balaji", "Jalebi Junction"],
  },

  {
    title: "Pune Misal & Chai Circuit",
    image: "https://images.unsplash.com/photo-1543826173-70651703c5e9?auto=format&fit=crop&w=600&q=60",
    desc: "Hot misal pav paired with Pune’s cutting chai.",
    rating: 4.8,
    distance: "3.9 km",
    time: "40 mins",
    cost: "₹120–200",
    difficulty: "Easy",
    category: "Breakfast",
    stops: ["Katakir Misal", "Bedekar Misal", "Vaidya Chai", "Chitale"],
  },

  {
    title: "Bangalore Night Street Food Trail",
    image: "https://images.unsplash.com/photo-1605478415315-7306e52e05f4?auto=format&fit=crop&w=600&q=60",
    desc: "Late-night momos, shawarma & sandwiches across BLR.",
    rating: 4.7,
    distance: "7.9 km",
    time: "1 hr 15 mins",
    cost: "₹200–350",
    difficulty: "Long Trail",
    category: "Snacks",
    stops: ["VV Puram", "Empire", "Koshy’s", "Church Street Momos"],
  },

  {
    title: "Lucknow Kebab & Awadhi Trail",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=60",
    desc: "Royal Awadhi flavors: kebabs, biryanis & sheermal.",
    rating: 4.9,
    distance: "6.2 km",
    time: "1 hour",
    cost: "₹250–400",
    difficulty: "Moderate",
    category: "Spicy",
    stops: ["Tunday Kababi", "Idris Biryani", "Royal Café", "Wahid Biryani"],
  },

  {
    title: "Goa Beachside Seafood Walk",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=60",
    desc: "A refreshing trail through beachside seafood shacks.",
    rating: 4.8,
    distance: "8.0 km",
    time: "1 hr 20 mins",
    cost: "₹300–500",
    difficulty: "Long Trail",
    category: "City",
    stops: ["Fisherman's Wharf", "Martin’s Corner", "Baga Shack", "Tito’s"],
  },

  {
    title: "Varanasi Kachori & Dessert Run",
    image: "https://images.unsplash.com/photo-1707343843437-1675a8be10d1?auto=format&fit=crop&w=600&q=60",
    desc: "Early morning kachori-sabzi followed by rabdi & malaiyo.",
    rating: 4.6,
    distance: "3.6 km",
    time: "35 mins",
    cost: "₹120–200",
    difficulty: "Easy",
    category: "Dessert",
    stops: ["Kashi Chaat", "Blue Lassi", "Kachori Gully", "Deena Chat Bhandar"],
  },

  {
    title: "Surat Farsan & Sweet Trail",
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=600&q=60",
    desc: "Dhokla, fafda, locho & ghari — Surati favourites.",
    rating: 4.5,
    distance: "4.4 km",
    time: "50 mins",
    cost: "₹150–230",
    difficulty: "Moderate",
    category: "Snacks",
    stops: ["Gopal Locho", "Shreeji Farsan", "Sainath Sweets", "Ghari House"],
  },
];


const CATEGORIES = [
  "All",
  "Breakfast",
  "Spicy",
  "Dessert",
  "City",
  "Snacks",
  "Tea & Coffee",
];

export default function FoodTrailsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [savedTrails, setSavedTrails] = useState({});
  const [selected, setSelected] = useState(null);

  const toggleSaveTrail = (title) => {
    setSavedTrails((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const filtered = TRAILS.filter((t) => {
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || t.category === category;
    return matchSearch && matchCategory;
  });

  const recommended = TRAILS.filter((t) => t.rating >= 4.8).slice(0, 4);

  return (
    <div className="px-5 pb-28 bg-white dark:bg-black min-h-screen">

      <h2 className="text-2xl font-bold text-orange-600 dark:text-orange-400 mt-6 flex items-center gap-2">
        <Map className="w-6 h-6" />
        Food Trails
      </h2>
      <div className="mt-5 relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
        <input
          placeholder="Search food trails..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-full border border-orange-300 dark:border-orange-600
                     bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-100"
        />
      </div>

      <div className="mt-4 grid grid-cols-7 gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`py-2 rounded-full text-xs font-semibold border ${
              category === cat
                ? "bg-orange-500 text-white border-orange-500 dark:bg-orange-600"
                : "bg-orange-100 dark:bg-neutral-800 text-orange-700 dark:text-orange-400 border-orange-300 dark:border-orange-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      {recommended.length > 0 && (
        <>
          <h3 className="mt-8 text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <span className="w-1.5 h-5 rounded-full bg-green-500"></span>
            Recommended For You ⭐
          </h3>

          <div className="grid grid-cols-3 gap-3 mt-3">
            {recommended.map((t, i) => (
              <TrailCard
                key={i}
                {...t}
                saved={savedTrails[t.title]}
                toggleSave={() => toggleSaveTrail(t.title)}
                onClick={() => setSelected(t)}
              />
            ))}
          </div>
        </>
      )}

      <h3 className="mt-10 flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-100">
        <span className="w-1.5 h-5 rounded-full bg-orange-500"></span>
        All Trails
      </h3>

      <div className="grid grid-cols-3 gap-3 mt-4 pb-10">
        {filtered.map((t, i) => (
          <TrailCard
            key={i}
            {...t}
            saved={savedTrails[t.title]}
            toggleSave={() => toggleSaveTrail(t.title)}
            onClick={() => setSelected(t)}
          />
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-4">
          <div className="bg-white dark:bg-neutral-900 rounded-xl w-full max-w-sm p-4 border border-orange-400 dark:border-orange-700 shadow-lg relative">

            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 text-gray-700 dark:text-gray-300"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="h-40 rounded-lg overflow-hidden">
              <img src={selected.image} className="w-full h-full object-cover" />
            </div>

            <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400 mt-3">
              {selected.title}
            </h3>

            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
              {selected.desc}
            </p>

            <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
              <p>⭐ {selected.rating}</p>
              <p>📍 {selected.distance}</p>
              <p>🕒 {selected.time}</p>
              <p>💰 {selected.cost}</p>
              <p>⚡ {selected.difficulty}</p>
            </div>

            <h4 className="mt-4 font-semibold text-gray-900 dark:text-gray-100">
              Stops:
            </h4>
            <ul className="text-sm text-gray-700 dark:text-gray-300 mt-1 ml-3 list-disc">
              {selected.stops.map((stop, i) => (
                <li key={i}>{stop}</li>
              ))}
            </ul>

            <h4 className="mt-4 font-semibold text-gray-900 dark:text-gray-100">
              Trail Map:
            </h4>
            <div className="mt-2 h-28 rounded-lg overflow-hidden border border-orange-300 dark:border-orange-700">
              <iframe
                src="https://maps.google.com/maps?q=india&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
              ></iframe>
            </div>

            <button
              className="mt-5 w-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 
                         text-white py-2 rounded-full font-semibold text-sm"
            >
              Start Trail
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
