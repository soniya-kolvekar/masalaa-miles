import Link from "next/link";
import { UserCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full bg-gradient-to-r from-orange-500 to-orange-600 
                       dark:from-orange-600 dark:to-orange-700 
                       text-white px-6 py-4 shadow-md flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRWqAA7TgsMPdiOw30pcmua4x4lri7EYtIuw&s"
          alt="logo"
          className="w-6 h-6 rounded"
        />
        <h1 className="text-lg font-bold">MasalaMiles</h1>
      </div>

      <Link href="/profile">
        <UserCircle className="w-7 h-7 cursor-pointer" />
      </Link>
    </header>
  );
}
