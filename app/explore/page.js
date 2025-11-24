"use client";

import { useState, useEffect } from "react";
import { Search, List, Map } from "lucide-react";
import VendorCard from "../components/VendorCard";

const VENDORS = [
  { id: 1, name: "Mohan Chaat", dish: "Pani Puri", type: "Chaat", city: "Delhi", rating: 4.8, image: "https://images.unsplash.com/photo-1626082927389-6a7e6a2e5348?auto=format&fit=crop&w=600&q=60" },
  { id: 2, name: "Anna Pav Bhaji", dish: "Pav Bhaji", type: "Snacks", city: "Mumbai", rating: 4.7, image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=600&q=60" },
  { id: 3, name: "Indore Snacks", dish: "Poha Jalebi", type: "Breakfast", city: "Indore", rating: 4.6, image: "https://images.unsplash.com/photo-1707343843437-1675a8be10d1?auto=format&fit=crop&w=600&q=60" },
  { id: 4, name: "Chole Hub", dish: "Chole Bhature", type: "North Indian", city: "Delhi", rating: 4.5, image: "https://images.unsplash.com/photo-1626082927389-6a7e6a2e5348?auto=format&fit=crop&w=600&q=60" },
  { id: 5, name: "Street Wraps", dish: "Kathi Roll", type: "Rolls", city: "Kolkata", rating: 4.4, image: "https://images.unsplash.com/photo-1601050690597-df8b7d08fbab?auto=format&fit=crop&w=600&q=60" },
  { id: 6, name: "Tandoori King", dish: "Chicken Kebab", type: "Non-Veg", city: "Lucknow", rating: 4.9, image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=60" },
  { id: 7, name: "Chatpata Corner", dish: "Bhel Puri", type: "Chaat", city: "Mumbai", rating: 4.3, image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=60" },
  { id: 8, name: "Gujju Snacks", dish: "Dhokla", type: "Snacks", city: "Ahmedabad", rating: 4.2, image: "https://images.unsplash.com/photo-1601050690597-df8b7d08fbab?auto=format&fit=crop&w=600&q=60" },
  { id: 9, name: "Namma Idli House", dish: "Idli Sambar", type: "Breakfast", city: "Bangalore", rating: 4.7, image: "https://images.unsplash.com/photo-1614775168123-1f49f683e4c2?auto=format&fit=crop&w=600&q=60" },
  { id: 10, name: "Hyderabadi Flames", dish: "Chicken Biryani", type: "Non-Veg", city: "Hyderabad", rating: 4.9, image: "https://images.unsplash.com/photo-1631515243349-58603b6451df?auto=format&fit=crop&w=600&q=60" },
  { id: 11, name: "Punjab Da Adda", dish: "Kulcha", type: "North Indian", city: "Amritsar", rating: 4.8, image: "https://images.unsplash.com/photo-1626079906493-9cfb16ad7b3c?auto=format&fit=crop&w=600&q=60" },
  { id: 12, name: "Mysore Cafe", dish: "Masala Dosa", type: "Breakfast", city: "Mysore", rating: 4.6, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=60" },
  { id: 13, name: "Rajasthan Delights", dish: "Kachori", type: "Snacks", city: "Jaipur", rating: 4.4, image: "https://images.unsplash.com/photo-1668236545400-a03238abb503?auto=format&fit=crop&w=600&q=60" },
  { id: 14, name: "Delhi Grillz", dish: "Tandoori Chicken", type: "Non-Veg", city: "Delhi", rating: 4.8, image: "https://images.unsplash.com/photo-1604908812651-83b15b8f5f84?auto=format&fit=crop&w=600&q=60" },
  { id: 15, name: "Bombay Sandwich Co.", dish: "Bombay Sandwich", type: "Snacks", city: "Mumbai", rating: 4.5, image: "https://images.unsplash.com/photo-1605478415315-7306e52e05f4?auto=format&fit=crop&w=600&q=60" },
  { id: 16, name: "Chennai Hot Plate", dish: "Medu Vada", type: "Breakfast", city: "Chennai", rating: 4.2, image: "https://images.unsplash.com/photo-1615485925609-487ba3deea7f?auto=format&fit=crop&w=600&q=60" },
];


export default function ExplorePage() {
  const [view, setView] = useState("list");
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [search, setSearch] = useState("");
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("savedVendors") || "[]");
    setSaved(savedData);
  }, []);

  const toggleSave = (id) => {
    let updated = saved.includes(id)
      ? saved.filter((x) => x !== id)
      : [...saved, id];

    setSaved(updated);
    localStorage.setItem("savedVendors", JSON.stringify(updated));
  };

  let filtered = filter === "All" ? VENDORS : VENDORS.filter((v) => v.type === filter);

  if (sortBy === "ratingHigh") filtered.sort((a, b) => b.rating - a.rating);
  if (sortBy === "ratingLow") filtered.sort((a, b) => a.rating - b.rating);

  const finalList = filtered.filter(
    (v) =>
      v.name.toLowerCase().includes(search.toLowerCase()) ||
      v.dish.toLowerCase().includes(search.toLowerCase()) ||
      v.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-5 pb-24 bg-white dark:bg-black min-h-screen">

      <h2 className="text-2xl font-bold text-orange-600 dark:text-orange-400 mt-6">
        Explore Vendors
      </h2>

      <div className="w-full mt-5">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search vendors..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full border border-orange-300 
                       dark:border-orange-600 bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-100"
          />
        </div>
      </div>

      <div className="mt-4 flex items-start gap-3">

        <div className="flex-1">
          <div className="grid grid-cols-8 gap-2">

            {["All", "Chaat", "Snacks", "Breakfast", "North Indian", "Rolls", "Non-Veg"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`w-full py-2 rounded-full text-xs font-medium border
                  ${
                    filter === cat
                      ? "bg-orange-500 text-white border-orange-500 dark:bg-orange-600"
                      : "bg-orange-100 dark:bg-neutral-800 text-orange-700 dark:text-orange-400 border-orange-300 dark:border-orange-600"
                  }`}
              >
                {cat}
              </button>
            ))}

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full py-2 rounded-full text-xs text-center font-medium border bg-orange-100 dark:bg-neutral-800 
                         text-orange-700 dark:text-orange-400 border-orange-300 dark:border-orange-600"
            >
              <option value="default">Sort</option>
              <option value="ratingHigh">Rating: High → Low</option>
              <option value="ratingLow">Rating: Low → High</option>
            </select>

          </div>
        </div>

        <div className="flex gap-2 mt-1">
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded-full border ${
              view === "list"
                ? "border-orange-500 text-orange-600"
                : "border-gray-300 text-gray-500 dark:border-neutral-700 dark:text-gray-400"
            }`}
          >
            <List size={18} />
          </button>

          <button
            onClick={() => setView("map")}
            className={`p-2 rounded-full border ${
              view === "map"
                ? "border-orange-500 text-orange-600"
                : "border-gray-300 text-gray-500 dark:border-neutral-700 dark:text-gray-400"
            }`}
          >
            <Map size={18} />
          </button>
        </div>
      </div>

      {view === "list" && (
        <div className="grid grid-cols-4 gap-2 mt-6">
          {finalList.map((v) => (
            <VendorCard key={v.id} {...v} saved={saved} toggleSave={toggleSave} />
          ))}
        </div>
      )}

      {view === "map" && (
        <div className="mt-6 rounded-xl overflow-hidden border border-gray-300 dark:border-neutral-700 h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14011.68469929958!2d77.2090216!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700000000000"
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
