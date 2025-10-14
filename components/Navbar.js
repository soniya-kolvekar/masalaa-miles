import { UserCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center bg-orange-400 text-white px-6 py-4 shadow-md">
      <div className="flex items-center space-x-3">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRWqAA7TgsMPdiOw30pcmua4x4lri7EYtIuw&s" alt="logo" className="w-6 h-6" />
        <h1 className="text-xl font-bold tracking-wide">MasalaMiles</h1>
      </div>
      <UserCircle className="w-7 h-7 cursor-pointer hover:text-orange-200 transition" />
    </header>
  );
}
