import Link from "next/link";
import { Home, Flame, Map, Percent } from "lucide-react";

export default function FooterNav() {
  return (
    <footer
      className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-orange-500 to-orange-600 
                 dark:from-orange-600 dark:to-orange-700
                 text-white flex justify-between items-center px-6 py-3 shadow-inner z-50"
    >
      <Link href="/trending" className="flex flex-col items-center text-xs font-semibold">
        <Flame className="w-5 h-5 mb-0.5" />
        Trending
      </Link>

      <Link href="/foodtrails" className="flex flex-col items-center text-xs font-semibold">
        <Map className="w-5 h-5 mb-0.5" />
        Trails
      </Link>
      <Link
        href="/"
        className="flex flex-col items-center text-xs font-semibold 
                   bg-white dark:bg-neutral-900 text-orange-600 dark:text-orange-400 
                   px-4 py-2 rounded-full shadow-md -mt-5 border border-orange-200 dark:border-neutral-700"
      >
        <Home className="w-5 h-5" />
      </Link>

      <Link href="/explore" className="flex flex-col items-center text-xs font-semibold">
        <Map className="w-5 h-5 mb-0.5" />
        Explore
      </Link>

      <Link href="/deals" className="flex flex-col items-center text-xs font-semibold">
        <Percent className="w-5 h-5 mb-0.5" />
        Deals
      </Link>
    </footer>
  );
}
