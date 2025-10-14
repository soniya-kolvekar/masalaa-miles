export default function HighlightCard({ title }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition p-4 text-center">
      <div className="bg-gray-100 rounded-xl h-24 flex items-center justify-center text-gray-400 text-sm">
        Image Placeholder
      </div>
      <p className="mt-2 text-sm font-semibold text-gray-800">{title}</p>
    </div>
  );
}
