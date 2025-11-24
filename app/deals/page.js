"use client";

import { useState } from "react";
import { Search, Percent } from "lucide-react";

function DealCard({ name, image, offer, city, rating }) {
  return (
    <div className="relative bg-white dark:bg-neutral-900 border border-orange-200 dark:border-orange-700 rounded-lg overflow-hidden">

      <span className="absolute top-1 left-1 bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded-full font-semibold shadow">
        {offer}
      </span>

      <div className="aspect-square">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="px-1 py-1">
        <p className="text-[10px] font-bold text-gray-800 dark:text-gray-100 leading-tight">
          {name}
        </p>
        <p className="text-[9px] text-gray-500 dark:text-gray-400">{city}</p>
        <p className="text-[9px] font-semibold text-orange-600 dark:text-orange-400">
          ⭐ {rating}
        </p>
      </div>
    </div>
  );
}

const DEALS = [
  {
    name: "Bombay Tawa House",
    image: "https://images.unsplash.com/photo-1605478415315-7306e52e05f4?auto=format&fit=crop&w=600&q=60",
    offer: "20% OFF",
    city: "Mumbai",
    rating: 4.6,
  },
  {
    name: "Delhi Snack Corner",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=60",
    offer: "Buy 1 Get 1",
    city: "Delhi",
    rating: 4.5,
  },
  {
    name: "Hyderabadi Biryani Hub",
    image: "https://images.unsplash.com/photo-1631515243349-58603b6451df?auto=format&fit=crop&w=600&q=60",
    offer: "30% OFF",
    city: "Hyderabad",
    rating: 4.8,
  },
  {
    name: "Kolkata Rollers",
    image: "https://images.unsplash.com/photo-1601050690597-df8b7d08fbab?auto=format&fit=crop&w=600&q=60",
    offer: "FLAT ₹50 OFF",
    city: "Kolkata",
    rating: 4.4,
  },
  {
    name: "Indore Chaat Wala",
    image: "https://images.unsplash.com/photo-1626082927389-6a7e6a2e5348?auto=format&fit=crop&w=600&q=60",
    offer: "15% OFF",
    city: "Indore",
    rating: 4.7,
  },
  {
    name: "Chennai Dosa Land",
    image: "https://images.unsplash.com/photo-1615485925609-487ba3deea7f?auto=format&fit=crop&w=600&q=60",
    offer: "Buy 2 Get 1",
    city: "Chennai",
    rating: 4.6,
  },

  {
    name: "Pune Misal House",
    image: "https://images.unsplash.com/photo-1543826173-70651703c5e9?auto=format&fit=crop&w=600&q=60",
    offer: "10% OFF",
    city: "Pune",
    rating: 4.3,
  },
  {
    name: "Bangalore Tiffin Center",
    image: "https://images.unsplash.com/photo-1614775168123-1f49f683e4c2?auto=format&fit=crop&w=600&q=60",
    offer: "₹40 CASHBACK",
    city: "Bangalore",
    rating: 4.4,
  },
  {
    name: "Lucknow Kebab Central",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=60",
    offer: "25% OFF",
    city: "Lucknow",
    rating: 4.7,
  },
  {
    name: "Jaipur Snack Bar",
    image: "https://images.unsplash.com/photo-1615485925609-487ba3deea7f?auto=format&fit=crop&w=600&q=60",
    offer: "Buy 1 Get 1",
    city: "Jaipur",
    rating: 4.2,
  },
  {
    name: "Nagpur Poha Center",
    image: "https://images.unsplash.com/photo-1707343843437-1675a8be10d1?auto=format&fit=crop&w=600&q=60",
    offer: "20% OFF",
    city: "Nagpur",
    rating: 4.1,
  },
  {
    name: "Surat Farsan Depot",
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=600&q=60",
    offer: "FLAT ₹30 OFF",
    city: "Surat",
    rating: 4.0,
  },
  {
    name: "Goa Seafood Street",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=60",
    offer: "35% OFF",
    city: "Goa",
    rating: 4.8,
  },
  {
    name: "Ahmedabad Kulfi House",
    image: "https://images.unsplash.com/photo-1603894584373-5ac6f8c80a29?auto=format&fit=crop&w=600&q=60",
    offer: "₹20 CASHBACK",
    city: "Ahmedabad",
    rating: 4.5,
  },
  {
    name: "Varanasi Chaat Point",
    image: "https://images.unsplash.com/photo-1626082927389-6a7e6a2e5348?auto=format&fit=crop&w=600&q=60",
    offer: "15% OFF",
    city: "Varanasi",
    rating: 4.6,
  },
];


const COMBO = [
  {
    name: "Biryani + Coke Combo",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=60",
    offer: "Combo @ ₹199",
    city: "Hyderabad",
    rating: 4.8,
  },
  {
    name: "Momos + Noodles Combo",
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=600&q=60",
    offer: "Save ₹50",
    city: "Delhi",
    rating: 4.3,
  },
  {
    name: "Dosa + Coffee Combo",
    image: "https://images.unsplash.com/photo-1614775168123-1f49f683e4c2?auto=format&fit=crop&w=600&q=60",
    offer: "Only ₹149",
    city: "Chennai",
    rating: 4.5,
  },

  {
    name: "Burger + Fries Combo",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=60",
    offer: "₹99 Deal",
    city: "Mumbai",
    rating: 4.2,
  },
  {
    name: "Pizza Slice + Cola",
    image: "https://images.unsplash.com/photo-1585238341986-66cce1df4086?auto=format&fit=crop&w=600&q=60",
    offer: "Save ₹70",
    city: "Chandigarh",
    rating: 4.3,
  },
  {
    name: "Chole Bhature + Lassi",
    image: "https://images.unsplash.com/photo-1626082927389-6a7e6a2e5348?auto=format&fit=crop&w=600&q=60",
    offer: "Combo @ ₹120",
    city: "Delhi",
    rating: 4.8,
  },
];


