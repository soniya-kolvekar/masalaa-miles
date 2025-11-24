export default function VendorCard({
  id,
  name,
  image,
  rating,
  city,
  dish,
  saved,
  toggleSave,
}) {
  return (
    <div className="relative bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 
                    rounded-lg overflow-hidden">

      <button
        onClick={(e) => {
          e.preventDefault();
          toggleSave(id);
        }}
        className="absolute top-1 right-1 bg-white dark:bg-neutral-900 text-orange-600 
                   dark:text-orange-400 text-[12px] px-1 rounded"
      >
        {saved.includes(id) ? "♥" : "♡"}
      </button>

      <div className="aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="px-1 py-1">
        <p className="text-[10px] font-bold text-gray-800 dark:text-gray-100 leading-tight">
          {name}
        </p>

        <p className="text-[9px] text-gray-500 dark:text-gray-400">
          {dish} • {city}
        </p>

        <p className="text-[9px] font-semibold text-orange-600 dark:text-orange-400">
          ⭐ {rating}
        </p>
      </div>
    </div>
  );
}
