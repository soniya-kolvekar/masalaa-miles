import Link from "next/link";

export default function FooterNav() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-orange-400 flex justify-around items-center py-3 text-white shadow-inner z-50">
      <Link href="/trending" className="hover:text-orange-100 font-semibold">
        Trending Dishes
      </Link>
      <Link href="/foodtrails" className="hover:text-orange-100 font-semibold">
        Food Trails
      </Link>
      <Link href="/explore" className="hover:text-orange-100 font-semibold">
        Start Exploring
      </Link>
      <Link href="/deals" className="hover:text-orange-100 font-semibold">
        Nearby Deals
      </Link>
    </footer>
  );
}