const BUDGET = [
  {
    name: "Misal Pav",
    image: "https://images.unsplash.com/photo-1543826173-70651703c5e9?auto=format&fit=crop&w=600&q=60",
    offer: "Under ₹80",
    city: "Pune",
    rating: 4.4,
  },
  {
    name: "Idli Sambar",
    image: "https://images.unsplash.com/photo-1614775168123-1f49f683e4c2?auto=format&fit=crop&w=600&q=60",
    offer: "Under ₹50",
    city: "Bangalore",
    rating: 4.6,
  },
  {
    name: "Chole Kulche",
    image: "https://images.unsplash.com/photo-1626079906493-9cfb16ad7b3c?auto=format&fit=crop&w=600&q=60",
    offer: "Under ₹70",
    city: "Amritsar",
    rating: 4.5,
  },

  // NEW
  {
    name: "Vada Pav",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=60",
    offer: "Only ₹20",
    city: "Mumbai",
    rating: 4.3,
  },
  {
    name: "Samosa",
    image: "https://images.unsplash.com/photo-1605478415315-7306e52e05f4?auto=format&fit=crop&w=600&q=60",
    offer: "Only ₹15",
    city: "Delhi",
    rating: 4.1,
  },
  {
    name: "Egg Roll",
    image: "https://images.unsplash.com/photo-1601050690597-df8b7d08fbab?auto=format&fit=crop&w=600&q=60",
    offer: "Under ₹40",
    city: "Kolkata",
    rating: 4.7,
  },
  {
    name: "Poha",
    image: "https://images.unsplash.com/photo-1707343843437-1675a8be10d1?auto=format&fit=crop&w=600&q=60",
    offer: "Under ₹25",
    city: "Indore",
    rating: 4.6,
  },
  {
    name: "Bread Omelette",
    image: "https://images.unsplash.com/photo-1541694970207-dc61f8f3d40f?auto=format&fit=crop&w=600&q=60",
    offer: "Just ₹30",
    city: "Hyderabad",
    rating: 4.5,
  },
  {
    name: "Veg Sandwich",
    image: "https://images.unsplash.com/photo-1585238341986-66cce1df4086?auto=format&fit=crop&w=600&q=60",
    offer: "₹35 Only",
    city: "Bangalore",
    rating: 4.2,
  },
];


export default function DealsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const applyFilters = (item) => {
    if (filter === "All") return true;

    if (filter === "20%" && item.offer.includes("20")) return true;
    if (filter === "BOGO" && item.offer.includes("Buy 1 Get 1")) return true;
    if (filter === "Under100" && item.offer.includes("Under")) return true;
    if (filter === "Combo" && item.offer.toLowerCase().includes("combo")) return true;
    if (filter === "Flat" && item.offer.toLowerCase().includes("flat")) return true;

    return false;
  };

  const filteredDeals = DEALS.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) &&
      applyFilters(d)
  );

  return (
    <div className="px-5 pb-28 bg-white dark:bg-black min-h-screen">

      <h2 className="text-2xl font-bold text-orange-600 dark:text-orange-400 mt-6 flex items-center gap-2">
        <Percent className="w-6 h-6" />
        Deals & Offers
      </h2>

      <div className="mt-5 relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
        <input
          type="text"
          placeholder="Search deals..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-full border border-orange-300 dark:border-orange-600 bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-100"
        />
      </div>

      <div className="mt-4 grid grid-cols-6 gap-2">

        {[
          { label: "All", value: "All" },
          { label: "20% OFF", value: "20%" },
          { label: "Buy 1 Get 1", value: "BOGO" },
          { label: "Under ₹100", value: "Under100" },
          { label: "Combo Deals", value: "Combo" },
          { label: "Flat Discounts", value: "Flat" },
        ].map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`py-2 rounded-full text-xs font-semibold border
              ${
                filter === f.value
                  ? "bg-orange-500 text-white border-orange-500 dark:bg-orange-600"
                  : "bg-orange-100 dark:bg-neutral-800 text-orange-700 dark:text-orange-400 border-orange-300 dark:border-orange-600"
              }`}
          >
            {f.label}
          </button>
        ))}

      </div>

      <h3 className="mt-10 flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-100">
        <span className="w-2 h-5 rounded-full bg-orange-500 dark:bg-orange-400"></span>
        <span className="text-lg">🔥 Best Deals Around You</span>
      </h3>

      <div className="grid grid-cols-4 gap-2 mt-3">
        {filteredDeals.map((item, i) => (
          <DealCard key={i} {...item} />
        ))}
      </div>

      <h3 className="mt-10 flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-100">
        <span className="w-2 h-5 rounded-full bg-green-500 dark:bg-green-400"></span>
        <span className="text-lg">🍽️ Combo Offers</span>
      </h3>

      <div className="grid grid-cols-4 gap-2 mt-3">
        {COMBO.map((item, i) => (
          <DealCard key={i} {...item} />
        ))}
      </div>

      <h3 className="mt-10 flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-100">
        <span className="w-2 h-5 rounded-full bg-yellow-500 dark:bg-yellow-400"></span>
        <span className="text-lg">💰 Budget Friendly Deals</span>
      </h3>

      <div className="grid grid-cols-4 gap-2 mt-3 pb-10">
        {BUDGET.map((item, i) => (
          <DealCard key={i} {...item} />
        ))}
      </div>

    </div>
  );
}
