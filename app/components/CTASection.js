import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full mt-14 bg-orange-50 dark:bg-neutral-900 py-10 px-6 text-center border-t border-orange-200 dark:border-neutral-700">
      <h2 className="text-2xl font-bold text-orange-600 dark:text-orange-400">
        Start Your Food Journey!
      </h2>

      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Discover authentic street flavors near you — from spicy chaats to sizzling kebabs.
      </p>

      <Link href="/explore">
        <button className="mt-5 bg-orange-500 dark:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold">
          Start Exploring
        </button>
      </Link>
    </section>
  );
}
