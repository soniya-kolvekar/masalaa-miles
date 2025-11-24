export default function HighlightCard({ title, image }) {
  return (
    <div className="bg-white dark:bg-neutral-900 border border-orange-200 
                    dark:border-orange-700 rounded-lg overflow-hidden">

      <div className="aspect-square relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      <p className="text-[10px] p-1 text-center font-semibold text-gray-800 dark:text-gray-200 leading-tight">
        {title}
      </p>
    </div>
  );
}
