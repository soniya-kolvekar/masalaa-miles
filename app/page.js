import HighlightCard from "../components/HighlightCard";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-6 pb-24">
      {/* Search Section */}
      <div className="w-full flex justify-center mt-6">
        <input
          type="text"
          placeholder="Search for street food, cities, or dishes..."
          className="w-4/5 md:w-2/3 px-5 py-3 rounded-full border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm"
        />
      </div>

      {/* Highlights Section */}
      <section className="mt-10 w-full">
        <h2 className="text-2xl font-semibold text-orange-600 mb-3">
          App Highlights
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <HighlightCard title="Top Rated Vendors" />
          <HighlightCard title="Hidden Local Gems" />
          <HighlightCard title="Most Reviewed Foods" />
        </div>
      </section>

      {/* Best Street Food Section */}
      <section className="mt-10 w-full">
        <h2 className="text-2xl font-semibold text-orange-600 mb-3">
          Best Street Food Spots
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <HighlightCard title="Mumbai – Vada Pav" />
          <HighlightCard title="Delhi – Chole Bhature" />
          <HighlightCard title="Indore – Poha Jalebi" />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
